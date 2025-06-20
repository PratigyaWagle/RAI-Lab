import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import PublicationsSection from './components/PublicationsSection';
import TeamSection from './components/TeamSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

import AllProjectsPage from './pages/AllProjectsPage';
import AllTeamMembersPage from './pages/AllTeamMembersPage';

function App() {
  return (
    <Router> {/* This wraps your entire application for routing */}
      <div className="min-h-screen flex flex-col antialiased">
        <Header /> {/* Header appears on all pages, outside the Routes */}

        <Routes> {/* This is the SINGLE, main Routes block for your application */}
          <Route
            path="/"
            element={ // This element renders your home page sections
              <main className="flex-grow">
                <HeroSection />
                <AboutSection />
                <ProjectsSection />
                <PublicationsSection />
                <TeamSection />
                <ContactSection />
              </main>
            }
          />
          {/* This is your dedicated projects page route */}
          <Route path="/projects" element={<AllProjectsPage />} />
          {/* This is your dedicated team members page route */}
          <Route path="/team" element={<AllTeamMembersPage />} />
        </Routes>

        <Footer /> {/* Footer appears on all pages, outside the Routes */}
      </div>
    </Router>
  );
}

export default App;