import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { CardContainer, CardBody, CardItem } from '../components/ui/card-3d.jsx';
import { BackgroundBeams } from '../components/ui/background-beams.jsx';

const Contact = () => {
  const socialLinks = [
    {
      id: 1,
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/Coder3609',
      color: '#333333',
      description: 'View my repositories',
    },
    {
      id: 2,
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://linkedin.com/in/divya-mohan-nayak-b333752a7/',
      color: '#0077B5',
      description: 'Connect with me',
    },
    {
      id: 3,
      name: 'Twitter',
      icon: FaTwitter,
      url: 'https://x.com/DivyaMohan9021',
      color: '#1DA1F2',
      description: 'Follow me',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section className="min-h-screen relative bg-dark-900 py-24">
      {/* Background Effects */}
      <BackgroundBeams className="absolute inset-0 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-neon bg-clip-text text-transparent text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-gray-400 text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Let's connect! Find me on these platforms
        </motion.p>

        {/* Social Links Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {socialLinks.map((link) => (
            <motion.article
              key={link.id}
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ y: -8, boxShadow: `0 0 20px ${link.name === 'GitHub' ? 'rgba(51,51,51,0.5)' : link.name === 'LinkedIn' ? 'rgba(0,119,181,0.5)' : 'rgba(29,161,242,0.5)'}` }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <CardContainer className="inter-var">
                  <CardBody className="bg-dark-800 border border-dark-600 rounded-3xl p-6 sm:p-8 h-full aspect-square flex flex-col items-center justify-center transition-all duration-300">
                    <CardItem translateZ="60" className="mb-6">
                      <motion.div
                        whileHover={{ scale: 1.15, rotate: 5, color: link.color }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        style={{ color: 'white' }}
                      >
                        <link.icon
                          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
                          aria-label={`${link.name} icon`}
                        />
                      </motion.div>
                    </CardItem>
                    <CardItem translateZ="40" className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
                      {link.name}
                    </CardItem>
                    <CardItem translateZ="30" className="text-base md:text-lg text-gray-400 text-center mb-6">
                      {link.description}
                    </CardItem>
                    <CardItem translateZ="50">
                      <motion.a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-accent-cyan to-accent-purple text-white font-semibold text-sm md:text-base focus-visible:outline-accent-cyan focus-visible:outline-2 focus-visible:outline-offset-2"
                        aria-label={`Visit ${link.name} profile`}
                        whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 255, 255, 0.6)' }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        Visit Profile →
                      </motion.a>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
