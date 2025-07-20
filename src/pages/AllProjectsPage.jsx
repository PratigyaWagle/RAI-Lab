// src/pages/AllProjectsPage.jsx
import React from 'react';
// Import your local projects data directly
import projectsData from '../data/projectsData'; // Adjust this path if your 'data' folder is elsewhere

const AllProjectsPage = () => {
  // Optional: You can sort projects here if you want a specific order (e.g., newest first)
  // For example, to sort by startDate, newest first:
  const sortedProjects = [...projectsData].sort((a, b) => new Date(b.startDate) - new Date(a.startDate));

  if (sortedProjects.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 min-h-screen">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Projects & Grants</h1>
        <p className="text-center text-gray-600">No projects or grants available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Projects & Grants</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedProjects.map((project) => (
          // Use project.id for the key if you added it, otherwise use index
          <div key={project.id} className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col">
            {project.imageUrl && (
              <img
                src={project.imageUrl} // Use the directly provided URL from data
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
            )}
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h2>
            <p className="text-md text-gray-600 mb-2">
              {new Date(project.startDate).toLocaleDateString()}
              {project.endDate && ` - ${new Date(project.endDate).toLocaleDateString()}`}
            </p>
            <p className="text-gray-700 mb-4 flex-grow">{project.shortDescription}</p>

            {project.isGrant && (
              <p className="text-sm text-purple-700 mb-1">
                <span className="font-bold">Grant from:</span> {project.fundingAgency}
              </p>
            )}
            {project.principalInvestigators && project.principalInvestigators.length > 0 && (
              <p className="text-sm text-gray-500 mb-1">
                <span className="font-bold">PIs:</span> {project.principalInvestigators.join(', ')}
              </p>
            )}
            {project.status && (
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mt-2 ${
                project.status === 'active' ? 'bg-green-100 text-green-800' :
                project.status === 'completed' ? 'bg-blue-100 text-blue-800' :
                project.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
              </span>
            )}
            {project.projectLink && (
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-blue-600 hover:text-blue-800 font-medium self-start"
              >
                Learn More &rarr;
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProjectsPage;