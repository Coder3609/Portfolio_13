import React from 'react';
import { motion } from 'framer-motion';
import { CardContainer, CardBody, CardItem } from '../components/ui/card-3d.jsx';
import { BackgroundBeams } from '../components/ui/background-beams.jsx';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Neural Nexus Dashboard',
      description: 'AI-powered analytics platform with real-time data visualization and predictive insights for enterprise decision-making.',
      technologies: ['React', 'TensorFlow', 'D3.js', 'Node.js'],
      githubUrl: 'https://github.com/Coder3609/neural-nexus-dashboard',
    },
    {
      id: 2,
      title: 'Quantum Task Orchestrator',
      description: 'Advanced project management system with intelligent task prioritization and automated workflow optimization.',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Docker'],
      githubUrl: 'https://github.com/Coder3609/quantum-task-orchestrator',
    },
    {
      id: 3,
      title: 'Cipher Stream Protocol',
      description: 'Secure real-time communication platform with end-to-end encryption and decentralized architecture.',
      technologies: ['React Native', 'WebRTC', 'Rust', 'MongoDB'],
      githubUrl: 'https://github.com/Coder3609/cipher-stream-protocol',
    },
    {
      id: 4,
      title: 'Nebula Commerce Engine',
      description: 'Next-generation e-commerce platform with AI-driven recommendations and seamless multi-channel integration.',
      technologies: ['Next.js', 'GraphQL', 'Stripe', 'Redis'],
      githubUrl: 'https://github.com/Coder3609/nebula-commerce-engine',
    },
    {
      id: 5,
      title: 'Apex Workflow Automator',
      description: 'Enterprise-grade automation tool for complex business processes with visual workflow designer.',
      technologies: ['Angular', 'Java', 'Spring Boot', 'Kubernetes'],
      githubUrl: 'https://github.com/Coder3609/apex-workflow-automator',
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
          Featured Work
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-gray-400 text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Explore my latest work and side projects
        </motion.p>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={itemVariants}
            >
              <motion.div whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 300 }}>
                <CardContainer className="inter-var">
                <CardBody className="bg-dark-800 border border-dark-600 rounded-2xl p-6 sm:p-8 h-full hover:shadow-cyan transition-shadow duration-300">
                  <CardItem translateZ="50" className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {project.title}
                  </CardItem>
                  <CardItem translateZ="30" className="text-base md:text-lg text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </CardItem>
                  <CardItem translateZ="20" className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        className="px-3 py-1 rounded-full text-sm bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/30 cursor-pointer"
                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 255, 255, 0.2)' }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </CardItem>
                  <CardItem translateZ="40">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-accent-cyan to-accent-purple text-white font-semibold text-sm md:text-base hover:scale-105 transition-all duration-300 focus-visible:outline-accent-cyan focus-visible:outline-2 focus-visible:outline-offset-2"
                      aria-label={`View ${project.title} on GitHub`}
                      whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 255, 255, 0.6)' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Repository →
                    </motion.a>
                    {/* GitHub repo link to be updated */}
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

export default Projects;
