
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-muted/30 dark:bg-muted/10 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-4 text-center">
            <p className="text-muted-foreground">
              &copy; {currentYear} Abdul Hakim. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center">
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
              aria-label="Scroll to top"
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
