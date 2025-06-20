// src/components/ProjectsSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function ProjectsSection() {
  return (
    <section id="research" className="scroll-target py-20 bg-olive-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Projects and Grants</h2>
          <p className="mt-2 text-gray-600">Explore our current research initiatives and funding opportunities.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ">
            <div className="text-4xl text-olive mb-4">💡</div>
            <h3 className="text-xl font-bold mb-2">Project One Title</h3>
            <p className="text-gray-600">A brief description of this ongoing project, outlining its objectives and expected contributions to the field of responsible AI.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ">
            <div className="text-4xl text-olive mb-4">⚙️</div>
            <h3 className="text-xl font-bold mb-2">Grant-Funded Research</h3>
            <p className="text-gray-600">Details about a significant grant supporting our work, including its focus and the impact it aims to achieve.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 " >
            <div className="text-4xl text-olive mb-4">📈</div>
            <h3 className="text-xl font-bold mb-2">Collaborative Initiative</h3>
            <p className="text-gray-600">Information on a collaborative project with external partners, highlighting shared goals and interdisciplinary efforts.</p>
          </div>
        </div>
        <div className="text-center mt-12">
          <Link
            to="/projects" // This is the path to your new AllProjectsPage
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-olive hover:bg-olive-dark transition-colors"
          >
            View All Projects
            <svg className="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
              <path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
