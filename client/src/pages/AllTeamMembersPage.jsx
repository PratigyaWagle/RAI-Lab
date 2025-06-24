// client/src/pages/AllTeamMembersPage.jsx
import React, { useState, useEffect } from 'react';
import TeamMemberCard from '../components/TeamMemberCard';

const AllTeamMembersPage = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/team');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setTeamMembers(data);
      } catch (error) {
        console.error('Failed to fetch team members:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 min-h-screen text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-12">Our Team</h1>
        <p className="text-xl text-gray-700">Loading team members...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-16 min-h-screen text-center text-red-600">
        <h1 className="text-4xl font-bold text-gray-800 mb-12">Our Team</h1>
        <p className="text-xl">Error loading team members: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      {/* Main Two-Column Layout */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column: Our Team, Description, Group Photo */}
        <div className="md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Our Team
          </h1>
          <p className="text-lg text-gray-700 mb-8 max-w-lg md:max-w-none">
            Meet the dedicated researchers, talented students, and supportive staff who drive our innovative work and contribute to our success.
          </p>

          {/* Group Photo Section */}
          <div className="mb-8 w-full">
            {/* Make sure the image file exists in public/images and the path is correct */}
            <img
              src="/images/GroupImage.png" // <--- IMPORTANT: Update this path if your image name is different!
              alt="RAI Lab Group Photo"
              className="w-full h-auto rounded-lg shadow-xl border-4 border-gray-200 object-cover"
            />
          </div>

          {/* Optional: Add a small caption for the group photo */}
          <p className="text-sm text-gray-500 mb-4">
            (Caption: Our team infront of the Ingram Hall.)
          </p>

        </div>

        {/* Right Column: Current Team Members List */}
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center md:text-left">
            Current Team
          </h2>
          <div className="space-y-8">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member._id} member={member} />
            ))}
          </div>
        </div>
      </div>

      {/* You can add sections for Alumni or Collaborators here similarly outside the main flex if they span full width, or inside if they fit the columns */}
      {/*
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Alumni</h2>
        <div className="space-y-8">
          {/ * Filter and map alumni here * /}
        </div>
      </section>
      */}
    </div>
  );
};

export default AllTeamMembersPage;