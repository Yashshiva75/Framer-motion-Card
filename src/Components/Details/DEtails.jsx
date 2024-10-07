import React, { useState } from 'react';
import { motion } from 'framer-motion';

const DEtails = () => {
    // State to manage modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMoreContentVisible, setIsMoreContentVisible] = useState(false);

    // Open the modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Close the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Toggle "View More" content visibility
    const toggleMoreContent = () => {
        setIsMoreContentVisible(!isMoreContentVisible);
    };

    // Animation for the "Programs" text
    const textVariants = {
        hidden: {
            opacity: 0,
            x: -50, // Coming from the left
            scale: 0.3,
        },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: { duration: 1, ease: 'easeIn' },
        },
    };

    // Animation for the underline
    const lineVariants = {
        hidden: {
            x: 50, // Coming from the right
            scale: 0.3,
        },
        visible: {
            x: 0,
            scale: 1,
            transition: { duration: 1, ease: 'easeIn' },
        },
    };

    const eventsVariants = {
        hidden: {
            x: 100,
            opacity: 0.4,
        },
        visible: {
            x: 2,
            opacity: 1,
            transition: { duration: 1 },
        },
    };

    const lefteventsVariants = {
        hidden: {
            x: -100,
            opacity: 0.4,
        },
        visible: {
            x: 2,
            opacity: 1,
            transition: { duration: 1 },
        },
    };

    return (
        <div className="bg-gradient-to-r from-purple-500 to-pink-500">
            {/* Word "Programs" animates from left to center */}
            <motion.div
                whileInView="visible"
                initial="hidden"
                variants={textVariants}
                className="flex justify-center text-3xl text-red-500 font-bold"
            >
                Programs
            </motion.div>

            {/* Underline animates from right to center */}
            <div className="flex justify-center">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={lineVariants}
                    className="h-1 w-1/2 bg-purple-400"
                ></motion.div>
            </div>

            {/* Event information */}
            <div>
                <motion.div
                    whileInView="visible"
                    initial="hidden"
                    variants={eventsVariants}
                    className="max-w-3xl m-4 backdrop-blur-3xl p-4 bg-red-600/30 rounded-lg"
                >
                    <h3 className="text-center font-semibold underline">Haldi</h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
                    molestiae accusamus dolorum tempora culpa nesciunt sint excepturi.
                    <span onClick={openModal} className="block text-center underline text-bold text-red-800 cursor-pointer">
                        View More
                    </span>
                </motion.div>

                {/* Modal content */}
                {isModalOpen && (
                    <div className="fixed inset-0 w-full flex justify-center items-center z-50">
                        {/* Blurred background */}
                        <div className="absolute inset-0 backdrop-blur-md bg-opacity-50"></div>
                        {/* Modal content */}
                        <div className="relative z-10 bg-white p-6 rounded-lg shadow-lg w-full">
                            <h2 className="text-xl font-bold mb-4">Event Details</h2>
                            <p>Here are the additional details about the event...</p>
                            <button
                                onClick={closeModal}
                                className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
                <motion.div
                    whileInView="visible"
                    initial="hidden"
                    variants={lefteventsVariants}
                    className="max-w-3xl m-4 backdrop-blur-3xl p-4 bg-red-600/30 rounded-lg"
                >
                    <h3 className="text-center font-semibold underline">Mehandi</h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
                    molestiae accusamus dolorum tempora culpa nesciunt sint excepturi.
                    <span onClick={openModal} className="block text-center underline text-bold text-red-800 cursor-pointer">
                        View More
                    </span>
                </motion.div>

                {/* Modal content */}
                {isModalOpen && (
                    <div className="fixed inset-0 flex justify-center items-center z-50">
                        {/* Blurred background */}
                        <div className="absolute inset-0 backdrop-blur-md bg-opacity-50"></div>
                        {/* Modal content */}
                        <div className="relative z-10 bg-white p-6 rounded-lg shadow-lg w-1/3">
                            <h2 className="text-xl font-bold mb-4">Event Details</h2>
                            <p>Here are the additional details about the event...</p>
                            <button
                                onClick={closeModal}
                                className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
                <motion.div
                    whileInView="visible"
                    initial="hidden"
                    variants={eventsVariants}
                    className="max-w-3xl m-4 backdrop-blur-3xl p-4 bg-red-600/30 rounded-lg"
                >
                    <h3 className="text-center font-semibold underline">Cocktail Party</h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
                    molestiae accusamus dolorum tempora culpa nesciunt sint excepturi.
                    <span onClick={openModal} className="block text-center underline text-bold text-red-800 cursor-pointer">
                        View More
                    </span>
                </motion.div>

                {/* Modal content */}
                {isModalOpen && (
                    <div className="fixed inset-0 flex justify-center items-center z-50">
                        {/* Blurred background */}
                        <div className="absolute inset-0 backdrop-blur-md bg-opacity-50"></div>
                        {/* Modal content */}
                        <div className="relative z-10 bg-white p-6 rounded-lg shadow-lg w-1/3">
                            <h2 className="text-xl font-bold mb-4">Event Details</h2>
                            <p>Here are the additional details about the event...</p>
                            <button
                                onClick={closeModal}
                                className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
                <motion.div
                    whileInView="visible"
                    initial="hidden"
                    variants={lefteventsVariants}
                    className="max-w-3xl m-4 backdrop-blur-3xl p-4 bg-red-600/30 rounded-lg"
                >
                    <h3 className="text-center font-semibold underline">Sangeet</h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
                    molestiae accusamus dolorum tempora culpa nesciunt sint excepturi.
                    <span onClick={openModal} className="block text-center underline text-bold text-red-800 cursor-pointer">
                        View More
                    </span>
                </motion.div>

                {/* Modal content */}
                {isModalOpen && (
                    <div className="fixed inset-0 flex justify-center items-center z-50">
                        {/* Blurred background */}
                        <div className="absolute inset-0 backdrop-blur-md bg-opacity-50"></div>
                        {/* Modal content */}
                        <div className="relative z-10 bg-white p-6 rounded-lg shadow-lg w-1/3">
                            <h2 className="text-xl font-bold mb-4">Event Details</h2>
                            <p>Here are the additional details about the event...</p>
                            <button
                                onClick={closeModal}
                                className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}

            </div>

            
        </div>
    );
};

export default DEtails;
