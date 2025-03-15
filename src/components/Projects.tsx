
import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

// Sample project data
const projects = [
  {
    id: 1,
    title: 'E-Commerce Website',
    description: 'A fully responsive e-commerce platform with product filtering and cart functionality.',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    demo: 'https://example.com',
    repo: 'https://github.com',
    tags: ['React', 'Node.js', 'MongoDB', 'Web']
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A Kanban-style task management application with drag and drop functionality.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    demo: 'https://example.com',
    repo: 'https://github.com',
    tags: ['React', 'TypeScript', 'Redux', 'Web']
  },
  {
    id: 3,
    title: 'Portfolio Template',
    description: 'A customizable portfolio template for developers and designers.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1726&q=80',
    demo: 'https://example.com',
    repo: 'https://github.com',
    tags: ['HTML', 'CSS', 'JavaScript', 'Design']
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'A weather dashboard that displays current and forecast weather data.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80',
    demo: 'https://example.com',
    repo: 'https://github.com',
    tags: ['React', 'API', 'CSS', 'Web']
  },
  {
    id: 5,
    title: 'Blog Platform',
    description: 'A full-stack blog platform with user authentication and markdown support.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    demo: 'https://example.com',
    repo: 'https://github.com',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Web']
  },
  {
    id: 6,
    title: 'Mobile App Design',
    description: 'A sleek UI design for a fitness tracking mobile application.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80',
    demo: 'https://example.com',
    repo: 'https://github.com',
    tags: ['UI/UX', 'Figma', 'Design', 'Mobile']
  },
];

// Extract unique tags from projects
const allTags = ['All', ...new Set(projects.flatMap(project => project.tags))];

const Projects = () => {
  const [activeTag, setActiveTag] = useState('All');

  const filteredProjects = activeTag === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeTag));

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects. Each project showcases different skills and technologies.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {allTags.map(tag => (
            <button
              key={tag}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                activeTag === tag 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-secondary hover:bg-secondary/80 text-foreground"
              )}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id}
              className={cn(
                "group rounded-xl overflow-hidden border border-border",
                "bg-card shadow-sm transition-all hover:shadow-md"
              )}
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors"
                    aria-label="View Demo"
                  >
                    <ExternalLink size={18} className="text-white" />
                  </a>
                  <a 
                    href={project.repo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors"
                    aria-label="View Code"
                  >
                    <Github size={18} className="text-white" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="text-xs px-2 py-1 rounded-full bg-secondary/80 text-foreground/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
