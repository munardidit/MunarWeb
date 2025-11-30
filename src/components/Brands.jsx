import React from 'react';
import { motion } from 'framer-motion';
import './Brands.css';
import OnikamImage from '../assets/Onikam.jpg';
import SvilleCardImage from '../assets/Pedge49.jpg';
import HelmetImage from '../assets/head.jpg';

export default function Brands() {
  const brandImages = [
    {
      id: 1,
      src: OnikamImage,
      alt: 'Onikam Billboard'
    },
    {
      id: 2,
      src: SvilleCardImage,
      alt: 'Storkville Tech Business Card'
    },
    {
      id: 3,
      src: HelmetImage,
      alt: 'TR Helmet'
    }
  ];

  // container anime variant
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  // grid anime variants
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Button anime
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.8
      }
    }
  };

  return (
    <section className="brands-section">
      <div className="brands-container">
        <motion.h2 
          className="brands-title"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Brands Created
        </motion.h2>
        
        <motion.div 
          className="brands-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div 
            className="brand-item brand-large"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <img src={brandImages[0].src} alt={brandImages[0].alt} />
          </motion.div>
          
          <motion.div 
            className="brand-item brand-small"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            <img src={brandImages[1].src} alt={brandImages[1].alt} />
          </motion.div>
          
          <motion.div 
            className="brand-item brand-small"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            <img src={brandImages[2].src} alt={brandImages[2].alt} />
          </motion.div>
        </motion.div>

        <motion.div 
          className="brands-button-wrapper"
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.button 
            className="btn-view-more"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#1d4ed8"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            View more
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}