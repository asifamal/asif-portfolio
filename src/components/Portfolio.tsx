import { useState } from 'react';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';

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
      githubUrl: '#',
      liveUrl: '#',
      image: dockerDjangoImg
    },
    {
      title: 'Shopify E-commerce Platform',
      description: 'Modern e-commerce application built with React and Node.js. Features include user authentication, payment integration with Razorpay, and responsive design.',
      date: 'Nov 2023',
      technologies: ['React', 'Node.js', 'MongoDB', 'Razorpay', 'JWT'],
      category: 'Full Stack',
      githubUrl: '#',
      liveUrl: '#',
      image: shopifyEcommerceImg
    },
    {
      title: 'ERP Management System',
      description: 'Enterprise Resource Planning system for business process automation. Built with Django REST Framework and Angular for modern, scalable architecture.',
      date: 'Jun 2024',
      technologies: ['Django REST', 'Angular', 'PostgreSQL', 'Redis', 'Celery'],
      category: 'Enterprise',
      githubUrl: '#',
      liveUrl: '#',
      image: erpimg
    },
    {
      title: 'ML-Powered Web App',
      description: 'Web application integrating machine learning models with Flask and PyTorch. Features real-time predictions and data visualization dashboards.',
      date: 'Dec 2023',
      technologies: ['Flask', 'PyTorch', 'Python', 'Chart.js', 'AWS'],
      category: 'Machine Learning',
      githubUrl: '#',
      liveUrl: '#',
      image: mlimg
    }
  ];

  const categories = ['All', 'DevOps', 'Full Stack', 'Enterprise', 'Machine Learning'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
              My <span className="text-primary">Portfolio</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Here are some of the projects I've worked on, showcasing my skills in 
              web development, DevOps, and system architecture.
            </p>
          </div>

          {/* Category Filter */}
          <div
            className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up"
            style={{ animationDelay: '0.1s' }}
          >
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-primary text-primary-foreground shadow-card'
                    : 'bg-card text-muted-foreground hover:text-foreground hover:shadow-soft'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.title}
                className="project-card group animate-fade-in-up"
                style={{ animationDelay: '0.2s' }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <div className="aspect-video bg-gradient-hero relative flex items-center justify-center">
                    <div className="w-full h-full flex items-center justify-center relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="aspect-video w-full object-cover rounded-2xl"
                      />
                      <span className="absolute text-4xl font-display font-bold text-primary opacity-20 select-none pointer-events-none">
                        {project.title.split(' ').map(word => word[0]).join('')}
                      </span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 gap-3">
                    <a 
                      href={project.githubUrl}
                      onClick={e => project.githubUrl === '#' && e.preventDefault()}
                      className="w-10 h-10 bg-card rounded-full flex items-center justify-center text-foreground hover:text-primary transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href={project.liveUrl}
                      onClick={e => project.liveUrl === '#' && e.preventDefault()}
                      className="w-10 h-10 bg-card rounded-full flex items-center justify-center text-foreground hover:text-primary transition-colors"
                      aria-label={`View Live ${project.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-4">
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

                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-muted rounded-full text-sm font-medium text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-muted-foreground mb-6">
              Want to see more projects or discuss collaboration?
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <a
                href="/Asif%20Amal%20-%20resume.pdf"
                download
                className="btn-hero inline-flex items-center gap-2 shadow-lg hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent/40 transition-transform duration-300"
                style={{ minWidth: 180 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0l-6-6m6 6l6-6" />
                </svg>
                Download Resume
              </a>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-hero inline-flex items-center gap-2"
              >
                Get in Touch
                <ExternalLink className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
