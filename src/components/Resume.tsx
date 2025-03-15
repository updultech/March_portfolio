
import React from 'react';
import { Download, Briefcase, GraduationCap, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

const experiences = [
  {
    title: 'Senior Web Developer',
    company: 'Tech Solutions Inc.',
    period: '2020 - Present',
    description: 'Lead developer for multiple client projects, specializing in React and Node.js applications. Implemented CI/CD pipelines and mentored junior developers.',
  },
  {
    title: 'Frontend Developer',
    company: 'Digital Agency',
    period: '2018 - 2020',
    description: 'Developed responsive web applications using React, Redux, and SCSS. Collaborated with designers to implement pixel-perfect interfaces.',
  },
  {
    title: 'Web Design Intern',
    company: 'Creative Studio',
    period: '2017 - 2018',
    description: 'Assisted in designing and developing websites for small businesses. Gained hands-on experience with HTML, CSS, and JavaScript.',
  },
];

const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of Technology',
    period: '2014 - 2018',
    description: 'Graduated with honors. Specialized in web development and user interface design.',
  },
  {
    degree: 'Full Stack Web Development Bootcamp',
    institution: 'Coding Academy',
    period: '2018',
    description: 'Intensive 12-week program covering modern web technologies and best practices.',
  },
];

const certifications = [
  {
    title: 'React Developer Certification',
    issuer: 'React Training',
    year: '2020',
  },
  {
    title: 'AWS Certified Developer - Associate',
    issuer: 'Amazon Web Services',
    year: '2021',
  },
  {
    title: 'UI/UX Design Fundamentals',
    issuer: 'Design Institute',
    year: '2019',
  },
];

const Resume = () => {
  return (
    <section id="resume" className="section-padding bg-secondary/50 dark:bg-muted/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Resume</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            A summary of my professional experience, education, and certifications.
          </p>
          <a 
            href="/resume.pdf" 
            download
            className={cn(
              "mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-lg",
              "bg-primary text-primary-foreground hover:bg-primary/90",
              "transition-colors font-medium"
            )}
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Briefcase size={24} />
              </div>
              <h3 className="text-2xl font-semibold">Work Experience</h3>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 pb-2">
                  <div className="absolute top-0 left-0 h-full w-px bg-border"></div>
                  <div className="absolute top-1 left-0 w-2 h-2 rounded-full bg-primary transform -translate-x-1/2"></div>
                  <h4 className="text-xl font-medium">{exp.title}</h4>
                  <div className="flex items-center text-muted-foreground mb-2">
                    <span>{exp.company}</span>
                    <span className="mx-2">•</span>
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-foreground/80">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education and Certifications */}
          <div className="space-y-12">
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>

              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-8 pb-2">
                    <div className="absolute top-0 left-0 h-full w-px bg-border"></div>
                    <div className="absolute top-1 left-0 w-2 h-2 rounded-full bg-primary transform -translate-x-1/2"></div>
                    <h4 className="text-xl font-medium">{edu.degree}</h4>
                    <div className="flex items-center text-muted-foreground mb-2">
                      <span>{edu.institution}</span>
                      <span className="mx-2">•</span>
                      <span>{edu.period}</span>
                    </div>
                    <p className="text-foreground/80">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Award size={24} />
                </div>
                <h3 className="text-2xl font-semibold">Certifications</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-lg border border-border bg-background"
                  >
                    <h4 className="font-semibold">{cert.title}</h4>
                    <div className="text-muted-foreground text-sm">
                      <span>{cert.issuer}</span>
                      <span className="mx-1">•</span>
                      <span>{cert.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
