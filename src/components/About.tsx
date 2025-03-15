import React from 'react';
import { Code, Database, Layout, Lightbulb, Rocket, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
const skills = [{
  name: 'HTML/CSS',
  level: 90
}, {
  name: 'JavaScript',
  level: 85
}, {
  name: 'React',
  level: 80
}, {
  name: 'TypeScript',
  level: 75
}, {
  name: 'Node.js',
  level: 70
}, {
  name: 'UI/UX Design',
  level: 65
}];
const services = [{
  title: 'Web Development',
  icon: <Code className="h-10 w-10 text-primary" />,
  description: 'Creating responsive, fast, and modern websites with the latest technologies.'
}, {
  title: 'UI/UX Design',
  icon: <Layout className="h-10 w-10 text-primary" />,
  description: 'Designing beautiful, intuitive interfaces that provide excellent user experiences.'
}, {
  title: 'Database Design',
  icon: <Database className="h-10 w-10 text-primary" />,
  description: 'Building efficient and scalable database structures for web applications.'
}, {
  title: 'Consultation',
  icon: <Lightbulb className="h-10 w-10 text-primary" />,
  description: 'Providing expert advice on tech stack choices and development strategies.'
}];
const About = () => {
  return <section id="about" className="section-padding bg-secondary/50 dark:bg-muted/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate web developer and designer with a focus on creating 
            beautiful and functional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h3 className="text-2xl font-semibold mb-6">My Story</h3>
            <div className="space-y-4 text-foreground/80">
              <p>
                With over 5 years of experience in web development, I've worked on a variety 
                of projects ranging from small business websites to complex web applications.
              </p>
              <p>
                I started my journey as a self-taught developer, and I've been constantly 
                learning and improving my skills ever since. My passion for clean code and 
                attention to detail drives me to create high-quality, performant web solutions.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing 
                to open source projects, or sharing my knowledge through blog posts and tutorials.
              </p>
            </div>

            <h3 className="text-2xl font-semibold mt-12 mb-6">Education & Experience</h3>
            <div className="space-y-6">
              <div className="border-l-2 border-primary pl-4 py-2">
                <h4 className="text-lg font-medium">Bachelor's in Computer Science</h4>
                <p className="text-muted-foreground">University For Development Studies • 2023-2027</p>
              </div>
              <div className="border-l-2 border-primary pl-4 py-2">
                <h4 className="text-lg font-medium">Senior Web Developer</h4>
                <p className="text-muted-foreground">Tech Solutions Inc. • 2020-Present</p>
              </div>
              <div className="border-l-2 border-primary pl-4 py-2">
                <h4 className="text-lg font-medium">Frontend Developer</h4>
                <p className="text-muted-foreground">Digital Agency • 2018-2020</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map(skill => <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full transition-all duration-1000 ease-out" style={{
                  width: `${skill.level}%`
                }}></div>
                  </div>
                </div>)}
            </div>

            <h3 className="text-2xl font-semibold mt-16 mb-8">Services I Offer</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service, index) => <div key={index} className={cn("p-6 rounded-xl transition-transform hover:-translate-y-1", "bg-background dark:bg-muted/20 shadow-sm border border-border")}>
                  <div className="mb-4">{service.icon}</div>
                  <h4 className="text-lg font-semibold mb-2">{service.title}</h4>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;