// src/components/admin/AdminTable.jsx
import React from 'react';

function AdminTable({ data, fields, onEdit, onDelete }) {
  if (!data || data.length === 0) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-md text-center text-gray-600">
        No items to display. Add a new one!
      </div>
    );
  }

  const getNestedValue = (obj, path) => {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
  };

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-md p-6">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {fields.map(field => (
              <th
                key={field.key}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {field.label}
              </th>
            ))}
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map(item => (
            <tr key={item.id}>
              {fields.map(field => (
                <td key={`<span class="math-inline">\{item\.id\}\-</span>{field.key}`} className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                  {field.key.includes('.')
                    ? (Array.isArray(getNestedValue(item, field.key))
                      ? getNestedValue(item, field.key).join(', ') // Join array values for display
                      : getNestedValue(item, field.key) || '-')
                    : (Array.isArray(item[field.key])
                      ? item[field.key].join(', ')
                      : item[field.key] || '-')}
                </td>
              ))}
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button
                  onClick={() => onEdit(item)}
                  className="text-indigo-600 hover:text-indigo-900 mr-4"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(item.id)}
                  className="text-red-600 hover:text-red-900"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminTable;