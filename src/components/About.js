import React from 'react';
import { Code, Layout, Download } from 'lucide-react';
import './About.css';


const About = () => {
  const skills = [
    { name: "Full Stack Development", icon: <Layout size={24} />, desc: "React, JavaScript, HTML/CSS, Python, Django, MySQL" },
    // { name: "Backend Development", icon: <Code size={24} />, desc: "Python, Django, MySQL" },
    // { name: "UI/UX Design", icon: <Monitor size={24} />, desc: "Figma, Adobe XD" },
    // { name: "Architecture", icon: <Blocks size={24} />, desc: "Microservices, AWS" }
  ];

  return (
    <section id="about" className="about-section light-theme">
      <div className="container">
        <h2 className="section-title gradient-text">About Me</h2>
        
        <div className="about-grid">
          <div className="about-text animate-fade-in">
            <h3 className="sub-heading">Passion for creating seamless web experiences.</h3>
            <p>
              I am a driven software developer specializing in bridging the gap between exceptional design and robust engineering. 
              My journey started with a deep curiosity for how things work on the web, and it has evolved into a career of 
              building scalable, human-centered products.
            </p>
            <p>
              Whether it's designing highly interactive interfaces or structuring resilient backend services, I strive to 
              deliver pixel-perfect implementations paired with maintainable codebases.
            </p>
            <div className="about-buttons" style={{ marginTop: '2rem' }}>
              <a href="/resume.pdf" download="Dharun_R_Resume.pdf" className="btn btn-secondary">
                Download CV <Download className="btn-icon" size={20} />
              </a>
            </div>
          </div>
          
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div 
                className="skill-card hover-glow" 
                key={index} 
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <div className="skill-icon">
                  {skill.icon}
                </div>
                <h4 className="skill-name">{skill.name}</h4>
                <p className="skill-desc">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
