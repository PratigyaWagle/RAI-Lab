// src/components/HeroSection.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Make sure Link is imported from react-router-dom

function HeroSection({ id }) {
  const buttonClasses = "inline-block bg-olive-accent text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-olive-darker transition-transform transform hover:scale-105";

  // Adjusted descBoxClasses for a slightly bigger size
  const descBoxClasses = "bg-gray-100 text-gray-800 text-base font-semibold px-4 py-2 rounded-full shadow-md";

  return (
    <section id={id} className="min-h-[80vh] flex items-center bg-white">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight ">
          Responsible<br/>Artificial Intelligence Lab
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Description for the motto of our lab.
        </p>

        {/* New: Description boxes - Two up, one down layout */}
        <div className="mt-8 mb-10"> {/* Container for the entire description box group */}
          <div className="flex justify-center gap-4 mb-4"> {/* Top row for two boxes */}
            <span className={descBoxClasses}>Ethical Responsible AI</span>
            <span className={descBoxClasses}>Fairness</span>
          </div>
          <div className="flex justify-center"> {/* Bottom row for one box */}
            <span className={descBoxClasses}>Trustworthy Systems</span>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          {/* Changed <a> to <Link> and 'href' to 'to' for proper React Router navigation */}
          <Link to="/projects-grants" className={buttonClasses}> {/* This will navigate to the /projects-grants route */}
            Explore Our Work
          </Link>
          <Link to="/publications" className={buttonClasses}>
            View Publications
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;