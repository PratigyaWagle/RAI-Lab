import React, { useState, useEffect } from 'react';
import './PhotoSlider.css';

const PhotoSlider = ({ images, interval = 4000, autoplay = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;

  // Autoplay effect
  useEffect(() => {
    if (!autoplay || totalImages === 0) return;

    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [autoplay, interval, totalImages]);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  return (
    <div className="photo-slider-container">
      <div
        className="photo-slider-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="photo-slide">
            <img src={image.src} alt={image.alt || `Slide ${index + 1}`} />
            {image.alt && (
              <div className="photo-caption">
                {image.alt}
              </div>
            )}
          </div>
        ))}
      </div>

      <button
        className="slider-button prev"
        onClick={goToPrevSlide}
        aria-label="Previous Slide"
      >
        &#10094;
      </button>

      <button
        className="slider-button next"
        onClick={goToNextSlide}
        aria-label="Next Slide"
      >
        &#10095;
      </button>
    </div>
  );
};

export default PhotoSlider;
