// src/components/ContactSection.jsx
import React from 'react';

// Accept the 'id' prop here
function ContactSection({ id }) {
  return (
    // Apply the id prop to the section element
    <section id={id} className="scroll-target py-20 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 ">Contact Us</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto ">
          We would love to hear from you. Feel free to reach out with any inquiries or collaboration opportunities.
        </p>

        <div className="max-w-xl mx-auto p-8 bg-white rounded-lg shadow-lg text-left ">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Lab Details</h3>

          {/* Visit Us */}
          <div className="flex items-start mb-6">
            
            <i className="fas fa-map-marker-alt text-olive-accent text-2xl mr-4 mt-1"></i>
            <div>
              <h4 className="text-xl font-medium text-gray-800 mb-1">Visit Us</h4>
              <p className="text-gray-700">
                Responsible Artificial Intelligence Lab,<br/>
                Ingram School of Engineering, 4313A <br/>
                Texas State University, San Marcos, TX 78666
              </p>
            </div>
          </div>

         
          <div className="flex items-start mb-6">
            <i className="fas fa-envelope text-olive-accent text-2xl mr-4 mt-1"></i>
            <div>
              <h4 className="text-xl font-medium text-gray-800 mb-1">Email Us</h4>
              <p className="text-gray-700">
                <a href="mailto:drdutta@txstate.edu" className="text-blue-600 hover:underline">drdutta@txstate.edu</a>
              </p>
            </div>
          </div>


          <div className="mt-8 text-center">
            <a href="#!" className="text-gray-600 hover:text-olive-accent mx-3 text-3xl" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
            <a href="#!" className="text-gray-600 hover:text-olive-accent mx-3 text-3xl" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#!" className="text-gray-600 hover:text-olive-accent mx-3 text-3xl" aria-label="GitHub"><i className="fab fa-github"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;