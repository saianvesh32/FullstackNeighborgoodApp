import React from 'react';
import { motion } from 'framer-motion';
import './Postcard.css';
import postcard1 from "../assets/postcards1.png";
import { useNavigate } from 'react-router-dom';

const Postcard = () => {
  const navigate = useNavigate();

  const togoto = () => {
    navigate('/users/postform');
  };

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
    <div className="postcard-container" id="postcard">
      <motion.div
        className="image-section"
        variants={imageAnimation}
        initial="hidden"
        animate="visible"
      >
        <img src={postcard1} alt="Postcard" className="postcard-image" />
      </motion.div>
      <motion.div
        className="content-section"
        variants={contentAnimation}
        initial="hidden"
        animate="visible"
      >
        <h1 className="headline">Our <span className="highlight">Postcards</span></h1>
        <p>Explore our unique collection of postcards and share a slice of your world with your neighbors. Let's bridge distances one postcard at a time. Send a smile, share a story, and strengthen our community bonds. Pick your favorite, add a personal touch, and let the joy spread to every doorstep. Explore, connect, cherish!</p>
        <button className="getbtn" onClick={togoto}>View Postcards</button>
      </motion.div>
    </div>
  );
};

export default Postcard;
