// src/components/Footer.jsx
import React from 'react';

function Footer() {
 
  const lightOliveGreen = '#7b8465'; 

  return (
    <footer className="text-white py-10" style={{ backgroundColor: lightOliveGreen }}> 
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8"> 

        
        <div className="col-span-1">
          <h3 className="text-xl font-bold mb-4">RAI Lab</h3>
          <p className="text-gray-100 text-sm mb-4"> 
            Pioneering ethical AI through innovative research at Texas State University.
            Our mission is to develop responsible and impactful solutions in AI, including bots, AI chatbots, and neural network projects, prioritizing safety, transparency, and societal benefit.
          </p>
          <div className="flex space-x-4">
           
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

        /* Quick Link Section */
        <div className="col-span-1">
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            
            <li><a href="/" className="text-gray-100 hover:text-white text-sm transition-colors duration-300">Home</a></li>
            
            <li><a href="/projects-grants" className="text-gray-100 hover:text-white text-sm transition-colors duration-300">Projects & Grants</a></li>
            <li><a href="/publications" className="text-gray-100 hover:text-white text-sm transition-colors duration-300">Publications</a></li>
          </ul>
        </div>

      </div>

      /* Copyright Section */
      <div className="container mx-auto px-6 text-center mt-10 border-t border-gray-700 pt-6">
        <p className="text-gray-100 text-sm">&copy; {new Date().getFullYear()} AIT Lab. All rights reserved.</p> {/* Adjusted text color */}
      </div>
    </footer>
  );
}

export default Footer;