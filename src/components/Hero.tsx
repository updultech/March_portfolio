import React from 'react';
import { ArrowRight, Github, Linkedin, Twitter, Youtube } from 'lucide-react';
import { cn } from '@/lib/utils';
const Hero = () => {
  return <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <h1 className="text-4xl lg:text-6xl leading-tight mb-4 md:text-5xl font-bold">
              Hi, I'm <span className="text-primary">Abdul Hakim</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
              Web Developer & Designer
            </h2>
            <p className="text-lg mb-8 max-w-xl">
              I create stunning digital experiences with modern technologies. 
              Specializing in building beautiful, functional websites and web applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#projects" className={cn("inline-flex items-center gap-2 px-6 py-3 rounded-lg", "bg-primary text-primary-foreground hover:bg-primary/90", "transition-colors font-medium")}>
                View My Work
                <ArrowRight size={18} />
              </a>
              <a href="#contact" className={cn("inline-flex items-center gap-2 px-6 py-3 rounded-lg", "border border-foreground/20 hover:bg-muted", "transition-colors font-medium")}>
                Contact Me
              </a>
            </div>
            <div className="flex items-center gap-4 mt-8">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors" aria-label="GitHub Profile">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors" aria-label="LinkedIn Profile">
                <Linkedin size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors" aria-label="Twitter Profile">
                <Twitter size={24} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors" aria-label="YouTube Channel">
                <Youtube size={24} />
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
                <img alt="John Doe" src="/lovable-uploads/2f2d81fe-c8bc-4943-a6bd-cf0caaec7fa9.png" className="w-full h-full object-fill" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-primary/10 -z-10 animate-pulse-slow"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-primary/10 -z-10 animate-pulse-slow" style={{
              animationDelay: '1s'
            }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;