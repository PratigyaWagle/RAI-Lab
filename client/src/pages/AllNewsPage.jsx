// src/pages/AllNewsPage.jsx
import React, { useState, useEffect } from 'react';

const AllNewsPage = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllNews = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/news'); // Fetch all news
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setNews(data); // Set all fetched news
      } catch (error) {
        console.error("Failed to fetch all news:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllNews();
  }, []); // Empty dependency array means this effect runs once after the initial render

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 min-h-screen">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">All News & Announcements</h1>
        <p className="text-center">Loading all news...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-16 min-h-screen">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">All News & Announcements</h1>
        <p className="text-center text-red-600">Error loading news: {error.message}</p>
      </div>
    );
  }

  if (news.length === 0) {
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
      {/* Ensure the key is item._id */}
        {news.map((item) => (
          <div key={item._id} className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h2>
            {/* Ensure item.date exists and is a valid date */}
            <p className="text-sm text-gray-500 mb-4">{new Date(item.date).toLocaleDateString()}</p>
            <p className="text-gray-700 mb-4">{item.description}</p>
            <a href={item.link} className="text-blue-600 hover:underline inline-flex items-center" target="_blank" rel="noopener noreferrer">
              Read More
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllNewsPage;