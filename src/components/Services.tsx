import { Code, Cloud, Smartphone, Database, Globe, Settings } from 'lucide-react';
import { FaSearch, FaRegLightbulb, FaCode, FaRocket } from 'react-icons/fa';

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

  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
              My <span className="text-primary">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I offer comprehensive web development and DevOps services to help businesses 
              build and scale their digital presence with modern, efficient solutions.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index}
                  className="bg-card rounded-3xl p-8 shadow-card hover:shadow-floating transition-all duration-300 group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
                </div>
              );
            })}
          </div>

          {/* Process Section */}
          <div className="mt-20 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
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
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      {process.icon}
                    </div>
                    <h4 className="font-display font-semibold text-xl mb-3 text-foreground">
                      {process.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {process.description}
                    </p>
                  </div>
                ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <div className="bg-gradient-hero rounded-3xl p-8 md:p-12">
              <h3 className="font-display font-bold text-3xl md:text-4xl mb-4 text-foreground">
                Ready to Start Your Project?
              </h3>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss how I can help bring your ideas to life with modern, 
                scalable solutions tailored to your business needs.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-hero"
              >
                Let's Work Together
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;