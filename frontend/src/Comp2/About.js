import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import about from '../assets/about.jpg'; // Make sure to replace with the correct path to your image

const About = () => {
  const imageAnimation = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1.5, delay: 0.3 } // Adjust duration and delay if needed
    }
  };

  const contentAnimation = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1.5, delay: 0.5 } // Adjust duration and delay if needed
    }
  };

  return (
    <div className="about-container" id="about">
      <motion.div
        className="content-section"
        variants={contentAnimation}
        initial="hidden"
        animate="visible"
      >
        <h1 className="headline">About <span className="highlight">Us</span></h1>
        <p><strong>NeighborGood</strong> is on a mission to provide the simplest platform for neighborhoods to form connections & community. We are going after this by creating an <strong>AI agent</strong> that acts as the <strong>highly-social extrovert</strong> neighbor who finds <strong>symbiotic activities</strong> for people to do together.</p>
        <p>We offer users the ability to screen potential nearby connections and arrange shared <strong>face-to-face activities</strong>. Our team previously founded <strong>Foresight Institute, Persist Ventures, & Systemic Altruism.</strong></p>
      </motion.div>
      <motion.div
        className="image-section"
        variants={imageAnimation}
        initial="hidden"
        animate="visible"
      >
        <img src={about} alt="About Us" className="about-image" />
      </motion.div>
    </div>
  );
};

export default About;
