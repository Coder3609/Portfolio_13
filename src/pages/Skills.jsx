import React from 'react';
import { motion } from 'framer-motion';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiRedux } from 'react-icons/si';
import { CardContainer, CardBody, CardItem } from '../components/ui/card-3d.jsx';
import { BackgroundBeams } from '../components/ui/background-beams.jsx';

const Skills = () => {
  const skills = [
    {
      id: 1,
      name: 'HTML5',
      icon: SiHtml5,
      color: '#E34F26',
      description: 'Markup Language',
    },
    {
      id: 2,
      name: 'CSS3',
      icon: SiCss3,
      color: '#1572B6',
      description: 'Styling',
    },
    {
      id: 3,
      name: 'JavaScript',
      icon: SiJavascript,
      color: '#F7DF1E',
      description: 'Programming Language',
    },
    {
      id: 4,
      name: 'React',
      icon: SiReact,
      color: '#61DAFB',
      description: 'Frontend Library',
    },
    {
      id: 5,
      name: 'Redux Toolkit',
      icon: SiRedux,
      color: '#764ABC',
      description: 'State Management',
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
          Tech Stack
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-gray-400 text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Technologies I work with to build modern web applications
        </motion.p>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {skills.map((skill) => (
            <motion.article
              key={skill.id}
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ y: -8, boxShadow: `0 0 20px ${skill.color}` }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <CardContainer className="inter-var">
                  <CardBody className="bg-dark-800 border border-dark-600 rounded-3xl p-6 sm:p-8 h-full aspect-square flex flex-col items-center justify-center transition-all duration-300">
                    <CardItem translateZ="60" className="mb-6">
                      <motion.div
                        whileHover={{ scale: 1.15, rotate: [0, -10, 10, -10, 0] }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <skill.icon
                          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
                          style={{ color: skill.color }}
                          aria-label={`${skill.name} technology icon`}
                          role="img"
                        />
                      </motion.div>
                    </CardItem>
                    <CardItem translateZ="40" className="text-xl md:text-2xl font-bold text-white text-center mb-2">
                      {skill.name}
                    </CardItem>
                    <CardItem translateZ="20" className="text-sm md:text-base text-gray-400 text-center">
                      {skill.description}
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

export default Skills;
