// src/pages/HomePage.jsx
import React from 'react';
import HeroSection from '../components/HeroSection.jsx';
import AboutSection from '../components/AboutSection.jsx';
import ProjectsSection from '../components/ProjectsSection.jsx'; // This is your modified component
import NewsSection from '../components/NewsSection.jsx';
import PublicationsSection from '../components/PublicationsSection.jsx';


function HomePage() {
    return (
        <div className="homepage-container">
            {/* Render your Hero Section first */}
            <HeroSection id="hero" />

            {/* Render your About Section */}
            <AboutSection id="about" />

            {/* Render the ProjectsSection here as the Featured Projects section */}
            {/* Pass limit={4} to show only 4 projects and isFeatured={true} to show the header/button */}
            {/* showFullDetails is left as default (false) for the featured view */}
            <ProjectsSection limit={4} isFeatured={true} id="featured-projects" />

            {/* Render News Section */}
            <NewsSection id="news" />

            {/* Render Publication Section */}
            <PublicationsSection id="publications" />

            {/* Add any other sections you might have */}
        </div>
    );
}

export default HomePage;