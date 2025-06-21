// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Header() {
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === '/') {
        // News section ID removed from scroll tracking as it's now a separate page
        const sections = ['hero', 'about', 'projects-section', 'contact']; // 'news-section' removed from here
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
  };

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
                to="/projects"
                className={`nav-link text-white hover:text-olive-light transition-colors ${location.pathname === '/projects' ? 'active' : ''}`}
              >
                Projects & Grants
              </Link>
            </li>
            <li>
              <Link
                to="/publications"
                className={`nav-link text-white hover:text-olive-light transition-colors ${location.pathname === '/publications' ? 'active' : ''}`}
              >
                Publications
              </Link>
            </li>
            {/* News Link: Now a direct Link to the /news page */}
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