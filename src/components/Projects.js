import React from 'react';
import { ExternalLink, GitBranch } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      image: "https://5.imimg.com/data5/FR/AI/MY-18248335/e-commerce-website.png",
      description: "A full-scale e-commerce solution with dynamic cart management, Stripe integration, and real-time inventory tracking.",
      tags: ["python", "django", "mysql", "MVT architecture"],
      github: "#",
      live: "#"
    },
    {
      title: "CHAT APPLICATION",
      image: "https://media.geeksforgeeks.org/wp-content/uploads/20240223113231/Online-Chat-Application.webp",
      description: "A real-time chat application with features like private messaging, group chats, and file sharing.",
      tags: ["react", "django", "Rest API", "MySQL"],
      github: "#",
      live: "#"
    },
    {
      title: "Portfolio Website",
      image: "https://cdn.prod.website-files.com/62c5836076839ad95e36215d/64fb2b64316862df3d2e099a_rcQYosTUaQ6hiJSAk7JphBXJCcZpPSAnq6u8U_3pnj0UVcHM5niGdGNBZ625bnZmRDTg4UQFOjd8tuczIfNSZ7JQeRBtnY4NHvGyGjRBe_DVE4QiDsVy9vcllRT7B1Ut7wx9CBDr945F26Um1hF4xM4.png",
      description: "Portfolio website for showcasing my skills and projects.",
      tags: ["React", "CSS", "JavaScript"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title gradient-text">Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image-placeholder">
                <img src={project.image} alt="" className="placeholder-text" width="100%" height="100%"/>
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
