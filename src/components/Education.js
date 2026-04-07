import React from 'react';
import './Education.css';

const Education = () => {
  const educationList = [
    {
      degree: "Master of Computer Science",
      institution: "Bharathidasan University",
      year: "2025 - 2027",
      description: " currently pursuing.",
      percentage:"81.5%"
    },
    {
      degree: "Bachelor of Computer Science",
      institution: "AG Arts and Science College",
      year: "2022- 2025",
      description: "Focused on web development, databases, and network administration.",
      percentage:"79.9%"
    },
    {
      degree: "Higher Secondary",
      institution: "Govt Model Higher Secondary School,thopputhurai",
      year: "2020- 2022",
      percentage:"58.7%"
    },
    {
      degree:"High School",
      institution:"Govt Model Higher Secondary School,thopputhurai",
      year:"2019- 2020",
      percentage:"76.6%"
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
                <p className="timeline-percentage">{item.percentage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
