// src/components/Header.jsx
import React, { useState, useEffect } from 'react'; 

function Header() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'research', 'team', 'news', 'contact'];
      const offset = 100; 

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          if (window.pageYOffset >= section.offsetTop - offset) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
      if (window.pageYOffset === 0) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    // *** CHANGE: Set background to bg-olive-accent and make it sticky top-0 z-10 ***
    <header id="header" className="w-full py-4 bg-olive-accent text-white shadow-md sticky top-0 z-10"> 
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo - Change to text-white for contrast on dark olive background */}
        <a href="/" className="flex items-center space-x-3 text-2xl font-bold text-white"> 
          <img src="/images/RAI-logo.png" alt="RAI Lab Logo" className="h-10 w-auto" />
          <span> RAI Lab </span>

        </a>

        {/* Navigation - Change to text-white, hover to olive-light */}
        <nav>
          <ul className="flex space-x-8">
            <li><a href="#about" className={`nav-link text-white hover:text-olive-light transition-colors ${activeSection === 'about' ? 'active' : ''}`}>About</a></li> 
            <li><a href="#research" className={`nav-link text-white hover:text-olive-light transition-colors ${activeSection === 'research' ? 'active' : ''}`}>Projects & Grants</a></li> 
            <li><a href="#news" className={`nav-link text-white hover:text-olive-light transition-colors ${activeSection === 'news' ? 'active' : ''}`}>Publications</a></li> 
            <li><a href="#team" className={`nav-link text-white hover:text-olive-light transition-colors ${activeSection === 'team' ? 'active' : ''}`}>Team</a></li> 
            <li><a href="#contact" className={`nav-link text-white hover:text-olive-light transition-colors ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a></li> 
          </ul>
        </nav>

        
      </div>
    </header>
  );
}

export default Header;