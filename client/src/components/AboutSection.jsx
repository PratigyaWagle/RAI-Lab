// src/components/AboutSection.jsx
import React from 'react';
import PhotoSlider from './PhotoSlider'; // <--- ADD THIS LINE --->

// Accept the 'id' prop here
function AboutSection({ id }) {
    // Define your images for the slider here
    // IMPORTANT: Ensure these file paths match the images you put in public/images/
    const aboutSliderImages = [
        { src: process.env.PUBLIC_URL + '/images/slide_1.png', alt: 'Research Lab View 1' },
        { src: process.env.PUBLIC_URL + '/images/slide_2.png', alt: 'Research Lab View 2' }, // Make sure this image exists in public/images
        { src: process.env.PUBLIC_URL + '/images/slide_3.png', alt: 'Research Lab View 3' }, // Make sure this image exists in public/images
        { src: process.env.PUBLIC_URL + '/images/slide_4.png', alt: 'Lab Group Photo' }, // Make sure this image exists in public/images
          // Make sure this image exists in public/images
            // Make sure this image exists in public/images
        // Add more { src: ..., alt: ... } objects for each image you want in the slider.
        // Example: { src: process.env.PUBLIC_URL + '/images/your_new_image.jpg', alt: 'A new image' },
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

                    {/* <--- REPLACE THE ORIGINAL CIRCLES DIV WITH THIS SLIDER COMPONENT ---> */}
                    {/* The original code you had here was:
                        <div className=" flex justify-center items-center p-8">
                            <div className="grid grid-cols-6 gap-2 w-full max-w-sm">
                                {Array.from({ length: 36 }).map((_, i) => (
                                    <div key={i} className="relative w-full pb-[100%]">
                                        <div className="absolute inset-0 bg-olive-accent rounded-full animate-pulse" style={{ animationDelay: `${Math.random() * 1.5}s`, opacity: `${Math.random() * 0.5 + 0.2}` }}></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    */}
                    <div className="flex justify-center items-center p-8">
                        <PhotoSlider images={aboutSliderImages} interval={4000} /> {/* You can change 4000 to another number (milliseconds) for different autoplay speed */}
                    </div>
                    {/* <--- END OF REPLACEMENT ---> */}

                </div>
            </div>
        </section>
    );
}

export default AboutSection;