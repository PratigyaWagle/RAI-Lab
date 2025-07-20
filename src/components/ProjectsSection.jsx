// src/components/ProjectsSection.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
// Import your local projects data directly
import projectsData from '../data/projectsData'; // Adjust this path if your 'data' folder is elsewhere

/**
 * ProjectsSection Component
 * Displays a list of projects, with options to limit the number shown
 * and to display it as a featured section for the homepage.
 *
 * @param {number} [limit] - Optional. The maximum number of projects to display. If not provided, all fetched projects are shown.
 * @param {boolean} [isFeatured=false] - Optional. If true, renders a "Featured Projects" title and "View All" button.
 */
function ProjectsSection({ limit, isFeatured = false }) {
  // Define the custom olive green color (if used in this component)
  const oliveGreen = '#4a542b'; // Assuming this color is consistent across your site

  // Sort all projects by startDate (newest first) and then apply the limit if provided.
  const displayedProjects = [...projectsData]
    .sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
    .slice(0, limit || projectsData.length); // If limit is not provided, take all

  // No need for loading, error, or empty states based on fetch.
  // We check for no projects after potential filtering/slicing.
  if (displayedProjects.length === 0) {
    return (
      <section className={`py-16 ${isFeatured ? 'bg-gray-100' : 'bg-white'}`}>
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">No projects available at the moment.</p>
        </div>
      </section>
    );
  }

  // --- Main Render for Projects ---
  return (
    <section className={`py-16 ${isFeatured ? 'bg-gray-100' : 'bg-white'}`}> {/* Background adjusts based on isFeatured */}
      <div className="container mx-auto px-4">
        {/* Conditional rendering for the section header based on 'isFeatured' prop */}
        {isFeatured ? (
          // Header for the Featured Projects section on the homepage
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Featured Projects</h2>
            <Link
              to="/projects-grants" // Link to your full projects page
              className="text-[#4a542b] hover:text-gray-700 font-semibold py-2 px-6 rounded-full transition duration-300 transform hover:scale-105 flex items-center" // Changed to custom hex color
            >
              View All Projects <span className="ml-2 text-xl">&rarr;</span> {/* Arrow icon */}
            </Link>
          </div>
        ) : (
          // Header for the full Projects & Grants page (if this component is reused for the full page)
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">All Projects & Grants</h2>
        )}

        {/* Grid container for project boxes - responsive layout */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> {/* Adjusted to 4 columns for desktop */}
          {/* Map through the projects array and render each project box */}
          {displayedProjects.map((project, index) => (
            <div
              key={project.id} // Use project.id for the key
              className="relative bg-white rounded-lg shadow-md p-6 flex flex-col justify-between border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              {/* Numbered Circle (only for featured section) */}
              {isFeatured && (
                <div className="absolute -top-3 -left-3 bg-[#4a542b] text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold shadow-md"> {/* Changed to custom hex color */}
                  {index + 1}
                </div>
              )}

              {/* Image (if available) */}
              {project.imageUrl && (
                <img
                  src={project.imageUrl} // Use the directly provided URL from data
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
              )}

              <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-2">{project.title}</h3>
              <p className="text-gray-700 text-sm mb-4 flex-grow line-clamp-5">{project.longDescription}</p>

              {/* Link to individual project detail page (or external link) */}
              {project.projectLink ? (
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4a542b] hover:text-gray-700 font-medium self-start text-sm flex items-center"
                >
                  Learn More <span className="ml-1 text-base">&rarr;</span>
                </a>
              ) : (
                // Fallback for internal project detail pages if projectLink is not present
                // This assumes you have a route like /projects/:id configured in your App.js
                <Link
                  to={`/projects/${project.id}`} // Use project.id for internal route
                  className="text-[#4a542b] hover:text-gray-700 font-medium self-start text-sm flex items-center"
                >
                  Learn More <span className="ml-1 text-base">&rarr;</span>
                </Link>
              )}
            </div>
          ))}
        </div>

        {isFeatured && (
          <div className="text-center mt-12">
            <p className="text-gray-700 text-lg">
              Explore our complete list of projects and find detailed information about our research initiatives and their impact on transportation systems.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProjectsSection;