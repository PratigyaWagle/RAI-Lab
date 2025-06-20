// src/components/HeroSection.jsx
import React from 'react';

function HeroSection() {
  return (
    <section id="hero" className="min-h-[80vh] flex items-center bg-white"> {/* Added bg-white from your original HTML */}
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight ">
          Responsible<br/>Artificial Intelligence Lab
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Description for the motto of our lab.
        </p>
       <a href="#research" className="mt-10 inline-block bg-olive-accent text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-olive-darker transition-transform transform hover:scale-105">
          Explore Our Work
        </a>
      </div>
    </section>
  );
}

export default HeroSection;