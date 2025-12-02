import { Code, Cloud, Smartphone, Database, Globe, Settings } from 'lucide-react';
import { FaSearch, FaRegLightbulb, FaCode, FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies like React, Angular, and Django. Focused on performance, scalability, and user experience.',
      features: ['React & Angular Development', 'Django & Flask Backends', 'RESTful API Design', 'Responsive Design']
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud',
      description: 'Complete DevOps solutions including containerization, CI/CD pipelines, and cloud deployment on AWS and Azure platforms.',
      features: ['Docker & Kubernetes', 'Jenkins CI/CD', 'AWS & Azure Deployment', 'Infrastructure as Code']
    },
    {
      icon: Database,
      title: 'Backend Systems',
      description: 'Robust backend architectures with scalable databases, API integrations, and microservices for enterprise applications.',
      features: ['Database Design', 'API Development', 'Microservices Architecture', 'Performance Optimization']
    },
    {
      icon: Globe,
      title: 'Full Stack Solutions',
      description: 'End-to-end development services from concept to deployment, including ERP, CRM, and HRMS systems for businesses.',
      features: ['ERP Development', 'CRM Solutions', 'HRMS Systems', 'Business Process Automation']
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
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="services" className="py-20 bg-muted/30 relative overflow-hidden">
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
              My <span className="text-primary">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I offer comprehensive web development and DevOps services to help businesses 
              build and scale their digital presence with modern, efficient solutions.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="bg-card border border-white/5 rounded-3xl p-8 shadow-card hover:shadow-floating transition-all duration-300 group"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display font-semibold text-2xl mb-4 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Process Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-20"
          >
            <h3 className="font-display font-semibold text-3xl text-center mb-12">
              My <span className="text-primary">Process</span>
            </h3>

            <div className="grid md:grid-cols-4 gap-8">
                {[
                  { icon: <FaSearch size={32} color="#fff" />, title: 'Discovery', description: 'Understanding your business needs and requirements' },
                  { icon: <FaRegLightbulb size={32} color="#fff" />, title: 'Planning', description: 'Creating detailed project roadmap and architecture' },
                  { icon: <FaCode size={32} color="#fff" />, title: 'Development', description: 'Building your solution with best practices' },
                  { icon: <FaRocket size={32} color="#fff" />, title: 'Deployment', description: 'Launching and maintaining your application' }
                ].map((process, index) => (
                  <motion.div 
                    key={index} 
                    whileHover={{ scale: 1.05 }}
                    className="text-center group"
                  >
                    <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-glow transition-all duration-300">
                      {process.icon}
                    </div>
                    <h4 className="font-display font-semibold text-xl mb-3 text-foreground">
                      {process.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {process.description}
                    </p>
                  </motion.div>
                ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-hero rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
              <div className="relative z-10">
                <h3 className="font-display font-bold text-3xl md:text-4xl mb-4 text-foreground">
                  Ready to Start Your Project?
                </h3>
                <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                  Let's discuss how I can help bring your ideas to life with modern, 
                  scalable solutions tailored to your business needs.
                </p>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-hero shadow-xl"
                >
                  Let's Work Together
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;