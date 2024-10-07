import React from 'react';
import logo from './newbride.jpg';
import { motion } from 'framer-motion';

const Logo = () => {
  // Variants for the logo
  const logoVariants = {
    hidden: {
      opacity: 0,
      y: 200, // Starts below the screen
      scale: 0.5, // Smaller size
    },
    visible: {
      opacity: 1,
      y: 0, // Moves to the center
      scale: 1, // Normal size
      transition: {
        type: 'spring',
        duration: 3, // Slower transition duration
        bounce: 0.3, // Adds a slight bouncing effect at the end
      },
    },
  };

  // Variants for the text
  const textVariants = {
    hidden: {
      opacity: 0,
      y: 50, // Starts slightly below its final position
    },
    visible: {
      opacity: 1,
      y: 0, // Moves to the final position
      transition: {
        type: 'spring',
        duration: 1, // Shorter duration for the text
        delay: 1.5, // Delay for text appearance
        bounce: 0.3,
      },
    },
  };

  return (
    <>
    <div className='flex justify-center items-center absolute top-[35%] left-[50%] transform -translate-x-1/2 -translate-y-1/2'>
      {/* Logo */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={logoVariants}
      >
        <img src={logo} alt="logo" className="w-[30vw] h-[25vh]" />
      </motion.div>
      
      
      
    </div>
    <div className='flex justify-center items-center absolute top-[55%] left-[55%] transform -translate-x-1/2 -translate-y-1/2'>
      <motion.p
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        className='font-extrabold text-pink-500 text-[2rem] mt-28' // Added margin-top to separate from the logo
      >
        Rao family Welcomes you🪔
      </motion.p>
      
      </div>
    </>
  );
};

export default Logo;
