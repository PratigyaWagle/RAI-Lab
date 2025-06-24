// src/components/NewsSection.jsx
import React, { useState, useEffect } from 'react';

const NewsSection = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/news'); // Adjust URL if your backend is on a different host/port
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
              <a href={item.link} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Read More
              </a>
            </div>
          ))}
        </div>
        {/* Link to all news page - ensure this path matches your App.js route */}
        <div className="text-center mt-12">
          <a
            href="/news" // Make sure this path corresponds to your AllNewsPage route in App.js
            className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300"
          >
            View All News
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;