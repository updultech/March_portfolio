
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log('Form data:', formData);
      toast.success("Message sent successfully!");
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return <section id="contact" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            Feel free to reach out if you have any questions or want to work together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-semibold mb-8">Get In Touch</h3>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-md bg-primary/10 text-primary mt-1">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-primary transition-colors">abdulhakimkarim50@gmil.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-md bg-primary/10 text-primary mt-1">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <a href="tel:+12345678900" className="text-muted-foreground hover:text-primary transition-colors">+233 (542047150)</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-md bg-primary/10 text-primary mt-1">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-muted-foreground">Walewale-Accra,Ghana</p>
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-semibold mb-4">Follow Me</h3>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-md bg-foreground/5 hover:bg-foreground/10 text-foreground transition-colors" aria-label="GitHub Profile">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-md bg-foreground/5 hover:bg-foreground/10 text-foreground transition-colors" aria-label="LinkedIn Profile">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-md bg-foreground/5 hover:bg-foreground/10 text-foreground transition-colors" aria-label="Twitter Profile">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div className="bg-card rounded-xl p-6 md:p-8 shadow-sm border border-border">
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className={cn("w-full rounded-md border border-input bg-background px-4 py-2", "focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent", "transition-colors")} placeholder="Abdul Hakim" />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={cn("w-full rounded-md border border-input bg-background px-4 py-2", "focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent", "transition-colors")} placeholder="wise03667@gmail.com" />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className={cn("w-full rounded-md border border-input bg-background px-4 py-2", "focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent", "transition-colors")} placeholder="Project Inquiry" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className={cn("w-full rounded-md border border-input bg-background px-4 py-2", "focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent", "transition-colors resize-none")} placeholder="Your message here..." />
              </div>
              
              <button type="submit" disabled={isSubmitting} className={cn("w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg", "bg-primary text-primary-foreground hover:bg-primary/90", "transition-colors font-medium", isSubmitting && "opacity-70 cursor-not-allowed")}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;
