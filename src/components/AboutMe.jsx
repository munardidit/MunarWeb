import React from 'react';
import './AboutMe.css';
import MunarImage from '../assets/Munar.png';

export default function AboutMe() {
  return (
    <section className="aboutme-section">
      <div className="aboutme-container">
        <h3 className="aboutme-label">About Me:</h3>

        <div className="aboutme-content">
          <div className="aboutme-text">
            <h2 className="aboutme-title">
              My name is <span className="name-highlight">Munar</span>,<br />
              and I <span className="love-highlight">looove</span> doing this.
            </h2>

            <p className="aboutme-description">
              "Reports show that 20% of businesses fail in their first year and over 50% fail within their first 5 years".
              My mission is simple; To make sure that's not the case for your business.
            </p>

            <p className="aboutme-description">
              I've spent Over 5 years of studying and helping businesses - especially those ones just starting out - to
              build a solid foundation that help them navigate the turbulent times that is associated with building a
              worthwhile, memorable and unique brand,
            </p>
          </div>

          <div className="aboutme-image-wrapper">
            <img 
              src={MunarImage} 
              alt="Munar" 
              className="aboutme-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}