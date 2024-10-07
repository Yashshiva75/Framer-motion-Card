import React, { useState } from 'react';
import { motion } from 'framer-motion';

const DEtails = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const textVariants = {
        hidden: {
            opacity: 0,
            x: -50,
            scale: 0.3,
        },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: { duration: 1, ease: 'easeIn' },
        },
    };

    const lineVariants = {
        hidden: {
            x: 50,
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
            <motion.div
                whileInView="visible"
                initial="hidden"
                variants={textVariants}
                className="flex justify-center text-3xl text-red-500 font-bold"
            >
                Programs
            </motion.div>

            <div className="flex justify-center">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={lineVariants}
                    className="h-1 w-1/2 bg-purple-400"
                ></motion.div>
            </div>

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

                {isModalOpen && (
                    <div className="fixed inset-0 w-full flex justify-center items-center z-50">
                        <div className="absolute inset-0 backdrop-blur-md bg-opacity-50"></div>
                        <div className="relative z-10 bg-white p-6 rounded-lg shadow-lg w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
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

                {isModalOpen && (
                    <div className="fixed inset-0 w-full flex justify-center items-center z-50">
                        <div className="absolute inset-0 backdrop-blur-md bg-opacity-50"></div>
                        <div className="relative z-10 bg-white p-6 rounded-lg shadow-lg w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
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
                    <h3 className="text-center font-semibold underline">Haldi</h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
                    molestiae accusamus dolorum tempora culpa nesciunt sint excepturi.
                    <span onClick={openModal} className="block text-center underline text-bold text-red-800 cursor-pointer">
                        View More
                    </span>
                </motion.div>

                {isModalOpen && (
                    <div className="fixed inset-0 w-full flex justify-center items-center z-50">
                        <div className="absolute inset-0 backdrop-blur-md bg-opacity-50"></div>
                        <div className="relative z-10 bg-white p-6 rounded-lg shadow-lg w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
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

                {isModalOpen && (
                    <div className="fixed inset-0 w-full flex justify-center items-center z-50">
                        <div className="absolute inset-0 backdrop-blur-md bg-opacity-50"></div>
                        <div className="relative z-10 bg-white p-6 rounded-lg shadow-lg w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
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

                {/* More content here */}
            </div>
        </div>
    );
};

export default DEtails;
