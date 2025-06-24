// src/components/NewsSection.jsx
import React, { useState, useEffect } from 'react';
// It seems you're directly fetching from localhost:5000/api/news here.
// If you intend to use the centralized fetchNews from appData.js, you might uncomment the line below
// import { fetchNews } from '../data/appData';
import { Link } from 'react-router-dom'; // Import Link for navigation

const NewsSection = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Define the custom olive green color
  const oliveGreen = '#4a542b';

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Your existing fetch call. Note: If you want to use the proxy, this should be '/api/news'
        // or if you want to use the centralized function, it should be 'const data = await fetchNewsFromAppData();'
        const response = await fetch('http://localhost:5000/api/news'); 
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // Limit to 3 for the home page section
        setNews(data.slice(0, 3));
      } catch (error) {
        console.error("Failed to fetch news:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []); // Empty dependency array means this effect runs once after the initial render

  if (loading) {
    return (
      <section id="news-section" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Latest News</h2>
          <p className="text-center">Loading news...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="news-section" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Latest News</h2>
          <p className="text-center text-red-600">Error loading news: {error.message}</p>
        </div>
      </section>
    );
  }

  if (news.length === 0) {
    return (
      <section id="news-section" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Latest News</h2>
          <p className="text-center text-gray-600">No news available at the moment.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="news-section" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Latest News</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item) => (
            <div key={item._id} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              {/* Format date for better readability */}
              <p className="text-sm text-gray-500 mb-4">{new Date(item.date).toLocaleDateString()}</p>
              <p className="text-gray-700 mb-4">{item.description}</p>
              {/* Changed to Link and applied custom color */}
              <Link to={`/news/${item._id}`} // Assuming you have a route for individual news items
                    className="hover:underline" // Retained underline on hover
                    style={{ color: oliveGreen }} // Applied custom olive green color
              >
                Read More
              </Link>
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