// Testimonial.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './Testimonial.css';
import TestimoniImage from '../assets/testimoni.png';
import TestimoniImage2 from '../assets/reed.jpg';

export default function Testimonial() {
  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: "Working with MUNAR was a breath of fresh air. He took the rough, practical world of construction and turned it into a brand identity that feels strong, modern, and genuinely ours. The attention to detail was clear in every step, and the final result exceeded what I imagined. If you want someone who listens, understands your vision, and delivers something that stands out, I’d confidently recommend his services. 10/10.",
      name: "Reed Afuape",
      title: "Founder Travumax ",
      location: "Lagos State, Nigeria",
      avatar: TestimoniImage2 
    },
    {
      id: 2,
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consect etur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet, consect etur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolor sit etur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      name: "Dr. Benedicta",
      title: "Founder, Onikam Hair",
      location: "United Kingdom",
      avatar: TestimoniImage 
    },
    {
      id: 3,
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consect etur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet, consect etur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolor sit etur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      name: "Dapo",
      title: "Co-Founder, Starkville Tech",
      location: "Canada",
      avatar: TestimoniImage 
    }
  ];

  const renderStars = (rating) => {
    return [...Array(rating)].map((_, index) => (
      <motion.span 
        key={index} 
        className="star"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ 
          delay: index * 0.1,
          duration: 0.3,
          type: "spring",
          stiffness: 200
        }}
      >
        ★
      </motion.span>
    ));
  };

  // Container anime
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  // Card anime
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  // Button anime
  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section className="testimonial-section">
      <div className="testimonial-container">
        <motion.h2 
          className="testimonial-heading"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Brand Owners Enjoy<br />
          Working With Me.
        </motion.h2>

        <motion.div 
          className="testimonial-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id} 
              className="testimonial-card"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="testimonial-rating"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + (index * 0.2) }}
              >
                {renderStars(testimonial.rating)}
              </motion.div>

              <motion.p 
                className="testimonial-text"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + (index * 0.2), duration: 0.5 }}
              >
                {testimonial.text}
              </motion.p>

              <motion.div 
                className="testimonial-author"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + (index * 0.2), duration: 0.4 }}
              >
                <motion.img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="author-avatar"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-title">{testimonial.title}</p>
                  <p className="author-location">{testimonial.location}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="testimonial-button-wrapper"
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.button 
            className="btn-view-more"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#1d4ed8",
              boxShadow: "0 5px 20px rgba(37, 99, 235, 0.4)"
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