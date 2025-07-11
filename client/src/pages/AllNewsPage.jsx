// src/pages/AllNewsPage.jsx
import React from 'react';
// Import your local news data from the data folder
import newsData from '../data/newsData'; // Adjust path if your 'data' folder is elsewhere

const AllNewsPage = () => {
  // Sort news items by date in descending order (newest first).
  // We create a copy of the array with the spread operator (...) before sorting
  // to avoid directly modifying the imported data.
  const sortedNews = [...newsData].sort((a, b) => new Date(b.date) - new Date(a.date));

  // Display a message if there's no news available.
  if (sortedNews.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 min-h-screen">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">All News & Announcements</h1>
        <p className="text-center text-gray-600">No news available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">All News & Announcements</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedNews.map((item, index) => (
          // Using 'index' as a key is acceptable for static lists that don't change order or get filtered.
          // For dynamic lists, a unique 'id' property in your data would be preferable.
          <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h2>
            {/* Convert the ISO date string to a human-readable format */}
            <p className="text-sm text-gray-500 mb-4">
              {new Date(item.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
            <p className="text-gray-700 mb-4">{item.description}</p>
            {item.link && ( // Only render the link if it exists
              <a href={item.link} className="text-blue-600 hover:underline inline-flex items-center" target="_blank" rel="noopener noreferrer">
                Read More
                {/* SVG icon for visual appeal */}
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllNewsPage;