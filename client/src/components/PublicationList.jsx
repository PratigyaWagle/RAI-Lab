// client/src/components/PublicationList.jsx
import React, { useState, useEffect } from 'react';

const PublicationList = ({ publicationType }) => {
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        // Construct the API URL with the type filter
        const apiUrl = publicationType
          ? `http://localhost:5000/api/publications?type=${encodeURIComponent(publicationType)}`
          : 'http://localhost:5000/api/publications'; // Fallback to all if no type

        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPublications(data);
      } catch (error) {
        console.error(`Failed to fetch ${publicationType || 'all'} publications:`, error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPublications();
  }, [publicationType]); // Re-fetch when publicationType changes

  if (loading) {
    return <p className="text-center">Loading {publicationType ? publicationType.toLowerCase() : 'publications'}...</p>;
  }

  if (error) {
    return <p className="text-center text-red-600">Error loading {publicationType ? publicationType.toLowerCase() : 'publications'}: {error.message}</p>;
  }

  if (publications.length === 0) {
    return <p className="text-center text-gray-600">No {publicationType ? publicationType.toLowerCase() : 'publications'} available at the moment.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {publications.map((pub) => (
        <div key={pub._id} className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">{pub.title}</h2>
          <p className="text-md text-gray-700 mb-1">
            <strong>Authors:</strong> {pub.authors.join(', ')}
          </p>
          <p className="text-md text-gray-600 mb-1">
            <strong>Source:</strong> {pub.journalConference}
          </p>
          <p className="text-md text-gray-600 mb-2">
            <strong>Date:</strong> {new Date(pub.publicationDate).toLocaleDateString()}
          </p>
          <p className="text-gray-700 text-sm mb-4 flex-grow">{pub.abstract}</p>

          <div className="mt-auto"> {/* Push links to the bottom */}
            {pub.link && (
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium mr-4"
              >
                View Publication &rarr;
              </a>
            )}
            {pub.pdfLink && (
              <a
                href={pub.pdfLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-800 font-medium"
              >
                Download PDF &darr;
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PublicationList;