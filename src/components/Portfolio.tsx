import { useState } from 'react';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import dockerDjangoImg from '../assets/docker-django.jpg';
import shopifyEcommerceImg from '../assets/shopify-ecommerce.jpg';
import erpimg from '../assets/erp.jpg'
import mlimg from '../assets/ml.jpg'

const Portfolio = () => {
  const projects = [
    {
      title: 'Dockerized Django Application',
      description: 'A containerized Django application with Docker and Jenkins CI/CD pipeline. Implements automated testing, deployment, and monitoring for scalable web applications.',
      date: 'Feb 2024',
      technologies: ['Django', 'Docker', 'Jenkins', 'CI/CD', 'PostgreSQL'],
      category: 'DevOps',
      image: dockerDjangoImg
    },
    {
      title: 'Shopify E-commerce Platform',
      description: 'Modern e-commerce application built with React and Node.js. Features include user authentication, payment integration with Razorpay, and responsive design.',
      date: 'Nov 2023',
      technologies: ['React', 'Node.js', 'MongoDB', 'Razorpay', 'JWT'],
      category: 'Full Stack',
      image: shopifyEcommerceImg
    },
    {
      title: 'ERP Management System',
      description: 'Enterprise Resource Planning system for business process automation. Built with Django REST Framework and Angular for modern, scalable architecture.',
      date: 'Jun 2024',
      technologies: ['Django REST', 'Angular', 'PostgreSQL', 'Redis', 'Celery'],
      category: 'Enterprise',
      image: erpimg
    },
    {
      title: 'ML-Powered Web App',
      description: 'Web application integrating machine learning models with Flask and PyTorch. Features real-time predictions and data visualization dashboards.',
      date: 'Dec 2023',
      technologies: ['Flask', 'PyTorch', 'Python', 'Chart.js', 'AWS'],
      category: 'Machine Learning',
      image: mlimg
    }
  ];

  const categories = ['All', 'DevOps', 'Full Stack', 'Enterprise', 'Machine Learning'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
              My <span className="text-primary">Portfolio</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Here are some of the projects I've worked on, showcasing my skills in 
              web development, DevOps, and system architecture.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 relative ${
                  activeCategory === category
                    ? 'text-primary-foreground'
                    : 'bg-card text-muted-foreground hover:text-foreground hover:shadow-soft'
                }`}
              >
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-gradient-primary rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div layout className="grid md:grid-cols-2 gap-8">
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={project.title}
                  className="project-card group bg-card border border-white/5 rounded-3xl overflow-hidden hover:shadow-glow"
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden mb-6">
                    <div className="aspect-video bg-gradient-hero relative flex items-center justify-center overflow-hidden">
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full"
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                        {/* Overlay Buttons */}
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 bg-white rounded-full text-black"
                        >
                          <Github size={20} />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 bg-primary rounded-full text-white"
                        >
                          <ExternalLink size={20} />
                        </motion.button>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 pt-0 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        <Tag size={14} />
                        {project.category}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar size={14} />
                        {project.date}
                      </span>
                    </div>

                    <h3 className="font-display font-semibold text-xl text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-muted/50 border border-white/5 rounded-full text-sm font-medium text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-muted-foreground mb-6">
              Want to see more projects or discuss collaboration?
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <motion.a
                href="/Asif%20Amal%20-%20resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-hero inline-flex items-center gap-2 shadow-lg"
                style={{ minWidth: 180 }}
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.a>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary inline-flex items-center gap-2"
              >
                Get in Touch
                <ExternalLink className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Need to import Download icon as it was used in the original code but missing in imports
import { Download } from 'lucide-react';

export default Portfolio;
