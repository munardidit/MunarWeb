// src/pages/Works.jsx
import React from 'react';
import { motion } from 'framer-motion';
import MunarNavbar from '../components/MunarNavbar';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';
import './Works.css';
import OnikamImage from '../assets/Onikam.jpg';
import SabliImage from '../assets/sabli.jpg';
import GearImage from '../assets/gearss.jpg';
import StarkvilleImage from '../assets/gear.jpg';
import YaffeImage from '../assets/yaffe.jpg';
import BankImage from '../assets/bank.jpg';

export default function Works() {
  const projects = [
    {
      id: 1,
      title: "The Onikam Brand",
      description: "Hair & Product brand, London UK.",
      image: OnikamImage, 
      category: "Branding",
      link: "https://www.behance.net/gallery/your-onikam-link"
    },
    {
      id: 2,
      title: "The SABLI Brand",
      description: "Not-For-Profit Organization, Lagos, Nigeria.",
      image: SabliImage, 
      category: "Design",
      link: "https://www.behance.net/gallery/your-sabli-link"
    },
    {
      id: 3,
      title: "PrimeEdge Resources",
      description: "Construction Development Company, London UK.",
      image: GearImage, 
      category: "Tech",
      link: "https://www.behance.net/gallery/your-primeedge-link"
    },
    {
      id: 4,
      title: "Slate Technologies",
      description: "Tech and Gadget Brand, London UK.",
      image: StarkvilleImage, 
      category: "Tech",
      link: "https://www.behance.net/gallery/230823765/Brand-Design-For-Slate"
    },
    {
      id: 5,
      title: "Yaffe Skin Brand",
      description: "Skin care brand, Lagos Nigeria",
      image: YaffeImage,
      category: "Beauty",
      link: "https://www.behance.net/gallery/your-yaffe-link"
    },
    {
      id: 6,
      title: "The Tellar Brand",
      description: "Finance Brand, Dummy Project.",
      image: BankImage, 
      category: "Finance",
      link: "https://www.behance.net/gallery/your-tellar-link"
    }
  ];

  const handleProjectClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="works-page">
      <MunarNavbar />
      
      <section className="works-hero">
        <div className="works-container">
          <motion.h1 
            className="works-title"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            My work
          </motion.h1>
          
          <motion.div 
            className="works-grid"
            initial="hidden"
            animate="visible"
          >
            {projects.map((project, index) => (
              <motion.div 
                key={project.id} 
                className="work-card"
                initial="rest"
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
              >
                <motion.div 
                  className="work-image-wrapper"
                >
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="work-image"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  />
                </motion.div>
                
                <motion.div 
                  className="work-info"
                >
                  <motion.h3 
                    className="work-title"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="work-description"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + (index * 0.1) }}
                  >
                    {project.description}
                  </motion.p>
                  
                  <motion.button 
                    className="work-button"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "#1515E8",
                      boxShadow: "0 5px 15px rgba(21, 21, 232, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleProjectClick(project.link)}
                  >
                    View Project
                  </motion.button>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Testimonial />
      <Footer />
    </div>
  );
}