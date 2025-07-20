// src/components/Footer.jsx
import React from 'react';

function Footer() {
  // If you've defined custom colors in tailwind.config.js or via CSS variables,
  // you might not need this constant or the inline style.
  // Example if using CSS variables: const lightOliveGreen = 'var(--color-olive-darker)';
  // Or even better, just use the Tailwind class directly.

  return (
    // Replaced inline style with a direct Tailwind class (assuming configured)
    // For instance, if #5a6639 is --color-olive-accent, use bg-olive-accent
    <footer className="text-white py-10 bg-olive-accent"> 
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className="col-span-1">
          <h3 className="text-xl font-bold mb-4">RAI Lab</h3>
          <p className="text-gray-100 text-sm mb-4">
            Pioneering ethical AI through innovative research at Texas State University.
            Our mission is to develop responsible and impactful solutions in AI, including bots, AI chatbots, and neural network projects, prioritizing safety, transparency, and societal benefit.
          </p>
          <div className="flex space-x-4">
            {/* Consider using actual icons here for better visual appeal */}
            <a href="https://www.linkedin.com/company/aitlabtxstate" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-white transition-colors duration-300">
              <span className="sr-only">LinkedIn</span>
              LinkedIn
            </a>
            <a href="https://twitter.com/AITLabTXState" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-white transition-colors duration-300">
              <span className="sr-only">Twitter</span>
              Twitter
            </a>
            <a href="https://github.com/AIT-Lab-TXST" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-white transition-colors duration-300">
              <span className="sr-only">GitHub</span>
              GitHub
            </a>
            <a href="https://www.researchgate.net/lab/AIT-Lab" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-white transition-colors duration-300">
              <span className="sr-only">Research Gate</span>
              Research Gate
            </a>
          </div>
        </div>

        {/* Quick Link Section - Corrected JSX comment and added <nav> for semantics */}
        <div className="col-span-1">
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <nav>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-100 hover:text-white text-sm transition-colors duration-300">Home</a></li>
              <li><a href="/projects-grants" className="text-gray-100 hover:text-white text-sm transition-colors duration-300">Projects & Grants</a></li>
              <li><a href="/publications" className="text-gray-100 hover:text-white text-sm transition-colors duration-300">Publications</a></li>
            </ul>
          </nav>
        </div>

      </div>

      {/* Copyright Section - Corrected JSX comment */}
      <div className="container mx-auto px-6 text-center mt-10 border-t border-gray-700 pt-6">
        <p className="text-gray-100 text-sm">&copy; {new Date().getFullYear()} AIT Lab. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;