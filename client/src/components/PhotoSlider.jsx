import React, { useState, useEffect } from 'react';
import './PhotoSlider.css'; // Make sure this CSS file is correctly linked

const PhotoSlider = ({ images, interval = 4000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalImages = images.length;

    // Auto-play effect: Advances slide automatically (STILL COMMENTED OUT TO DISABLE AUTOPLAY)
    /*
    useEffect(() => {
        if (totalImages === 0) return;

        const slideInterval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
        }, interval);

        return () => clearInterval(slideInterval);
    }, [interval, totalImages]);
    */

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
    };

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
    };

    return (
        <div className="photo-slider-container">
            {/* The photo-slider-track handles the horizontal movement of all slides */}
            <div
                className="photo-slider-track"
                // This style moves the entire track left/right to show the current image
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {/* Map through each image to create a slide */}
                {images.map((image, index) => (
                    <div key={index} className="photo-slide">
                        <img src={image.src} alt={image.alt || `Slide ${index + 1}`} />
                        {/* Display caption only if alt text is provided */}
                        {image.alt && (
                            <div className="photo-caption">
                                {image.alt}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Previous Button */}
            <button className="slider-button prev" onClick={goToPrevSlide}>&#10094;</button>
            {/* Next Button */}
            <button className="slider-button next" onClick={goToNextSlide}>&#10095;</button>

            {/* Navigation Dots are intentionally removed */}
        </div>
    );
};

export default PhotoSlider;