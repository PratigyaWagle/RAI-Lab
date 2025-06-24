// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection'; // This is your modified component
import NewsSection from './components/NewsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

import AllProjectsPage from './pages/AllProjectsPage'; // This page likely uses ProjectsSection too
import AllTeamMembersPage from './pages/AllTeamMembersPage';
import AllNewsPage from './pages/AllNewsPage';

import JournalPublicationsPage from './pages/JournalPublicationsPage';
import ConferencePublicationsPage from './pages/ConferencePublicationsPage';
import PosterPublicationsPage from './pages/PosterPublicationsPage';
import AllPublicationsOverviewPage from './pages/AllPublicationsOverviewPage';

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
                                {/* This is where the ProjectsSection will render as "Featured Projects" */}
                                <ProjectsSection limit={4} isFeatured={true} id="featured-projects" />
                                <NewsSection id="news-section" />
                                <ContactSection id="contact" />
                            </main>
                        }
                    />

                    {/* Route for the All Projects & Grants Page */}
                    {/* Ensure AllProjectsPage uses ProjectsSection without limit/isFeatured props to show all */}
                    <Route path="/projects-grants" element={<AllProjectsPage />} />
                    {/* If AllProjectsPage simply renders ProjectsSection, it would look like this: */}
                    {/* <Route path="/projects-grants" element={<ProjectsSection />} /> */}

                    {/* Other existing routes remain unchanged */}
                    <Route path="/team" element={<AllTeamMembersPage />} />
                    <Route path="/publications" element={<AllPublicationsOverviewPage />} />
                    <Route path="/publications/journal" element={<JournalPublicationsPage />} />
                    <Route path="/publications/conference" element={<ConferencePublicationsPage />} />
                    <Route path="/publications/poster" element={<PosterPublicationsPage />} />
                    <Route path="/news" element={<AllNewsPage />} />
                </Routes>

                <Footer />
            </div>
        </Router>
    );
}

export default App;