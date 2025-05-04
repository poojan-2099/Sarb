import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ImageCarousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="carousel-container">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentSlide ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={image.src} alt={image.alt} />
          <div className="carousel-overlay">
            <h2>{image.title}</h2>
            <p>{image.description}</p>
          </div>
        </motion.div>
      ))}
      <div className="carousel-controls">
        {images.map((_, index) => (
          <div
            key={index}
            className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;