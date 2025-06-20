// src/components/PublicationsSection.jsx
import React from 'react';

function PublicationsSection() {
  return (
    <section id="news" className="scroll-target py-20 bg-olive-light"> {/* Note: Your original HTML had this section id as 'news' but title as 'Publications' */}
      <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Publications</h2>
            <p className="mt-2 text-gray-600">Our latest academic contributions.</p>
        </div>
        <div className="space-y-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm ">
                <p className="text-sm text-gray-500 mb-1">Date Placeholder</p>
                <h4 className="font-bold text-gray-800">Publication 1</h4>
                <a href="#" className="text-sm text-olive hover:underline">Description for Publication 1.</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm " >
                <p className="text-sm text-gray-500 mb-1">Date Placeholder</p>
                <h4 className="font-bold text-gray-800">Publication 2</h4>
                <a href="#" className="text-sm text-olive hover:underline">Description for Publication 2.</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm " >
                <p className="text-sm text-gray-500 mb-1">Date Placeholder</p>
                <h4 className="font-bold text-gray-800">Publication 3</h4>
                <a href="#" className="text-sm text-olive hover:underline">Description for Publication 3.</a>
            </div>
        </div>
      </div>
    </section>
  );
}

export default PublicationsSection;