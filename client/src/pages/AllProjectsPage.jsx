// src/pages/AllProjectsPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// Dummy data for demonstration purposes.
const allProjectsData = [
  {
    id: 1,
    title: "Ethical AI Framework",
    description: "Developing a comprehensive framework for integrating ethical considerations into the AI development lifecycle.",
    link: "#"
  },
  {
    id: 2,
    title: "Bias Detection in ML Models",
    description: "Researching and implementing tools to automatically detect and mitigate biases in machine learning algorithms.",
    link: "#"
  },
  {
    id: 3,
    title: "Explainable AI for Healthcare",
    description: "Creating interpretable AI models for critical applications in healthcare diagnostics and treatment.",
    link: "#"
  },
  {
    id: 4,
    title: "Privacy-Preserving AI",
    description: "Innovating techniques to train and deploy AI models while strongly protecting sensitive user data.",
    link: "#"
  },
  {
    id: 5,
    title: "AI Policy & Governance",
    description: "Contributing to the development of robust AI policies and governance structures for equitable societal impact.",
    link: "#"
  },
  {
    id: 6,
    title: "Human-AI Collaboration",
    description: "Designing interfaces and systems that facilitate effective and trustworthy collaboration between humans and AI.",
    link: "#"
  },
  {
    id: 7,
    title: "AI for Climate Modeling",
    description: "Utilizing advanced AI techniques to improve the accuracy and speed of climate change simulations.",
    link: "#"
  },
  {
    id: 8,
    title: "Robotics in Hazardous Environments",
    description: "Developing autonomous robots capable of performing tasks in dangerous or inaccessible locations.",
    link: "#"
  },
  {
    id: 9,
    title: "Smart Grid Optimization with AI",
    description: "Applying AI to enhance the efficiency, reliability, and security of modern electrical grids.",
    link: "#"
  },
  {
    id: 10,
    title: "Natural Language Processing for Legal Tech",
    description: "Building NLP models to assist with legal research, document analysis, and contract review.",
    link: "#"
  }
];


function AllProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">All Our Projects & Grants</h1>

        <p className="text-lg text-gray-700 text-center mb-12">
          This page features a comprehensive list of all past and ongoing projects and grants at the RAI Lab.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjectsData.map((project) => (
            <div
              key={project.id}
              className="bg-white p-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105" // Added transition and transform classes
            >
              <h3 className="text-xl font-semibold text-olive-dark mb-2">{project.title}</h3>
              <p className="text-gray-700 text-base mb-4">
                {project.description}
              </p>
              <div className="mt-4">
                <a href={project.link} className="text-olive hover:underline font-medium">Learn More</a>
              </div>
            </div>
          ))}
        </div>

        {/* Back to Home button (optional, you can remove this if not desired) */}
        <div className="text-center mt-12">
          <Link to="/" className="bg-olive hover:bg-olive-dark text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            Back to Homepage
          </Link>
        </div>

      </div>
    </div>
  );
}

export default AllProjectsPage;