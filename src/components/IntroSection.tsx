"use client"
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function IntroSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-800 transition-colors duration-200 relative overflow-hidden">
      {/* Background elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full opacity-20 dark:opacity-10" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-green-500 rounded-full opacity-20 dark:opacity-10" />
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-yellow-500 rounded-full opacity-20 dark:opacity-10" />
      </motion.div>

      {/* Floating code snippets */}
      <motion.div
        className="absolute top-1/4 left-10 text-xs text-gray-600 dark:text-gray-400 opacity-50"
        animate={{
          y: [0, -10, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        {`const codeIsLife = true;`}
      </motion.div>
      <motion.div
        className="absolute bottom-1/4 right-10 text-xs text-gray-600 dark:text-gray-400 opacity-50"
        animate={{
          y: [0, 10, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        {`function createAwesomeness() { ... }`}
      </motion.div>

      <div className="text-center z-10">
        <motion.h1
          className="text-5xl font-bold mb-4 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm Dennis Zhang
        </motion.h1>
        <motion.p
          className="text-2xl mb-6 text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          A passionate software engineer specializing in web development
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Image
            src="/profile-picture.jpg"
            alt="Profile Picture"
            width={200}
            height={200}
            className="rounded-full mx-auto mb-6"
          />
        </motion.div>
        <motion.button
          className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Download CV
        </motion.button>
      </div>
      {isClient && (
        <motion.div
          className="absolute bottom-10 cursor-pointer"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          onClick={scrollToProjects}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-9 w-9 text-blue-500"
            fill="none"
            viewBox="0 0 28 28"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      )}
    </section>
  );
}
