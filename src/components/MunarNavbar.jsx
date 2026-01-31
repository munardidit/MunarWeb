import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './MunarNavbar.css';
import logo from '../assets/Newmunar.png';

export default function MunarNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    // Handle scrolling to section if hash is present
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    // Handle escape key press
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.classList.remove('menu-open'); 
    };
  }, [menuOpen]);

  useEffect(() => {
    if (contactModalOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    // Handle escape key for modal
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setContactModalOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.classList.remove('modal-open');
    };
  }, [contactModalOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const openContactModal = (e) => {
    e.preventDefault();
    closeMenu();
    setContactModalOpen(true);
  };

  const closeContactModal = () => {
    setContactModalOpen(false);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    // email service integration here
    alert('Message sent successfully!');
    closeContactModal();
  };

  const handleSectionClick = (e, sectionClass) => {
    e.preventDefault();
    closeMenu();

    if (location.pathname !== '/') {
      navigate(`/#${sectionClass}`);
      return;
    }

    const element = document.querySelector(`.${sectionClass}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-content">
            <div className="navbar-logo">
              <Link to="/" onClick={closeMenu}>
                <img src={logo} alt="Munar Logo" />
              </Link>
            </div>

            {/* Hamburger Button */}
            <button 
              className={`hamburger ${menuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            {/* Mobile Menu Overlay */}
            <div 
              className={`menu-overlay ${menuOpen ? 'active' : ''}`}
              onClick={closeMenu}
              aria-hidden="true"
            />

            {/* Navigation Links */}
            <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
              <Link 
                to="/" 
                className={location.pathname === '/' ? 'active' : ''}
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link 
                to="/works" 
                className={location.pathname === '/works' ? 'active' : ''}
                onClick={closeMenu}
              >
                Work
              </Link>
              <a 
                href="#aboutme-section" 
                onClick={(e) => handleSectionClick(e, 'aboutme-section')}
              >
                About
              </a>
              <a 
                href="#contact" 
                onClick={openContactModal}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Contact Modal */}
      {contactModalOpen && (
        <div className="contact-modal-overlay" onClick={closeContactModal}>
          <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={closeContactModal}
              aria-label="Close modal"
            >
              ×
            </button>
            
            <h2 className="modal-title">Get in Touch</h2>
            <p className="modal-subtitle">Send me a message and I'll get back to you soon!</p>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  placeholder="Your message..."
                />
              </div>

              <button type="submit" className="modal-submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}