// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css'; // Your global styles

// Import your components for the main page
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import NewsSection from './components/NewsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// Import your dedicated pages
import AllProjectsPage from './pages/AllProjectsPage';
import AllTeamMembersPage from './pages/AllTeamMembersPage';
import AllPublicationsPage from './pages/AllPublicationsPage';
import AllNewsPage from './pages/AllNewsPage';

// Import the ScrollToTop component
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col antialiased">
        <Header />

        <Routes>
          {/* Route for the Home Page */}
          <Route
            path="/"
            element={
              <main className="flex-grow">
                <HeroSection id="hero" />
                <AboutSection id="about" />
                <ProjectsSection id="projects-section" />
                <NewsSection id="news-section" />
                <ContactSection id="contact" />
              </main>
            }
          />

          {/* Route for the All Projects Page - PATH UPDATED TO MATCH FOOTER LINK */}
          <Route path="/projects-grants" element={<AllProjectsPage />} />

          {/* Route for the All Team Members Page */}
          <Route path="/team" element={<AllTeamMembersPage />} />

          {/* Route for the All Publications Page */}
          <Route path="/publications" element={<AllPublicationsPage />} />

          {/* Route for the All News Page */}
          <Route path="/news" element={<AllNewsPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
