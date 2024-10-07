import React from 'react';
import { motion } from 'framer-motion';

const SiriBlurBackground = () => {
  const shapeVariants = {
    float: {
      y: [0, -50, 50, -100, 100],
      x: [0, -50, 50, -100, 100],
      transition: {
        duration: 8,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut',
      },
    },
  };

  const renderShapes = () => {
    const shapes = [];
    const shapeTypes = ['circle', 'blob', 'polygon']; // Different shape types
    const colorOptions = [
      'bg-gradient-to-r from-pink-400 via-purple-400 to-blue-500',
      'bg-gradient-to-r from-yellow-400 via-red-400 to-purple-500',
      'bg-gradient-to-r from-green-400 via-blue-500 to-purple-500',
    ];

    for (let i = 0; i < 8; i++) {
      const size = Math.random() * 150 + 100; // Shape size
      const top = Math.random() * 80; // Random position from top (avoids shapes going outside viewport)
      const left = Math.random() * 80; // Random position from left (avoids shapes going outside viewport)
      const delay = Math.random() * 3; // Animation delay
      const shapeType = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
      const color = colorOptions[Math.floor(Math.random() * colorOptions.length)]; // Pick random gradient color

      // Determine the clip path based on shape type
      let clipPathStyle;
      if (shapeType === 'circle') {
        clipPathStyle = 'circle(50%)';
      } else if (shapeType === 'blob') {
        clipPathStyle = 'path("M32.4,-38.2C41.8,-28.2,46.8,-14.1,48.8,1.5C50.7,17.1,49.6,34.2,40.8,42.6C32.1,51.1,16,50.9,2.3,48.2C-11.3,45.5,-22.6,40.3,-34,33C-45.3,25.7,-56.6,16.4,-56.6,5.9C-56.6,-4.6,-45.3,-18.4,-36.4,-27.5C-27.6,-36.5,-21.1,-40.7,-13.4,-44.9C-5.8,-49.1,3,-53.4,14.2,-55.2C25.5,-57.1,38.9,-56.7,49.1,-48.8C59.4,-41,66.5,-25.6,66.5,-10.3C66.5,5,59.4,20.4,49.1,29.4C38.9,38.5,25.5,41.2,13.4,41.9C1.3,42.6,-9.7,41.2,-19.4,39.7C-29.1,38.2,-37.5,36.6,-46.6,33.4C-55.7,30.1,-65.4,25.2,-69.5,16.9C-73.7,8.6,-72.4,-3.1,-65.8,-12.3C-59.2,-21.4,-47.2,-28.2,-36.9,-36.8C-26.5,-45.3,-17.9,-55.5,-7,-61.4C4,-67.2,11.9,-68.7,32.4,-38.2Z")';
      } else {
        clipPathStyle = 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'; // Diamond-like shape
      }

      shapes.push(
        <motion.div
          key={i}
          className={`absolute ${color} opacity-10 blur-6xl`} // Lower opacity and increased blur
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `${top}%`, // Random vertical position
            left: `${left}%`, // Random horizontal position
            clipPath: clipPathStyle,
          }}
          variants={shapeVariants}
          animate="float"
          transition={{ delay }}
        />
      );
    }
    return shapes;
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-pink-300">
      {/* Frosted Glass Effect */}
      
      <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-10 backdrop-blur-2xl" />
      
      {/* Render the floating shapes */}
      {renderShapes()}
    </div>
  );
};

export default SiriBlurBackground;
