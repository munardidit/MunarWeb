// src/pages/Home.jsx
import React from 'react';
import MunarNavbar from '../components/MunarNavbar';
import BrandAccordion from '../components/BrandServices';
import Brands from '../components/Brands';
import AboutMe from '../components/AboutMe';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <MunarNavbar />
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              In times where brands<br />
              looks & Feel The same,<br />
              <span className="highlight">Be Different!</span>
            </h1>

            <div className="button-group">
              <button className="btn btn-outline">View Projects</button>
              <button className="btn btn-primary">Hire Munar</button>
            </div>
          </div>
        </div>
      </section>
      <BrandAccordion />
      <Brands />
      <AboutMe />
      <Testimonial />
      <Footer />
    </>
  );
}