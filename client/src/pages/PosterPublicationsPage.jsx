// client/src/pages/PosterPublicationsPage.jsx
import React from 'react';
import PublicationList from '../components/PublicationList'; // Adjust path if needed

const PosterPublicationsPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Poster Publications</h1>
      <PublicationList publicationType="Poster" />
    </div>
  );
};

export default PosterPublicationsPage;