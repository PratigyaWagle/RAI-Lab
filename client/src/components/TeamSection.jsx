// client/src/components/TeamSection.jsx

import React from 'react';
import { teamMembersData } from '../data/TeamMembersData';
import TeamMemberCard from './TeamMemberCard'; // Adjust path if necessary

function TeamSection() {
  // Assuming 'group_image.png' is the filename for your group photo
  const groupPhotoUrl = `${process.env.PUBLIC_URL}/images/group_image.png`;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Main two-column layout */}
      <div className="flex flex-col md:flex-row md:space-x-12"> {/* md:space-x-12 for spacing between columns */}

        {/* Left Column: Our Team Header, Description, and Group Photo */}
        <div className="md:w-1/3 mb-8 md:mb-0"> {/* Adjust width as needed */}
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Meet the researchers, students, and staff behind our work.
          </p>
          {/* Group Photo - Add this section */}
          <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
            <img
              src={groupPhotoUrl}
              alt="RAI Lab Group"
              className="w-full h-auto object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src = `${process.env.PUBLIC_URL}/images/placeholder_group.png`; }}
            />
            {/* Optional: Add a caption or overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center p-2 text-sm">
              The RAI Lab Team
            </div>
          </div>
        </div>

        {/* Right Column: Current Team List */}
        <div className="md:w-2/3"> {/* Adjust width as needed, remaining space */}
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Current Team</h2> {/* Updated header text */}
          <div className="space-y-6"> {/* Adds vertical space between individual member cards */}
            {teamMembersData.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamSection;
