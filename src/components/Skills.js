import React from 'react';
import './Skills.css';

const Skills = () => {
  const technicalSkills = ['HTML/CSS','Bootstrap','JavaScript', 'React', 'Python', 'Django'];
  const tools = ['Git', 'MySQL'];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title gradient-text">My Skills</h2>
        <div className="skills-content animate-fade-in">
          <div className="skills-category">
            <h3>Technical Skills</h3>
            <div className="skills-list">
              {technicalSkills.map((skill, index) => (
                <span key={index} className="skill-tag hover-glow">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skills-category">
            <h3>Tools & Platforms</h3>
            <div className="skills-list">
              {tools.map((skill, index) => (
                <span key={index} className="skill-tag hover-glow">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
