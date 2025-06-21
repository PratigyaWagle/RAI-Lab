// src/components/AboutSection.jsx
import React from 'react';

// Accept the 'id' prop here
function AboutSection({ id }) {
  return (
    // Apply the id prop to the section element
    <section id={id} className="scroll-target py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Envisioning Responsible AI</h2>
            <p className="text-gray-600 mb-4">
              Description for the vision section.
            </p>
          </div>
          <div className=" flex justify-center items-center p-8">
            <div className="grid grid-cols-6 gap-2 w-full max-w-sm">
              {/* These dynamic circles are rendered using JavaScript in React */}
              {Array.from({ length: 36 }).map((_, i) => (
                <div key={i} className="relative w-full pb-[100%]">
                  <div className="absolute inset-0 bg-olive-accent rounded-full animate-pulse" style={{ animationDelay: `${Math.random() * 1.5}s`, opacity: `${Math.random() * 0.5 + 0.2}` }}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;