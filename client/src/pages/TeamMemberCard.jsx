// client/src/components/TeamMemberCard.jsx
import React from 'react';

const TeamMemberCard = ({ member }) => {
  const social = member.social || {};

  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md p-6 mb-8 items-start space-y-4 md:space-y-0 md:space-x-6 w-full">
      {/* Image Section - Left Column */}
      <div className="flex-shrink-0 w-full md:w-1/4 flex justify-center md:justify-start"> {/* Reverted to md:justify-start */}
        <img
          src={`/images/team/${member.image}`}
          alt={member.name}
          className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover border-4 border-gray-200 shadow-sm"
          onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder-person.jpg'; }}
        />
      </div>

      {/* Details Section - Right Column */}
      <div className="flex-grow text-center md:text-left">
        <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
        <p className="text-lg text-gray-700 mb-2">{member.title}</p>
        {member.description && (
          <p className="text-gray-600 mb-4 leading-relaxed">{member.description}</p>
        )}

        {/* Social Links */}
        <div className="flex justify-center md:justify-start space-x-4 mt-4">
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