import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MunarNavbar from '../components/MunarNavbar';
import BrandAccordion from '../components/BrandServices';
import Brands from '../components/Brands';
import AboutMe from '../components/AboutMe';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';

export default function Home() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ['Different!', 'Unique!', 'Memorable!', 'Functional!', 'Bold!'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2500); 

    return () => clearInterval(interval);
  }, []);

  // Hero title animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1
      }
    }
  };

  // changing words 
  const wordVariants = {
    enter: {
      y: 20,
      opacity: 0,
      scale: 0.9
    },
    center: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: {
      y: -20,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  // Button animation
  const buttonContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 1,
        staggerChildren: 0.2
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <MunarNavbar />
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <motion.h1 
              className="hero-title"
              variants={titleVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                In times where brands<br />
                looks & Feel The same,<br />
              </motion.span>
              <span className="highlight-wrapper">
                Be{' '}
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWordIndex}
                    variants={wordVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="highlight"
                    style={{ display: 'inline-block' }}
                  >
                    {words[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>

            <motion.div 
              className="button-group"
              variants={buttonContainerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.button 
                className="btn btn-outline"
                variants={buttonVariants}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "#fff",
                  color: "#000"
                }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.button>
              <motion.button 
                className="btn btn-primary"
                variants={buttonVariants}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "#1d4ed8",
                  boxShadow: "0 5px 20px rgba(37, 99, 235, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Munar
              </motion.button>
            </motion.div>
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