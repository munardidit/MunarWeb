import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './MunarNavbar.css';
import logo from '../assets/Newmunar.png';

export default function MunarNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleSectionClick = (e, sectionClass) => {
    e.preventDefault();
    closeMenu();

    // If we're not on the homepage, navigate there first with hash
    if (location.pathname !== '/') {
      navigate(`/#${sectionClass}`);
      return;
    }

    // If we're on the homepage, scroll to the section
    const element = document.querySelector(`.${sectionClass}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <Link to="/" className="logo-container" onClick={closeMenu}>
            <img src={logo} alt="Munar Logo" className="logo" />
          </Link>

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
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li>
              <Link 
                to="/" 
                className={location.pathname === '/' ? 'active' : ''}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/works" 
                className={location.pathname === '/works' ? 'active' : ''}
                onClick={closeMenu}
              >
                Work
              </Link>
            </li>
            <li>
              <a 
                href="#aboutme-section" 
                onClick={(e) => handleSectionClick(e, 'aboutme-section')}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#footer" 
                onClick={(e) => handleSectionClick(e, 'footer')}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}