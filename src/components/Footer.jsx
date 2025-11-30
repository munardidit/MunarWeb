import React, { useState } from 'react';
import './Footer.css';
import logo from '../assets/footerlogo.png'; 

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  const socialLinks = [
    { name: 'Behance', url: '#' },
    { name: 'Instagram', url: '#' },
    { name: 'Twitter', url: '#' },
    { name: 'LinkedIn', url: '#' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-logo">
            <img src={logo} alt="Munar Logo" className="logo-footer" />
          </div>
        </div>

        <div className="footer-center">
          <nav className="footer-nav">
            {socialLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="footer-right">
          <div className="newsletter-section">
            <h3 className="newsletter-title">Newsletter</h3>
            <form onSubmit={handleSubmit} className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-button">
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}