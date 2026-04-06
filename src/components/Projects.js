import React from 'react';
import { ExternalLink, GitBranch } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-scale e-commerce solution with dynamic cart management, Stripe integration, and real-time inventory tracking.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#"
    },
    {
      title: "Finance Dashboard",
      description: "Data visualization dashboard for personal finance. Tracks expenses, predicts savings, and generates PDF reports.",
      tags: ["Vue.js", "D3.js", "Firebase"],
      github: "#",
      live: "#"
    },
    {
      title: "AI Content Generator",
      description: "SaaS application that leverages OpenAI's GPT models to generate marketing copy, blog posts, and emails in seconds.",
      tags: ["Next.js", "TailwindCSS", "OpenAI API"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title gradient-text">Featured Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image-placeholder">
                <span className="placeholder-text">{project.title.charAt(0)}</span>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span className="tag" key={tagIndex}>{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} className="icon-link"><GitBranch size={20} /> Code</a>
                  <a href={project.live} className="icon-link"><ExternalLink size={20} /> Live Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative Blob */}
      <div className="glow-blob blob-3"></div>
    </section>
  );
};

export default Projects;
