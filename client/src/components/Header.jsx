// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Header() {
  const [activeSection, setActiveSection] = useState('');
  const [isPublicationsDropdownOpen, setIsPublicationsDropdownOpen] = useState(false); // NEW state for dropdown
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === '/') {
        const sections = ['hero', 'about', 'projects-section', 'contact'];
        const offset = 100;

        let currentActive = '';
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i]);
          if (section) {
            if (window.pageYOffset >= section.offsetTop - offset) {
              currentActive = sections[i];
              break;
            }
          }
        }
        setActiveSection(currentActive);
      } else {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  const handleNavLinkClick = (sectionId) => (e) => {
    e.preventDefault();

    if (location.pathname === '/') {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollToId: sectionId } });
    }
    setIsPublicationsDropdownOpen(false); // Close dropdown on any nav link click
  };

  // Function to toggle the dropdown
  const togglePublicationsDropdown = () => {
    setIsPublicationsDropdownOpen(prevState => !prevState);
  };

  // Close dropdown if user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isPublicationsDropdownOpen && !event.target.closest('#publications-dropdown-container')) {
        setIsPublicationsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isPublicationsDropdownOpen]);


  return (
    <header id="header" className="w-full py-4 bg-olive-accent text-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link to="/" className="flex items-center space-x-3 text-2xl font-bold text-white">
          <img src="/images/RAI-logo.png" alt="RAI Lab Logo" className="h-10 w-auto" />
          <span> RAI Lab </span>
        </Link>

        <nav>
          <ul className="flex space-x-8">
            <li>
              <a
                href="#about"
                onClick={handleNavLinkClick('about')}
                className={`nav-link text-white hover:text-olive-light transition-colors ${activeSection === 'about' && location.pathname === '/' ? 'active' : ''}`}
              >
                About
              </a>
            </li>
            <li>
              <Link
                to="/projects-grants"
                className={`nav-link text-white hover:text-olive-light transition-colors ${location.pathname === '/projects-grants' ? 'active' : ''}`}
              >
                Projects & Grants
              </Link>
            </li>
            {/* NEW: Publications Dropdown */}
            <li className="relative" id="publications-dropdown-container">
              <button
                onClick={togglePublicationsDropdown}
                className={`nav-link text-white hover:text-olive-light transition-colors focus:outline-none ${location.pathname.startsWith('/publications') ? 'active' : ''}`}
              >
                Publications <span className="ml-1">&#9662;</span> {/* Down arrow */}
              </button>
              {isPublicationsDropdownOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg py-2 z-20">
                  <li>
                    <Link
                      to="/publications/journal"
                      onClick={() => setIsPublicationsDropdownOpen(false)} // Close dropdown on click
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Journal Publications
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/publications/conference"
                      onClick={() => setIsPublicationsDropdownOpen(false)} // Close dropdown on click
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Conference Publications
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/publications/poster"
                      onClick={() => setIsPublicationsDropdownOpen(false)} // Close dropdown on click
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Poster Publications
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            {/* End NEW: Publications Dropdown */}

            <li>
              <Link
                to="/news"
                className={`nav-link text-white hover:text-olive-light transition-colors ${location.pathname === '/news' ? 'active' : ''}`}
              >
                News
              </Link>
            </li>
            <li>
              <Link
                to="/team"
                className={`nav-link text-white hover:text-olive-light transition-colors ${location.pathname === '/team' ? 'active' : ''}`}
              >
                Team
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;