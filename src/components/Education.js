import React from 'react';
import './Education.css';

const Education = () => {
  const educationList = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Tech University",
      year: "2020 - 2022",
      description: "Specialized in Software Engineering and Artificial Intelligence. Graduated with honors."
    },
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "State College",
      year: "2016 - 2020",
      description: "Focused on web development, databases, and network administration."
    }
  ];

  return (
    <section id="education" className="education-section light-theme">
      <div className="container">
        <h2 className="section-title gradient-text">Education</h2>
        <div className="timeline">
          {educationList.map((item, index) => (
            <div key={index} className="timeline-item animate-fade-in" style={{ animationDelay: `${0.2 * index}s` }}>
              <div className="timeline-dot"></div>
              <div className="timeline-content hover-glow">
                <span className="timeline-year">{item.year}</span>
                <h3 className="timeline-degree">{item.degree}</h3>
                <h4 className="timeline-institution">{item.institution}</h4>
                <p className="timeline-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
