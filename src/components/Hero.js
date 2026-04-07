import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import './Hero.css';
import profile from '../Pictures/portfolio1.jpg.jpeg';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <h2 className="greeting">Hello, I'm</h2>
          <h1 className="name gradient-text">DHARUN .R</h1>
          <p className="subtitle">
            I build beautiful, responsive, and uniquely engaging web experiences that fuse design with robust engineering.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight className="btn-icon" size={20} />
            </a>
            <a href="/resume.pdf" download="Dharun_R_Resume.pdf" className="btn btn-secondary">
              Download CV <Download className="btn-icon" size={20} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
        </div>
        
        <div className="hero-image-wrapper animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="unshape-image-container">
            <div className="unshape-image-inner">
              <img 
                src={profile} 
                alt="Profile avatar" 
                className="unshape-image" 
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="glow-blob blob-1"></div>
      <div className="glow-blob blob-2"></div>
    </section>
  );
};

export default Hero;
