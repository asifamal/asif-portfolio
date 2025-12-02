import { Calendar, MapPin, GraduationCap, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const timeline = [
    {
      type: 'work',
      title: 'Full Stack Developer',
      company: 'Travidux Technologies',
      period: 'May 2024 – July 2025',
      location: 'Kerala, India',
      description: 'Developing ERP, CRM, and HRMS systems using Django REST Framework and Angular. Implementing scalable solutions for business process automation.',
      technologies: ['Django REST Framework', 'Angular', 'PostgreSQL', 'Docker']
    },
    {
      type: 'work',
      title: 'Python Full Stack Developer Intern',
      company: 'CamerinFolks Pvt Ltd',
      period: 'Sept 2023 – Jan 2024',
      location: 'Remote',
      description: 'Built web applications using Django and Flask frameworks. Worked with PyTorch for machine learning integration and handled deployment processes.',
      technologies: ['Django', 'Flask', 'PyTorch', 'AWS', 'Linux']
    },
    {
      type: 'education',
      title: 'B.Tech in Computer Science',
      company: 'Kerala Technical University',
      period: '2019 – 2023',
      location: 'Kerala, India',
      description: 'Graduated with comprehensive knowledge in computer science fundamentals, software engineering principles, and modern web technologies.',
      technologies: ['Data Structures', 'Algorithms', 'Software Engineering', 'Database Systems']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I'm a passionate software engineer who loves turning complex problems into simple, 
              beautiful solutions. With expertise in both frontend and backend development, 
              I create end-to-end digital experiences that make a difference.
            </p>
          </motion.div>

          {/* Personal Bio */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 shadow-card mb-12"
          >
            <h3 className="font-display font-semibold text-2xl mb-4 text-primary">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              As a motivated and skilled software engineer, I specialize in web development and DevOps practices. 
              My journey began during my Computer Science studies at Kerala Technical University, where I developed 
              a strong foundation in programming and software engineering principles.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm passionate about creating scalable web applications, implementing efficient DevOps processes, 
              and staying up-to-date with the latest technologies. My approach combines technical expertise with 
              a keen eye for user experience, ensuring that every solution I build is both robust and user-friendly.
            </p>
          </motion.div>

          {/* Timeline */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.h3 variants={itemVariants} className="font-display font-semibold text-2xl text-center mb-8">
              Experience & <span className="text-primary">Education</span>
            </motion.h3>
            
            {timeline.map((item, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-card/80 backdrop-blur-md border border-white/5 rounded-3xl p-8 shadow-sm hover:shadow-glow transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg ${
                    item.type === 'work' 
                      ? 'bg-gradient-to-br from-primary to-primary-glow text-primary-foreground' 
                      : 'bg-gradient-to-br from-accent to-pink-500 text-accent-foreground'
                  }`}>
                    {item.type === 'work' ? <Briefcase size={24} /> : <GraduationCap size={24} />}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h4 className="font-display font-semibold text-xl text-foreground">
                        {item.title}
                      </h4>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          {item.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          {item.location}
                        </div>
                      </div>
                    </div>
                    
                    <h5 className="font-semibold text-primary mb-3">{item.company}</h5>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-muted/50 border border-white/5 rounded-full text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;