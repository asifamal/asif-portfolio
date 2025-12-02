import { useState, useEffect } from 'react';
import React from "react";
import { FaReact, FaDocker, FaAws, FaAngular, FaNodeJs, FaGit, FaJenkins } from "react-icons/fa";
import { SiPython, SiDjango, SiPostgresql, SiRedis, SiKubernetes } from "react-icons/si";
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'Java', level: 75 },
        { name: 'C++', level: 70 },
        { name: 'SQL', level: 85 }
      ]
    },
    {
      title: 'Frontend Technologies',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Angular', level: 85 },
        { name: 'Vue.js', level: 75 },
        { name: 'Next.js', level: 80 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 90 }
      ]
    },
    {
      title: 'Backend & Frameworks',
      skills: [
        { name: 'Django', level: 90 },
        { name: 'Flask', level: 85 },
        { name: 'Django REST Framework', level: 90 },
        { name: 'Node.js', level: 80 },
        { name: 'Redux', level: 75 },
        { name: '.NET', level: 70 }
      ]
    },
    {
      title: 'DevOps & Cloud',
      skills: [
        { name: 'Docker', level: 85 },
        { name: 'Kubernetes', level: 75 },
        { name: 'Jenkins', level: 80 },
        { name: 'AWS', level: 80 },
        { name: 'Azure', level: 75 },
        { name: 'Linux', level: 85 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
       {/* Background Elements */}
       <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
              My <span className="text-primary">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise across various 
              programming languages, frameworks, and development tools.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div 
                key={categoryIndex}
                initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <h3 className="font-display font-semibold text-2xl mb-8 text-foreground">
                  {category.title}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 + (skillIndex * 0.1), ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Technologies Icons */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-20"
          >
            <h3 className="font-display font-semibold text-2xl text-center mb-12">
              Technologies I <span className="text-primary">Love</span>
            </h3>
            
            <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-8">
              {[
                { name: 'React', icon: <FaReact size={32} color="#fff" /> },
                { name: 'Python', icon: <SiPython size={32} color="#fff" /> },
                { name: 'Django', icon: <SiDjango size={32} color="#fff" /> },
                { name: 'Docker', icon: <FaDocker size={32} color="#fff" /> },
                { name: 'AWS', icon: <FaAws size={32} color="#fff" /> },
                { name: 'Angular', icon: <FaAngular size={32} color="#fff" /> },
                { name: 'Node.js', icon: <FaNodeJs size={32} color="#fff" /> },
                { name: 'PostgreSQL', icon: <SiPostgresql size={32} color="#fff" /> },
                { name: 'Redis', icon: <SiRedis size={32} color="#fff" /> },
                { name: 'Jenkins', icon: <FaJenkins size={32} color="#fff" /> },
                { name: 'Kubernetes', icon: <SiKubernetes size={32} color="#fff" /> },
                { name: 'Git', icon: <FaGit size={32} color="#fff" /> },
              ].map((tech, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="group flex flex-col items-center space-y-2 p-4 rounded-2xl hover:bg-card border border-transparent hover:border-white/5 transition-all duration-300 hover:shadow-soft cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                    {tech.icon}
                  </div>
                  <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors font-medium text-center">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications or Highlights */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-20 bg-gradient-hero rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
          >
             <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
             <div className="relative z-10">
              <h3 className="font-display font-bold text-3xl text-center mb-8 text-foreground">
                What Sets Me Apart
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-primary-foreground font-bold text-2xl">⚡</span>
                  </div>
                  <h4 className="font-display font-semibold text-xl mb-2 text-foreground">Fast Learner</h4>
                  <p className="text-muted-foreground">
                    Quickly adapt to new technologies and frameworks to deliver cutting-edge solutions.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-accent-foreground font-bold text-2xl">🎯</span>
                  </div>
                  <h4 className="font-display font-semibold text-xl mb-2 text-foreground">Problem Solver</h4>
                  <p className="text-muted-foreground">
                    Analytical approach to breaking down complex problems into manageable solutions.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-primary-foreground font-bold text-2xl">🚀</span>
                  </div>
                  <h4 className="font-display font-semibold text-xl mb-2 text-foreground">Innovation Focused</h4>
                  <p className="text-muted-foreground">
                    Always exploring new ways to improve efficiency and user experience.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;