// BrandAccordion.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './BrandServices.css';

export default function BrandAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const items = [
    {
      title: "Outstanding visual Identity",
      subtitle: "Design.",
      content: "Ignore the jargon. This is just saying that I take your idea and give it a recognizable and memorable face that aligns with your vision, goals and customers."
    },
    {
      title: "Overall Brand Design",
      subtitle: "or Redesign.",
      content: "This one here covers both the look and personality or characteristics of your brand and how it relates to your customers. Your Mission, goals, values, your target audience, and the entire strategy to approach them."
    },
    {
      title: "Help brands stay Consistent visually...",
      subtitle: "",
      content: "You want to appear the same everywhere (in digital and traditional touchpoints) so as to remain recognizable. That's where the brand management service comes in."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleMouseEnter = (index) => {
    setOpenIndex(index);
  };

  const handleMouseLeave = () => {
    setOpenIndex(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -50 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Content dropdown anime
  const contentVariants = {
    collapsed: { 
      height: 0,
      opacity: 0,
      transition: {
        height: {
          duration: 0.4,
          ease: [0.04, 0.62, 0.23, 0.98]
        },
        opacity: {
          duration: 0.3,
          ease: "easeOut"
        }
      }
    },
    expanded: { 
      height: "15vh",
      opacity: 1,
      transition: {
        height: {
          duration: 0.4,
          ease: [0.04, 0.62, 0.23, 0.98]
        },
        opacity: {
          duration: 0.3,
          delay: 0.1,
          ease: "easeIn"
        }
      }
    }
  };

  // Icon animation
  const iconVariants = {
    closed: { 
      rotate: 0,
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    open: { 
      rotate: 180,
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  return (
    <div className="brand-accordion-container">
      <div className="brand-accordion-wrapper">
        <motion.h2 
          className="brand-accordion-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          What I help brands do:
        </motion.h2>
        
        <motion.div 
          className="accordion-list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {items.map((item, index) => (
            <motion.div 
              key={index} 
              className="accordion-item"
              variants={itemVariants}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <motion.button
                onClick={() => toggleAccordion(index)}
                className="accordion-button"
                whileHover={{ 
                  x: 5,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="accordion-title-wrapper">
                  <motion.h3 
                    className="accordion-title"
                    animate={{ 
                      color: openIndex === index ? "#60a5fa" : "#ffffff"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.title}
                  </motion.h3>
                  {item.subtitle && (
                    <motion.p 
                      className="accordion-subtitle"
                      animate={{ 
                        color: openIndex === index ? "#60a5fa" : "#ffffff"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.subtitle}
                    </motion.p>
                  )}
                </div>
                <motion.svg 
                  className="accordion-icon"
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  variants={iconVariants}
                  animate={openIndex === index ? "open" : "closed"}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </motion.svg>
              </motion.button>
              
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div 
                    className="accordion-content"
                    variants={contentVariants}
                    initial="collapsed"
                    animate="expanded"
                    exit="collapsed"
                    style={{ overflow: "hidden" }}
                  >
                    <motion.p 
                      className="accordion-text"
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ 
                        y: 0, 
                        opacity: 1,
                        transition: { delay: 0.2, duration: 0.4 }
                      }}
                      exit={{ y: -10, opacity: 0 }}
                    >
                      {item.content}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}