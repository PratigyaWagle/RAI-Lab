// src/pages/AllNewsPage.jsx
import React from 'react';
// Link is no longer needed if Back to Homepage button is removed
// import { Link } from 'react-router-dom';

function AllNewsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">All Latest News & Updates</h1>

        <p className="text-lg text-gray-700 text-center mb-12">
          This page features a complete archive of news, announcements, and updates from the RAI Lab.
        </p>

        {/* Example News Item 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            className="bg-white p-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105" // Added transition and transform classes
          >
            <h3 className="text-xl font-semibold text-olive-dark mb-2">Lab Awarded New Grant for AI Ethics</h3>
            <p className="text-gray-600 text-sm mb-3">June 15, 2025</p>
            <p className="text-gray-700 text-base">
              Our lab has successfully secured funding for a groundbreaking project on ethical AI governance.
            </p>
            <div className="mt-4">
              <a href="#" className="text-olive hover:underline text-sm font-medium">Read Full Story</a>
            </div>
          </div>

          {/* Example News Item 2 */}
          <div
            className="bg-white p-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105" // Added transition and transform classes
          >
            <h3 className="text-xl font-semibold text-olive-dark mb-2">Professor Smith to Keynote at AI Summit</h3>
            <p className="text-gray-600 text-sm mb-3">May 28, 2025</p>
            <p className="text-gray-700 text-base">
              Professor Jane Smith will deliver a keynote speech on explainable AI at the upcoming global summit.
            </p>
            <div className="mt-4">
              <a href="#" className="text-olive hover:underline text-sm font-medium">Event Details</a>
            </div>
          </div>

          {/* Example News Item 3 */}
          <div
            className="bg-white p-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105" // Added transition and transform classes
          >
            <h3 className="text-xl font-semibold text-olive-dark mb-2">New Publication: "AI and Society"</h3>
            <p className="text-gray-600 text-sm mb-3">April 10, 2025</p>
            <p className="text-gray-700 text-base">
              Our latest research on the societal impact of AI has been published in a leading journal.
            </p>
            <div className="mt-4">
              <a href="#" className="text-olive hover:underline text-sm font-medium">View Publication</a>
            </div>
          </div>
          {/* Add more news items as needed */}
        </div>

        {/* The "Back to Homepage" button div has been removed from here */}

      </div>
    </div>
  );
}

export default AllNewsPage;