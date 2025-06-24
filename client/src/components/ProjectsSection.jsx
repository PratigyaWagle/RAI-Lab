// src/components/ProjectsSection.jsx
import React, { useState, useEffect } from 'react';
import { fetchProjects } from '../data/appData';
import { Link } from 'react-router-dom'; // Import Link for navigation

/**
 * ProjectsSection Component
 * Displays a list of projects, with options to limit the number shown
 * and to display it as a featured section for the homepage.
 *
 * @param {number} [limit] - Optional. The maximum number of projects to display. If not provided, all fetched projects are shown.
 * @param {boolean} [isFeatured=false] - Optional. If true, renders a "Featured Projects" title and "View All" button.
 */
function ProjectsSection({ limit, isFeatured = false }) {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect hook to fetch project data when the component mounts or 'limit' prop changes
    useEffect(() => {
        const getProjects = async () => {
            try {
                const data = await fetchProjects(); // Fetch all projects
                console.log("Data fetched by fetchProjects:", data);

                // If a limit is provided, slice the array; otherwise, use all data
                setProjects(limit ? data.slice(0, limit) : data);
            } catch (err) {
                console.error("Error fetching projects:", err);
                setError(err); // Set error state
            } finally {
                setLoading(false); // End loading
            }
        };
        getProjects();
    }, [limit]); // Dependency array: re-run if 'limit' prop changes

    // --- Loading, Error, and No Projects States ---
    if (loading) {
        return (
            <section className={`py-16 ${isFeatured ? 'bg-gray-100' : 'bg-white'}`}>
                <div className="container mx-auto px-4 text-center">
                    <p className="text-gray-600">Loading projects...</p>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className={`py-16 ${isFeatured ? 'bg-gray-100' : 'bg-white'}`}>
                <div className="container mx-auto px-4 text-center">
                    <p className="text-red-600">Error loading projects: {error.message}</p>
                </div>
            </section>
        );
    }

    if (projects.length === 0) {
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
                    // Header for the full Projects & Grants page
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">All Projects & Grants</h2>
                )}

                {/* Grid container for project boxes - responsive layout */}
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> {/* Adjusted to 4 columns for desktop */}
                    {/* Map through the projects array and render each project box */}
                    {projects.map((project, index) => ( // Added index for numbering
                        <div
                            key={project._id || project.id} // Ensure a unique key for each project item
                            className="relative bg-white rounded-lg shadow-md p-6 flex flex-col justify-between border border-gray-200 hover:shadow-xl transition-all duration-300"
                        >
                            {/* Numbered Circle (only for featured section) */}
                            {isFeatured && (
                                <div className="absolute -top-3 -left-3 bg-[#4a542b] text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold shadow-md"> {/* Changed to custom hex color */}
                                    {index + 1}
                                </div>
                            )}

                            <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-2">{project.title}</h3> {/* Adjusted font size and margin */}
                            {/* Changed to longDescription for more content as per AIT Lab example */}
                            <p className="text-gray-700 text-sm mb-4 flex-grow line-clamp-5">{project.longDescription}</p> 
                            
                            {/* Link to individual project detail page (adjust path if needed) */}
                            <Link
                                to={project.projectLink || `/projects/${project._id || project.id}`} // Use project's link or a dynamic path
                                className="text-[#4a542b] hover:text-gray-700 font-medium self-start text-sm flex items-center" // Changed to custom hex color
                            >
                                Learn More <span className="ml-1 text-base">&rarr;</span>
                            </Link>
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