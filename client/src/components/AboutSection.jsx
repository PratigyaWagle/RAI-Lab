// src/components/AboutSection.jsx
import React from 'react';
import PhotoSlider from './PhotoSlider'; 


function AboutSection({ id }) {
    
    const aboutSliderImages = [
        { src: process.env.PUBLIC_URL + '/images/slide_1.png', alt: 'Research Lab View 1' },
        { src: process.env.PUBLIC_URL + '/images/slide_2.png', alt: 'Research Lab View 2' }, // Make sure this image exists in public/images
        { src: process.env.PUBLIC_URL + '/images/slide_3.png', alt: 'Research Lab View 3' }, // Make sure this image exists in public/images
        { src: process.env.PUBLIC_URL + '/images/slide_4.png', alt: 'Lab Group Photo' }, // Make sure this image exists in public/images
          
    ];

    return (
        // Apply the id prop to the section element
        <section id={id} className="scroll-target py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* This div remains for your heading and description */}
                    <div>
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Envisioning Responsible AI</h2>
                        <p className="text-gray-600 mb-4">
                            A look into our vision and research activities.
                        </p>
                    </div>

                    
                    <div className="flex justify-center items-center p-8">
                        <PhotoSlider images={aboutSliderImages} interval={4000} /> 
                    </div>
                    

                </div>
            </div>
        </section>
    );
}

export default AboutSection;