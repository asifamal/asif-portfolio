import { ArrowRight, Download } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const rotate = useTransform(scrollY, [0, 500], [0, 45]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-dark perspective-1000">
      {/* 3D Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Cube-like shape */}
        <motion.div
          style={{ y: y1, rotate }}
          className="absolute top-20 left-[10%] w-32 h-32 bg-gradient-to-br from-primary to-blue-600 rounded-3xl shadow-2xl opacity-80 backdrop-blur-md border border-white/10"
          animate={{ 
            rotateX: [0, 180, 360], 
            rotateY: [0, 180, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Sphere-like shape */}
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-40 right-[10%] w-40 h-40 bg-gradient-to-tr from-accent to-purple-600 rounded-full shadow-2xl opacity-80 blur-sm"
          animate={{ 
            y: [0, -30, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating Donut/Torus approximation */}
        <motion.div
          className="absolute top-1/3 right-[20%] w-24 h-24 border-8 border-secondary/50 rounded-full"
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Small particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-white/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center text-center max-w-6xl mx-auto"
        >
          {/* Content */}
          <motion.p variants={itemVariants} className="text-primary font-medium text-lg mb-4 tracking-wide uppercase">
            What I Do
          </motion.p>

          <motion.h1 variants={itemVariants} className="font-display font-bold text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight mb-6">
            I enjoy creating{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">delightful</span>,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">human-centered</span>{' '}
            digital experiences.
          </motion.h1>
          
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground/90 mb-4">
              Think. Make.{' '}
              <span className="text-primary">Solve.</span>
            </h2>
          </motion.div>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Motivated Software Engineer specializing in Web Development and DevOps. 
            I build scalable web applications with modern technologies and solve complex problems with elegant solutions.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToPortfolio}
              className="btn-hero inline-flex items-center gap-2 group"
            >
              View Portfolio
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="btn-secondary inline-flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Contact Me
            </motion.button>
          </motion.div>

          {/* Quick Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 pt-8 border-t border-border/50 w-full max-w-4xl">
            {[
              { value: "2+", label: "Years Experience" },
              { value: "10+", label: "Projects Completed" },
              { value: "5+", label: "Technologies Mastered" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="text-center p-4 rounded-2xl hover:bg-white/5 transition-colors"
              >
                <div className="font-display font-bold text-4xl lg:text-5xl text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;