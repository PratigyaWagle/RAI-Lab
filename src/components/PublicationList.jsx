// src/components/PublicationList.jsx
import React, { useState, useEffect } from 'react';

// Import all publication data types
import journalPublications from '../data/journalPublications';
import conferencePublications from '../data/conferencePublications';
import posterPublications from '../data/posterPublications';

const PublicationList = ({ publicationType }) => {
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let dataToUse = [];
    switch (publicationType) {
      case "Journal Article":
        dataToUse = journalPublications;
        break;
      case "Conference Paper":
        dataToUse = conferencePublications;
        break;
      case "Poster":
        dataToUse = posterPublications;
        break;
      default:
        // If no specific type, or an unknown type, combine all (or handle error)
        // For simplicity, let's just make it empty if type is unknown/not provided
        dataToUse = []; // Or combine all: [...journalPublications, ...conferencePublications, ...posterPublications];
        console.warn(`Unknown publication type: ${publicationType}. No publications displayed.`);
        break;
    }

    // Sort publications by date in descending order (newest first)
    const sortedPublications = [...dataToUse].sort((a, b) =>
      new Date(b.publicationDate) - new Date(a.publicationDate)
    );

    setPublications(sortedPublications);
    setLoading(false);
  }, [publicationType]); // Re-run effect if publicationType changes

  if (loading) {
    return <p className="text-center">Loading {publicationType ? publicationType.toLowerCase() : 'publications'}...</p>;
  }

  if (publications.length === 0) {
    return (
      <p className="text-center text-gray-600">
        No {publicationType ? publicationType.toLowerCase() : 'publications'} available at the moment.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {publications.map((pub) => (
        <div key={pub.id} className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">{pub.title}</h2>
          <p className="text-md text-gray-700 mb-1">
            <strong>Authors:</strong> {pub.authors.join(', ')}
          </p>
          <p className="text-md text-gray-600 mb-1">
            <strong>Source:</strong> {pub.journalConference}
          </p>
          <p className="text-md text-gray-600 mb-2">
            <strong>Date:</strong> {new Date(pub.publicationDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
          <p className="text-gray-700 text-sm mb-4 flex-grow">{pub.abstract}</p>

          <div className="mt-auto flex flex-wrap gap-x-4 gap-y-2">
            {pub.link && (
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
                
              >
                View Publication &rarr;
              </a>
            )}
            {pub.doi && (
              <a
                href={`https://doi.org/${pub.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-800 font-medium"
              >
                DOI &rarr;
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PublicationList;