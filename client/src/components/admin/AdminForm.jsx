import React, { useState, useEffect } from 'react';
import { generateUniqueId } from '../../data/appData'; // Assuming appData.js is now correctly located and named

function AdminForm({ item, fields, onSubmit, onCancel, itemType }) {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (item) {
      // If editing an existing item, pre-fill the form with its data
      setFormData(item);
    } else {
      // If adding a new item, initialize with defaults or empty values
      const initialData = {};
      fields.forEach(field => {
        if (field.type === 'array') {
          initialData[field.key] = [];
        } else if (field.type === 'select' && field.options && field.options.length > 0) {
          initialData[field.key] = field.options[0].value;
        } else if (field.key.includes('.')) {
            // Handle nested keys for initialization
            const [parentKey, childKey] = field.key.split('.');
            if (!initialData[parentKey]) {
                initialData[parentKey] = {};
            }
            initialData[parentKey][childKey] = '';
        }
          else {
          initialData[field.key] = '';
        }
      });
      setFormData(initialData);
    }
  }, [item, fields]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name.includes('.')) {
        // Handle nested fields (e.g., social.email)
        const [parentKey, childKey] = name.split('.');
        setFormData(prevData => ({
            ...prevData,
            [parentKey]: {
                ...(prevData[parentKey] || {}), // Ensure parent object exists
                [childKey]: value,
            },
        }));
    } else if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else if (type === 'file') {
        // Handle file input if you decide to implement file uploads later
        // For now, we'll just set the value as the filename
        setFormData({ ...formData, [name]: e.target.files[0] ? e.target.files[0].name : '' });
    } else if (type === 'textarea' && value === '') {
      // Keep empty string for textarea if cleared
      setFormData({ ...formData, [name]: '' });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleArrayChange = (e, fieldKey) => {
    const value = e.target.value;
    setFormData({ ...formData, [fieldKey]: value.split(',').map(s => s.trim()).filter(s => s) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const itemToSave = { ...formData };

    if (!itemToSave.id) {
      // Assign a new unique ID if it's a new item
      itemToSave.id = generateUniqueId(itemType);
    }

    onSubmit(itemToSave);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">{item ? `Edit ${itemType.slice(0, -1)}` : `Add New ${itemType.slice(0, -1)}`}</h2>
      <form onSubmit={handleSubmit}>
        {fields.map(field => {
          if (field.key === 'id' && !item) return null; // Don't show ID for new items
          const fieldValue = field.key.includes('.')
            ? getNestedValue(formData, field.key)
            : formData[field.key];

          return (
            <div key={field.key} className="mb-4">
              <label htmlFor={field.key} className="block text-gray-700 text-sm font-bold mb-2">
                {field.label} {field.required && <span className="text-red-500">*</span>}
              </label>
              {field.type === 'textarea' ? (
                <textarea
                  id={field.key}
                  name={field.key}
                  value={fieldValue || ''}
                  onChange={handleChange}
                  rows={field.rows || 3}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required={field.required}
                  placeholder={field.placeholder}
                ></textarea>
              ) : field.type === 'select' ? (
                <select
                  id={field.key}
                  name={field.key}
                  value={fieldValue || ''}
                  onChange={handleChange}
                  className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required={field.required}
                >
                  {field.options.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              ) : field.type === 'array' ? (
                <input
                  type="text"
                  id={field.key}
                  name={field.key}
                  value={Array.isArray(fieldValue) ? fieldValue.join(', ') : ''}
                  onChange={(e) => handleArrayChange(e, field.key)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required={field.required}
                  placeholder={field.placeholder || 'Comma-separated values'}
                />
              ) : (
                <input
                  type={field.type || 'text'}
                  id={field.key}
                  name={field.key}
                  value={fieldValue || ''}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required={field.required}
                  placeholder={field.placeholder}
                  readOnly={field.key === 'id' && !!item} // Make ID read-only if editing
                />
              )}
            </div>
          );
        })}
        <div className="flex justify-end gap-4 mt-6">
          <button
            type="button"
            onClick={onCancel}
            className="btn-secondary"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn-primary"
          >
            {item ? `Update ${itemType.slice(0, -1)}` : `Add ${itemType.slice(0, -1)}`}
          </button>
        </div>
      </form>
    </div>
  );
}

// Helper to get nested value, similar to AdminTable
const getNestedValue = (obj, path) => {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
};

export default AdminForm;