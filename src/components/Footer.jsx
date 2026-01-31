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
    { name: 'Behance', url: 'https://www.behance.net/clintonmunarkalu' },
    { name: 'Instagram', url: 'https://www.instagram.com/munardidit?igsh=MWo4a3gwdHhvcWd0MQ==' },
    { name: 'Twitter', url: 'https://x.com/munardidit?t=1I-ATaVoBYPjudi9XF3xRw&s=08' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/clinton-kalu-08322a151?utm_source=share_via&utm_content=profile&utm_medium=member_android' }
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
            <h3 className="newsletter-title"> Subscribe For Our Monthly Flyer</h3>
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