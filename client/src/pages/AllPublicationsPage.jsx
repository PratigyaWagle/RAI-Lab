// src/pages/AllPublicationsPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Dummy data for demonstration purposes.
// In a real application, this data would likely come from an API or a more structured source.
const allPublicationsData = [
  {
    id: 1,
    title: "Impact Of Operating Speed, Roadway Curvature, And Precipitation On Roadway...",
    authors: "Jinli Liu, Rohit Chakraborty, Shriyank Somvanshi, Subasis Das",
    description: "Travel Behaviour and Society",
    link: "#"
  },
  {
    id: 2,
    title: "Uncovering The Role Of Restraint Usage In Driver Ejection: A Data Mining Investigatio...",
    authors: "Rohit Chakraborty, Anannya Ghosh Tusti, Ahmed Hossain, Mohaddese Salehiam, Syed Aaqib Javed, Md Monzurul Islam, Diwas Pandit, Subasish Das",
    description: "Traffic Injury Prevention",
    link: "#"
  },
  {
    id: 3,
    title: "Pattern Recognition In Crash Clusters Involving Vehicles With Advanced Driving...",
    authors: "Reuben Tamakloe, Mahdi Khorasani, Subasish Das, Jinli Kim",
    description: "Accident Analysis & Prevention",
    link: "#"
  },
  {
    id: 4,
    title: "Understanding Pedestrian Behavior at Signalized Intersections using Computer Vision",
    authors: "Alice Johnson, Bob Williams",
    description: "Journal of Urban Planning",
    link: "#"
  },
  {
    id: 5,
    title: "AI Ethics in Autonomous Vehicles: A Regulatory Framework",
    authors: "Charlie Davis, Eve Brown",
    description: "Autonomous Systems Law Review",
    link: "#"
  },
  {
    id: 6,
    title: "Data Privacy Concerns in Smart City Deployments",
    authors: "Frank Green, Grace Hall",
    description: "Smart City Development Journal",
    link: "#"
  },
  {
    id: 7,
    title: "The Future of Human-AI Collaboration in Design",
    authors: "Heidi Black, Ivan White",
    description: "Design Innovations",
    link: "#"
  },
  {
    id: 8,
    title: "Predicting Traffic Congestion with Machine Learning Models",
    authors: "Judy Blue, Kevin Red",
    description: "Transportation Research Part C",
    link: "#"
  },
  {
    id: 9,
    title: "Bias Mitigation Strategies in AI for Public Safety",
    authors: "Liam Gold, Mia Silver",
    description: "AI & Society",
    link: "#"
  },
  {
    id: 10,
    title: "Algorithmic Fairness in Resource Allocation",
    authors: "Noah Bronze, Olivia Copper",
    description: "Journal of Applied Ethics",
    link: "#"
  },
  {
    id: 11,
    title: "Sustainable Urban Mobility with AI-Powered Traffic Management",
    authors: "Peter Steel, Quinn Iron",
    description: "Urban Mobility Studies",
    link: "#"
  },
  {
    id: 12,
    title: "The Role of AI in Climate Change Mitigation: Opportunities and Challenges",
    authors: "Rachel Lead, Sam Zinc",
    description: "Environmental AI Journal",
    link: "#"
  },
];


function AllPublicationsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Number of publications to display per page

  // Calculate the total number of pages
  const totalPages = Math.ceil(allPublicationsData.length / itemsPerPage);

  // Get current publications for the displayed page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPublications = allPublicationsData.slice(indexOfFirstItem, indexOfLastItem);

  // Function to change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Functions to go to next/previous page
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Generate page numbers for the pagination controls
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">All Our Publications</h1>

        <p className="text-lg text-gray-700 text-center mb-12">
          This page will showcase a comprehensive list of all research papers, articles, and scholarly works produced by the RAI Lab.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPublications.map((pub) => (
            <div
              key={pub.id}
              className="bg-white p-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105" // Added transition and transform classes
            >
              <h3 className="text-xl font-semibold text-olive-dark mb-2">{pub.title}</h3>
              <p className="text-gray-600 text-sm mb-3">Authors: {pub.authors}</p>
              <p className="text-gray-700 text-base">{pub.description}</p>
              <div className="mt-4">
                <a href={pub.link} className="text-olive hover:underline text-sm font-medium" target="_blank" rel="noopener noreferrer">
                  View Publication <span className="ml-1 text-xs">&#x2197;</span> {/* External link icon */}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && ( // Only show pagination if there's more than one page
          <nav className="mt-12 flex justify-center">
            <ul className="flex items-center space-x-2">
              {/* Previous Button */}
              <li>
                <button
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-md transition duration-300 ${
                    currentPage === 1
                      ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      : 'bg-olive-dark text-white hover:bg-olive-accent'
                  }`}
                >
                  Previous
                </button>
              </li>

              {/* Page Numbers */}
              {pageNumbers.map((number) => (
                <li key={number}>
                  <button
                    onClick={() => paginate(number)}
                    className={`px-4 py-2 rounded-md transition duration-300 ${
                      currentPage === number
                        ? 'bg-olive text-white shadow-md'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {number}
                  </button>
                </li>
              ))}

              {/* Next Button */}
              <li>
                <button
                  onClick={nextPage}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-md transition duration-300 ${
                    currentPage === totalPages
                      ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      : 'bg-olive-dark text-white hover:bg-olive-accent'
                  }`}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        )}

        {/* Back to Home button (optional, you can remove this if not desired) */}
        <div className="text-center mt-12">
          <Link to="/" className="bg-olive hover:bg-olive-dark text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            Back to Homepage
          </Link>
        </div>

      </div>
    </div>
  );
}

export default AllPublicationsPage;