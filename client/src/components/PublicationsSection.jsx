// src/components/PublicationsSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// Import all individual publication data files
import journalPublications from '../data/journalPublications';
import conferencePublications from '../data/conferencePublications';
import posterPublications from '../data/posterPublications';

const PublicationsSection = () => {
    const oliveGreen = '#4a542b';

    // Combine all publications into a single array
    const allPublications = [
        ...journalPublications,
        ...conferencePublications,
        ...posterPublications
    ];

    // Get the 3 most recent publications from the combined list
    const recentPublications = [...allPublications]
        .sort((a, b) => new Date(b.publicationDate) - new Date(a.publicationDate))
        .slice(0, 3); // Limit to 3 for the home page section

    if (recentPublications.length === 0) {
        return (
            <section id="publications-section" className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">Latest Publications</h2>
                    <p className="text-gray-600">No recent publications available at the moment.</p>
                </div>
            </section>
        );
    }

    return (
        <section id="publications-section" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">Latest Publications</h2>
                    <Link
                        to="/publications" // Link to your AllPublicationsOverviewPage
                        className="text-[#4a542b] hover:text-gray-700 font-semibold py-2 px-6 rounded-full transition duration-300 transform hover:scale-105 flex items-center"
                    >
                        View All Publications <span className="ml-2 text-xl">&rarr;</span>
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {recentPublications.map((pub) => (
                        <div key={pub.id} className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{pub.title}</h3>
                            <p className="text-md text-gray-700 mb-1">
                                <strong>Authors:</strong> {pub.authors.join(', ')}
                            </p>
                            <p className="text-md text-gray-600 mb-1">
                                <strong>Source:</strong> {pub.journalConference}
                            </p>
                            <p className="text-md text-gray-600 mb-2">
                                <strong>Date:</strong> {new Date(pub.publicationDate).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </p>
                            <p className="text-gray-700 text-sm mb-4 flex-grow line-clamp-3">{pub.abstract}</p>

                            <div className="mt-auto flex flex-wrap gap-x-4 gap-y-2">
                                {pub.link && (
                                    <a
                                        href={pub.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-blue-800 font-medium"
                                    >
                                        View Publication &rarr;
                                    </a>
                                )}
                                {pub.doi && (
                                    <a
                                        href={`https://doi.org/${pub.doi}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-purple-600 hover:text-purple-800 font-medium"
                                    >
                                        DOI &rarr;
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PublicationsSection;