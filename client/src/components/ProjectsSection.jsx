// src/components/ProjectsSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// Dummy data for demonstration purposes.
// In a real application, this data would likely come from an API or a more structured source.
const allProjectsData = [
  {
    id: 1,
    title: "Refining the Understanding of Parking Space Requirements and...",
    description: "The goal of this project will be to explore, document, and broaden the collective understanding of mandated parking minimums within Minnesota and the region. Specifically, this project will examine the long-term benefits and...",
    link: "#"
  },
  {
    id: 2,
    title: "0-7226: Analyze Operational and Safety Improvements Associated...",
    description: "The objective of this project is to document the benefits of innovative intersection designs, develop case studies of successfully implemented intersections in Texas, and provide resources to support the adoption and...",
    link: "#"
  },
  {
    id: 3,
    title: "0-7222: Develop Crash Predictive Methods for Frontage Roads...",
    description: "Develop Safety Performance Functions (SPFs) and Crash Modification Factors (CMFs) for ramp terminals and frontage road intersections, evaluate the safety impact of weaving on frontage roads...",
    link: "#"
  },
  {
    id: 4,
    title: "NCHRP 17-134: Center Line Buffer Areas for Safety: Implementation...",
    description: "The objective of this project is to develop guidelines and a tool for the implementation of center line buffer areas, with a focus on rural two-lane highways. The project will evaluate the safety benefits of center line buffer...",
    link: "#"
  },
  {
    id: 5,
    title: "Ethical AI Framework", // This project will NOT be shown on homepage
    description: "Developing a comprehensive framework for integrating ethical considerations into the AI development lifecycle.",
    link: "#"
  },
  {
    id: 6,
    title: "Bias Detection in ML Models", // This project will NOT be shown on homepage
    description: "Researching and implementing tools to automatically detect and mitigate biases in machine learning algorithms.",
    link: "#"
  }
];


function ProjectsSection({ id }) {
  // Slice the data to only display the first 4 projects
  const featuredProjects = allProjectsData.slice(0, 4);

  return (
    <section id={id} className="scroll-target py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800">Featured Projects</h2>
          <Link
            to="/projects"
            className="bg-white text-olive-dark hover:bg-gray-200 font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 flex items-center"
          >
            View All Projects <span className="ml-1">&rarr;</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white p-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105" // Added transition and transform classes
            >
              <h3 className="text-xl font-semibold text-olive-dark mb-2">{project.id}. {project.title}</h3>
              <p className="text-gray-700 text-base mb-4">
                {project.description}
              </p>
              <a href={project.link} className="text-olive hover:underline font-medium">Learn More &rarr;</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
