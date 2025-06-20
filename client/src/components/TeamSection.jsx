// src/components/TeamSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function TeamSection() {
  return (
    <section id="team" className="scroll-target py-20 bg-white">
      <div className="container mx-auto px-6">
         <div className="text-center mb-12">
           <h2 className="text-3xl font-bold text-gray-800">Our Team</h2>
           <p className="mt-2 text-gray-600">Meet the researchers and innovators driving our mission.</p>
       </div>
       <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
           <div className="text-center ">
               <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-4">
                   <span className="text-4xl text-gray-400">👤</span> {/* Placeholder for image */}
               </div>
               <h4 className="text-lg font-bold">Professor Anandi Dutta</h4>
               <p className="text-sm text-olive">Assistant Professor</p>
           </div>
            <div className="text-center " >
               <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-4">
                   <span className="text-4xl text-gray-400">👤</span> {/* Placeholder for image */}
               </div>
               <h4 className="text-lg font-bold">Team Member 1</h4>
               <p className="text-sm text-olive">Research Team Member</p>
           </div>
            <div className="text-center " >
               <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-4">
                   <span className="text-4xl text-gray-400">👤</span> {/* Placeholder for image */}
               </div>
               <h4 className="text-lg font-bold">Team Member 2</h4>
               <p className="text-sm text-olive">Research Team Member</p>
           </div>
            <div className="text-center " >
               <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-4">
                   <span className="text-4xl text-gray-400">👤</span> {/* Placeholder for image */}
               </div>
               <h4 className="text-lg font-bold">Team Member 3</h4>
               <p className="text-sm text-olive">Research Team Member</p>
           </div>
       </div>
        <div className="text-center mt-12">
          <Link
            to="/team" // This is the path to your new AllTeamMembersPage
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-olive hover:bg-olive-dark transition-colors"
          >
            View All Team Members
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

export default TeamSection;
