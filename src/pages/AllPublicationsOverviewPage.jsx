// client/src/pages/AllPublicationsOverviewPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const AllPublicationsOverviewPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
        Our Research Publications
      </h1>
      <p className="text-xl text-gray-700 mb-12 max-w-2xl">
        Explore our comprehensive collection of academic works, including peer-reviewed journals,
        conference presentations, and impactful poster sessions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
        {/* Journal Publications Card/Button */}
        <Link
          to="/publications/journal"
          className="bg-olive-accent hover:bg-olive-dark text-white font-semibold py-6 px-6 rounded-md shadow-md transform hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center text-center group"
        >
          <span className="text-4xl mb-3 group-hover:animate-bounce-y">&#x1F4DA;</span> {/* Book emoji */}
          <span className="text-xl">Journal Publications</span>
          <p className="text-sm mt-2 opacity-80">In-depth peer-reviewed articles.</p>
        </Link>

        {/* Conference Publications Card/Button */}
        <Link
          to="/publications/conference"
          className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-6 px-6 rounded-md shadow-md transform hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center text-center group"
        >
          <span className="text-4xl mb-3 group-hover:animate-bounce-y">&#x1F4C5;</span> {/* Calendar emoji */}
          <span className="text-xl">Conference Publications</span>
          <p className="text-sm mt-2 opacity-80">Papers presented at leading conferences.</p>
        </Link>

        {/* Poster Publications Card/Button - NOW WITH MUTED PURPLE */}
        <Link
          to="/publications/poster"
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-6 px-6 rounded-md shadow-md transform hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center text-center group"
        >
          <span className="text-4xl mb-3 group-hover:animate-bounce-y">&#x1F5BC;&#xFE0F;</span> {/* Framed Picture emoji */}
          <span className="text-xl">Poster Publications</span>
          <p className="text-sm mt-2 opacity-80">Visual summaries of research findings.</p>
        </Link>
      </div>
    </div>
  );
};

export default AllPublicationsOverviewPage;