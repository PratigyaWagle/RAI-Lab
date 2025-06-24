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
                            className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300 transform hover:scale-105"
                        >
                            View All
                        </Link>
                    </div>
                ) : (
                    // Header for the full Projects & Grants page
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">All Projects & Grants</h2>
                )}

                {/* Grid container for project boxes - responsive layout */}
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> {/* Adjusted to 4 columns for desktop */}
                    {/* Map through the projects array and render each project box */}
                    {projects.map((project) => (
                        <div
                            key={project._id || project.id} // Ensure a unique key for each project item
                            className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between border border-gray-200 hover:shadow-xl transition-all duration-300"
                        >
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                            <p className="text-gray-700 text-sm mb-4 flex-grow line-clamp-3">{project.description}</p> {/* line-clamp for consistent description height */}
                            {/* Link to individual project detail page (adjust path if needed) */}
                            <Link
                                to={project.link || `/projects/${project._id || project.id}`} // Use project's link or a dynamic path
                                className="inline-block mt-4 bg-green-600 text-white font-semibold py-2 px-4 rounded-full hover:bg-green-700 transition duration-300 self-start text-sm"
                            >
                                Learn More
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectsSection;