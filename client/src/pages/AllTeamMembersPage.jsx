// src/pages/AllTeamMembersPage.jsx
import React from 'react';
import teamMembersData from '../data/teamMembersData'; // Import the team data
import SocialIcon from '../components/SocialIcon'; // Import the new SocialIcon component

function AllTeamMembersPage() {
  const handleImageError = (e) => {
    e.target.onerror = null; // Prevent infinite loop
    e.target.src = '/images/placeholder-profile.jpg'; // Path to a fallback image
    console.error("Failed to load image:", e.target.src);
  };

  return (
    <div className="min-h-screen py-12 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="lg:flex lg:space-x-12"> {/* Flex container for the two-column layout */}

          {/* Left Column: Titles and Description - REMOVED STICKY CLASSES */}
          <div className="lg:w-1/3 mb-8 lg:mb-0"> {/* Removed lg:sticky lg:top-12 self-start */}
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Our Team</h1>
            <p className="mt-1 text-lg text-gray-600">Meet the researchers, students, and staff behind our work</p>
          </div>

          {/* Right Column: Team Members List */}
          <div className="lg:w-2/3"> {/* This column will contain all the team member cards */}

            {/* "Current Team" heading (always visible on the right side) */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-700 flex items-center">
                 {/* Icon from AIT LAB layout */}
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h-2v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2H3m14 0h2a2 2 0 002-2v-2a2 2 0 00-2-2H7a2 2 0 00-2 2v2a2 2 0 002 2h2m4-12v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2m.01 6a1 1 0 102 0 1 1 0 00-2 0zm7 0a1 1 0 102 0 1 1 0 00-2 0z" />
                 </svg>
                Current Team
              </h2>
            </div>

            <div className="space-y-6"> {/* Space out individual member cards */}
              {teamMembersData.map(member => (
                <div key={member.id} className="bg-white rounded-lg shadow-sm overflow-hidden md:flex items-start p-6 border border-gray-100">
                  {/* Image Section (Left) */}
                  <div className="flex-shrink-0 flex justify-center mb-4 md:mb-0 md:mr-6">
                    <img
                      src={`/images/${member.image}`}
                      alt={member.name}
                      className="w-32 h-32 rounded-lg object-cover"
                      onError={handleImageError}
                    />
                  </div>

                  {/* Text Content Section (Right) */}
                  <div className="flex-grow text-center md:text-left">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{member.title}</p>
                    {/* Only show description if it exists */}
                    {member.description && (
                       <p className="text-gray-700 text-sm leading-relaxed mb-4">{member.description}</p>
                    )}

                    {/* Social Icons - AIT LAB layout shows these horizontally near the description */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-2">
                        {/* View Profile Button */}
                        {member.social.profile && (
                           <a href={member.social.profile} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                               View Profile
                           </a>
                        )}
                        {member.social.email && (
                          <SocialIcon
                            type="email"
                            url={member.social.email}
                            label="Email"
                            className="text-gray-500 hover:text-gray-700"
                          />
                        )}

                        {member.social.linkedin && (
                          <SocialIcon
                            type="linkedin"
                            url={member.social.linkedin}
                            label="LinkedIn"
                            className="text-gray-500 hover:text-gray-700"
                          />
                        )}

                        {member.social.googleScholar && (
                            <SocialIcon
                                type="googleScholar"
                                url={member.social.googleScholar}
                                label="Google Scholar"
                                className="text-gray-500 hover:text-gray-700"
                            />
                        )}
                        {member.social.researchgate && (
                            <SocialIcon
                                type="researchgate"
                                url={member.social.researchgate}
                                label="ResearchGate"
                                className="text-gray-500 hover:text-gray-700"
                            />
                        )}
                        {member.social.website && (
                            <SocialIcon
                                type="website"
                                url={member.social.website}
                                label="Website"
                                className="text-gray-500 hover:text-gray-700"
                            />
                        )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllTeamMembersPage;