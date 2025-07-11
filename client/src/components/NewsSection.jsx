// src/components/NewsSection.jsx
import React from 'react';
// Import your local news data directly
import newsData from '../data/newsData'; // Make sure this path is correct relative to NewsSection.jsx
import { Link } from 'react-router-dom'; // Import Link for internal navigation

const NewsSection = () => {
  // Define the custom olive green color
  const oliveGreen = '#4a542b';

  // Sort all news by date (newest first) and then take the first 3 items for the homepage section.
  // We create a copy with the spread operator (...) before sorting to avoid mutating the original imported array.
  const recentNews = [...newsData]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3); // Limit to 3 for the home page section

  // No need for loading or error states as the data is directly available.
  // We only check if there are no news items to display.
  if (recentNews.length === 0) {
    return (
      <section id="news-section" className="py-16 bg-gray-50 rounded-lg shadow-inner">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Latest News</h2>
          <p className="text-center text-gray-600">No recent news available at the moment.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="news-section" className="py-16 bg-gray-50 rounded-lg shadow-inner">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Latest News</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {recentNews.map((item, index) => (
            // Using 'index' as a key is acceptable for static lists that don't change order or get filtered.
            // If your news items had a unique 'id' in newsData.js, it would be preferable to use that.
            <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              {/* Format date for better readability */}
              <p className="text-sm text-gray-500 mb-4">
                {new Date(item.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
              <p className="text-gray-700 mb-4">{item.description}</p>
              {item.link && ( // Only render the link if it exists
                <a
                  href={item.link}
                  className="text-blue-600 hover:underline inline-flex items-center"
                  style={{ color: oliveGreen }} // Applied custom olive green color
                  target="_blank" // Open link in a new tab
                  rel="noopener noreferrer" // Security best practice for target="_blank"
                >
                  Read More
                  {/* SVG icon for visual appeal */}
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </a>
              )}
            </div>
          ))}
        </div>
        {/* Link to all news page - ensure this path matches your App.js route */}
        <div className="text-center mt-12">
          <Link
            to="/news" // Make sure this path corresponds to your AllNewsPage route in App.js
            className="inline-block font-semibold py-3 px-8 rounded-full transition duration-300 hover:scale-105"
            style={{ backgroundColor: oliveGreen, color: 'white' }} // Applied custom olive green background and white text
          >
            View All News
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;