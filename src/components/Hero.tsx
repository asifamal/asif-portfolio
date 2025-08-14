import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="shape-floating top-20 left-10 w-20 h-20 rounded-full shape-blue"></div>
        <div className="shape-floating top-40 right-20 w-16 h-16 rounded-lg shape-pink transform rotate-45" style={{ animationDelay: '1s' }}></div>
        <div className="shape-floating bottom-32 left-20 w-24 h-24 rounded-full shape-peach" style={{ animationDelay: '2s' }}></div>
        <div className="shape-floating top-60 left-1/3 w-12 h-12 rounded-lg shape-pink transform rotate-12" style={{ animationDelay: '3s' }}></div>
        <div className="shape-floating bottom-40 right-1/4 w-18 h-18 rounded-full shape-blue" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center justify-center text-center max-w-6xl mx-auto">
          {/* Content */}
          <div className="animate-fade-in-up">
            <p className="text-primary font-medium text-lg mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>What I Do</p>
            <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              I enjoy creating{' '}
              <span className="text-primary bg-gradient-primary bg-clip-text text-transparent">delightful</span>,{' '}
              <span className="text-accent bg-gradient-accent bg-clip-text text-transparent">human-centered</span>{' '}
              digital experiences.
            </h1>
            
            <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
                Think. Make.{' '}
                <span className="text-primary bg-gradient-primary bg-clip-text text-transparent">Solve.</span>
              </h2>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              Motivated Software Engineer specializing in Web Development and DevOps. 
              I build scalable web applications with modern technologies and solve complex problems with elegant solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <button 
                onClick={scrollToPortfolio}
                className="btn-hero inline-flex items-center gap-2 group transform hover:scale-105 transition-all duration-300"
              >
                View Portfolio
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={scrollToContact}
                className="btn-secondary inline-flex items-center gap-2 transform hover:scale-105 transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                Contact Me
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 pt-8 border-t border-border animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="text-center transform hover:scale-105 transition-all duration-300">
                <div className="font-display font-bold text-4xl lg:text-5xl text-primary mb-2">2+</div>
                <div className="text-muted-foreground text-sm md:text-base">Years Experience</div>
              </div>
              <div className="text-center transform hover:scale-105 transition-all duration-300">
                <div className="font-display font-bold text-4xl lg:text-5xl text-primary mb-2">10+</div>
                <div className="text-muted-foreground text-sm md:text-base">Projects Completed</div>
              </div>
              <div className="text-center transform hover:scale-105 transition-all duration-300">
                <div className="font-display font-bold text-4xl lg:text-5xl text-primary mb-2">5+</div>
                <div className="text-muted-foreground text-sm md:text-base">Technologies Mastered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;