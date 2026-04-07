import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! This is a demo template.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section light-theme">
      <div className="container">
        <h2 className="section-title gradient-text">Get In Touch</h2>
        
        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="sub-heading">Let's build something awesome together.</h3>
            <p className="contact-text">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
              I'll try my best to get back to you!
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon"><Mail size={20} /></div>
                <span>rdharunnn@gmail.com</span>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><Phone size={20} /></div>
                <span>+91 7339043503</span>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><MapPin size={20} /></div>
                <span>Tiruppur, Tamil Nadu</span>
              </div>
            </div>
          </div>
          
          {/* <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required 
                placeholder="John Doe"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required 
                placeholder="john@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="How can I help you?"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary submit-btn">
              Send Message <Send size={18} />
            </button>
          </form> */}
        </div>
      </div>
      
      <footer className="footer">
        <div className="container footer-content">
          <p>&copy; {new Date().getFullYear()} Dharun R. All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
