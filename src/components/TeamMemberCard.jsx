// client/src/components/TeamMemberCard.jsx

import React from 'react';

const TeamMemberCard = ({ member }) => {
  const social = member.social || {};

  // This constructs the correct path for individual member photos
  const imageUrl = `${process.env.PUBLIC_URL}/images/${member.image}`;

  return (
    // This wrapper ensures the card is a flex container, aligning items horizontally
    // and setting a consistent background/shadow.
    <div className="flex bg-white rounded-lg shadow-md p-6 items-start space-x-6 w-full">
      {/* Image Section: fixed width/height for circular image */}
      <div className="flex-shrink-0 w-36 h-36">
        <img
          src={imageUrl}
          alt={member.name}
          className="w-full h-full rounded-full object-cover border-4 border-gray-200 shadow-sm"
          onError={(e) => {
            e.target.onerror = null; // Prevents infinite loop if fallback also fails
            // Fallback to a placeholder if the primary image isn't found
            e.target.src = `${process.env.PUBLIC_URL}/images/placeholder_person.png`;
          }}
        />
      </div>

      {/* Details Section: Takes remaining space, aligns text to the left */}
      <div className="flex-grow text-left">
        <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
        <p className="text-lg text-gray-700 mb-2">{member.title}</p>
        {member.description && (
          <p className="text-gray-600 mb-4 leading-relaxed">{member.description}</p>
        )}

        {/* Social Links: Aligned to the left */}
        <div className="flex justify-start space-x-4 mt-4">
          {social.email && (
            <a
              href={`mailto:${social.email}`}
              className="text-blue-600 hover:text-blue-800 transition-colors"
              aria-label={`Email ${member.name}`}
            >
              <i className="fas fa-envelope text-xl"></i>
            </a>
          )}
          {social.linkedin && (
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 transition-colors"
              aria-label={`LinkedIn profile of ${member.name}`}
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
          )}
          {social.twitter && (
            <a
              href={social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600 transition-colors"
              aria-label={`Twitter profile of ${member.name}`}
            >
              <i className="fab fa-twitter text-xl"></i>
            </a>
          )}
          {social.github && (
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-900 transition-colors"
              aria-label={`GitHub profile of ${member.name}`}
            >
              <i className="fab fa-github text-xl"></i>
            </a>
          )}
          {social.researchGate && (
            <a
              href={social.researchGate}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 hover:text-green-800 transition-colors"
              aria-label={`ResearchGate profile of ${member.name}`}
            >
              <i className="fas fa-globe text-xl"></i>
            </a>
          )}
          {social.personalWebsite && (
            <a
              href={social.personalWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-700 transition-colors"
              aria-label={`Personal website of ${member.name}`}
            >
              <i className="fas fa-link text-xl"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;