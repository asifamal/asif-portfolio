import { useState, useEffect } from 'react';
import React from "react";
import { FaReact, FaDocker, FaAws, FaAngular, FaNodeJs, FaGit, FaJenkins } from "react-icons/fa";
import { SiPython, SiDjango, SiPostgresql, SiRedis, SiKubernetes } from "react-icons/si";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
              My <span className="text-primary">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise across various 
              programming languages, frameworks, and development tools.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex}
                className="animate-fade-in-up"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
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
                        <div 
                          className={`skill-bar ${isVisible ? 'scale-x-100' : 'scale-x-0'}`}
                          style={{ 
                            width: `${skill.level}%`,
                            transitionDelay: `${(categoryIndex * 6 + skillIndex) * 0.1}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Technologies Icons */}
          <div className="mt-20 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
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
                <div 
                  key={index}
                  className="group flex flex-col items-center space-y-2 p-4 rounded-2xl hover:bg-card transition-all duration-300 hover:shadow-soft"
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors font-medium text-center">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications or Highlights */}
          <div className="mt-20 bg-gradient-hero rounded-3xl p-8 md:p-12 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <h3 className="font-display font-bold text-3xl text-center mb-8 text-foreground">
              What Sets Me Apart
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold text-2xl">⚡</span>
                </div>
                <h4 className="font-display font-semibold text-xl mb-2 text-foreground">Fast Learner</h4>
                <p className="text-muted-foreground">
                  Quickly adapt to new technologies and frameworks to deliver cutting-edge solutions.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent-foreground font-bold text-2xl">🎯</span>
                </div>
                <h4 className="font-display font-semibold text-xl mb-2 text-foreground">Problem Solver</h4>
                <p className="text-muted-foreground">
                  Analytical approach to breaking down complex problems into manageable solutions.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold text-2xl">🚀</span>
                </div>
                <h4 className="font-display font-semibold text-xl mb-2 text-foreground">Innovation Focused</h4>
                <p className="text-muted-foreground">
                  Always exploring new ways to improve efficiency and user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;