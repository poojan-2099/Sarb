import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const overlayBlocks = [
  [
    'Thinking about buying youre first home?',
    'Thought about selling?',
    'Is youre lease expiring?',
    "Not sure if it's the right time to buy a rental property to make you more money?",
    'planning to buy in los angles but not sure about the neighborhood and area?'
  ],
  [
    'Stop contemplating and lets take action today let me help you guide you through the process weather its buying or selling im here to help.'
  ],
  [
    'You need a agent that is young, energetic, hungry and driven born and raised in LA I know everything about la, sfv and Bakersfield. Feel free to call me on my cell 8184248039 feel free to ask me anything im here to help so lets get you a best deal .'
  ]
];

const blockVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.7, duration: 0.8, type: 'spring' }
  })
};

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
      {/* Creative Animated Overlay */}
      <div className="carousel-hover-overlay">
        {overlayBlocks.map((block, i) => (
          <motion.div
            className={`carousel-hover-block ${i % 2 === 0 ? 'left' : 'right'} block-${i}`}
            key={i}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={blockVariants}
          >
            {block.map((line, j) => {
              if (i === 1) {
                // Highlight the call to action block
                return <p className="carousel-highlight" key={j}>{line}</p>;
              }
              if (i === 2) {
                // Highlight the phone number
                const phone = '8184248039';
                const parts = line.split(phone);
                return (
                  <p key={j}>
                    {parts[0]}
                    <span className="carousel-phone">{phone}</span>
                    {parts[1]}
                  </p>
                );
              }
              return <p key={j}>{line}</p>;
            })}
          </motion.div>
        ))}
      </div>
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