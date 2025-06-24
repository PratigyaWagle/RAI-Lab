// client/src/pages/ConferencePublicationsPage.jsx
import React from 'react';
import PublicationList from '../components/PublicationList'; // Adjust path if needed

const ConferencePublicationsPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Conference Publications</h1>
      <PublicationList publicationType="Conference Paper" />
    </div>
  );
};

export default ConferencePublicationsPage;