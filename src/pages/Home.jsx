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
    }, 2000);

    return () => clearInterval(interval);
  }, [words.length]);

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

  const wordVariants = {
    initial: {
      y: 100,
      opacity: 0,
      rotateX: 45,
      scale: 0.8
    },
    animate: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: {
  opacity: 2,
    transition: {
      duration: 1.0,
      ease: "easeIn"
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
                In a time when brands <br/> look and feel the same,<br />
              </motion.span>
              <span style={{ 
                display: 'inline-flex',
                alignItems: 'baseline',
                gap: '0.3em'
              }}>
                <span>Be</span>
                <span style={{ 
                  display: 'inline-block',
                  position: 'relative',
                  height: '1.2em',
                  width: '390px',
                  overflow: 'hidden',
                  perspective: '1000px',
                  perspectiveOrigin: 'center bottom'
                }}>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentWordIndex}
                      variants={wordVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className="highlight"
                      style={{ 
                        left: 0,
                        top: 0,
                        whiteSpace: 'nowrap',
                        transformStyle: 'preserve-3d',
                        transformOrigin: 'center center'
                      }}
                    >
                      {words[currentWordIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
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
                  backgroundColor: "#F2F2F9",
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
                  backgroundColor: "#1515E8",
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