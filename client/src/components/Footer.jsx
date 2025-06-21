// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8"> {/* Changed to md:grid-cols-2 for 2 columns */}

        {/* AIT Lab Description Section */}
        <div className="col-span-1">
          <h3 className="text-xl font-bold mb-4">RAI Lab</h3>
          <p className="text-gray-400 text-sm mb-4">
            Pioneering ethical AI through innovative research at Texas State University.
             Our mission is to develop responsible and impactful solutions in AI, including bots, AI chatbots, and neural network projects, prioritizing safety, transparency, and societal benefit.
          </p>
          <div className="flex space-x-4">
            {/* Replace with your actual SocialIcon components or <a> tags with icons */}
            {/* Make sure these URLs are correct for your AIT Lab social pages */}
            <a href="https://www.linkedin.com/company/aitlabtxstate" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <span className="sr-only">LinkedIn</span>
              {/* Example if using an image: <img src="/path/to/linkedin-icon.svg" alt="LinkedIn" className="h-6 w-6" /> */}
              LinkedIn
            </a>
            <a href="https://twitter.com/AITLabTXState" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <span className="sr-only">Twitter</span>
              Twitter
            </a>
            <a href="https://github.com/AIT-Lab-TXST" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <span className="sr-only">GitHub</span>
              GitHub
            </a>
            <a href="https://www.researchgate.net/lab/AIT-Lab" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <span className="sr-only">Research Gate</span>
              Research Gate
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="col-span-1">
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {/* Ensure these 'href' paths match your React Router routes exactly */}
            <li><a href="/" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Home</a></li>
            {/* THIS HREF MATCHES THE UPDATED PATH IN APP.JS */}
            <li><a href="/projects-grants" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Projects & Grants</a></li>
            <li><a href="/publications" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Publications</a></li>
            {/* 'Tools' was removed from here as per your request */}
          </ul>
        </div>

        {/* The 'Resources' section was completely removed as per your request */}

      </div>

      {/* Copyright Section */}
      <div className="container mx-auto px-6 text-center mt-10 border-t border-gray-700 pt-6">
        <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} AIT Lab. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;