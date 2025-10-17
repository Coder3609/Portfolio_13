import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { BackgroundBeams } from '../components/ui/background-beams.jsx';
import { TextGenerateEffect } from '../components/ui/text-generate-effect.jsx';
import { Spotlight } from '../components/ui/spotlight.jsx';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative bg-dark-900 flex items-center justify-center">
      {/* Background Effects */}
      <Spotlight className="absolute inset-0 pointer-events-none" fill="#00ffff" />
      <BackgroundBeams className="absolute inset-0 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Name Display */}
        <TextGenerateEffect
          words="Divya Mohan Nayak"
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white"
          duration={1}
        />

        {/* Course Display */}
        <motion.p
          className="text-xl md:text-2xl text-accent-cyan mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          B.Tech
        </motion.p>

        {/* Role Display */}
        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-neon bg-clip-text text-transparent mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
        >
          Frontend Developer & UI/UX Designer
        </motion.h2>

        {/* Optional CTA Section */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <motion.button
            className="px-6 py-3 bg-accent-cyan text-black font-semibold rounded-lg hover:bg-accent-neon transition-colors duration-300 shadow-cyan focus-visible:outline-accent-cyan focus-visible:outline-2"
            onClick={() => navigate('/projects')}
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
            aria-label="Navigate to projects page"
          >
            Explore My Work
          </motion.button>
          <motion.div
            className="mt-6 text-accent-cyan text-sm"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            ↓ Scroll to explore
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
