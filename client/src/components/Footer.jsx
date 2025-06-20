// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Responsible AI Lab. All rights reserved.</p>
        <p className="mt-2 text-sm">
          <a href="#!" className="text-gray-400 hover:text-white mx-2">Privacy Policy</a> | 
          <a href="#!" className="text-gray-400 hover:text-white mx-2">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;