import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <h3 className="font-display font-bold text-2xl text-foreground mb-4">
                Asif Amal
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Software Engineer passionate about creating exceptional digital experiences 
                through innovative web development and DevOps solutions.
              </p>
              <p className="text-sm text-muted-foreground">
                Available for freelance projects and full-time opportunities.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-semibold text-lg text-foreground mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Portfolio', 'Services', 'Skills', 'Contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => {
                        const element = document.getElementById(item.toLowerCase());
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-display font-semibold text-lg text-foreground mb-4">
                Get in Touch
              </h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Kerala, India</p>
                <a 
                  href="mailto:asifamal6@gmail.com"
                  className="block hover:text-primary transition-colors"
                >
                  asifamal6@gmail.com
                </a>
                <a 
                  href="tel:+919526290148"
                  className="block hover:text-primary transition-colors"
                >
                  +91 9526290148
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4 md:mb-0">
              <span>© 2024 Asif Amal. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>using React & Tailwind CSS</span>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary-glow transition-all duration-300 hover:scale-110"
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;