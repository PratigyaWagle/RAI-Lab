// client/src/pages/AllTeamMembersPage.jsx

import React, { useState, useEffect } from 'react';
import TeamMemberCard from '../components/TeamMemberCard'; // This import path looks correct
import { teamMembersData as localTeamMembersData } from '../data/teamMemberData'; // This import path looks correct

const AllTeamMembersPage = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    try {
      setTeamMembers(localTeamMembersData);
      setLoading(false);
    } catch (err) {
      setError("Failed to load local team members data.");
      console.error("Error loading local team members data:", err);
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-6 py-20 text-center">
        <p className="text-gray-600">Loading team members...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-6 py-20 text-center">
        <p className="text-red-500">Error loading team members: {error}</p>
      </div>
    );
  }

  // Define the path for your group photo here
  const groupPhotoUrl = `${process.env.PUBLIC_URL}/images/group_image.png`; // Make sure 'group_image.png' is the correct filename

  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        {/* --- START OF LAYOUT MODIFICATION --- */}
        {/* Main two-column layout: flex-col on small screens, flex-row on medium screens and up */}
        <div className="flex flex-col md:flex-row md:space-x-12"> {/* md:space-x-12 for spacing between columns */}

          {/* LEFT COLUMN: "Our Team" Header, Description, and Group Photo */}
          <div className="md:w-1/3 mb-8 md:mb-0"> {/* Occupies 1/3 width on medium screens and up */}
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2> {/* New header */}
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Meet the researchers, students, and staff behind our work.
            </p>
            {/* Group Photo Section */}
            <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
              <img
                src={groupPhotoUrl}
                alt="RAI Lab Group"
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.target.onerror = null; // Prevents infinite loop if fallback also fails
                  e.target.src = `${process.env.PUBLIC_URL}/images/placeholder_group.png`; // Fallback image for group photo
                }}
              />
              {/* Optional: Add a caption for the group photo */}
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center p-2 text-sm">
                The RAI Lab Team
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: "Current Team" Header and Individual Member List */}
          <div className="md:w-2/3"> {/* Occupies 2/3 width on medium screens and up */}
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Current Team</h2> {/* New header */}
            {/* This div replaces the grid and adds vertical spacing between each TeamMemberCard */}
            <div className="space-y-6">
              {teamMembers.length > 0 ? (
                teamMembers.map((member, index) => (
                  <TeamMemberCard key={member.name || index} member={member} />
                ))
              ) : (
                <p className="col-span-full text-center text-gray-500">No team members to display.</p>
              )}
            </div>
          </div>
        </div>
        {/* --- END OF LAYOUT MODIFICATION --- */}
      </div>
    </div>
  );
};

export default AllTeamMembersPage;