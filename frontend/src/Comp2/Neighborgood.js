import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import "./Neighborgood.css";

const Neighborgood = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate("/users/getstarted");
  };

  const textAnimation = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1.5, delay: 0.3 } // Increased duration and delay
    }
  };

  const imageAnimation = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1.5, delay: 0.5 } // Increased duration and delay
    }
  };

  return (
    <div id='neighborgood'>
      <motion.img
        className="img1"
        src="https://img.freepik.com/premium-vector/district-street-vector-illustration-urban-architecture-with-elderly-man-woman-people-character_109722-4600.jpg"
        alt="NeighborGood"
        variants={imageAnimation}
        initial="hidden"
        animate="visible"
      />
      <motion.h1
        variants={textAnimation}
        initial="hidden"
        animate="visible"
        className="head1"
      >
        Neighborgood
      </motion.h1>
      <motion.p
        className="para"
        variants={textAnimation}
        initial="hidden"
        animate="visible"
      >
        NeighborGood is on a mission to provide the simplest platform for neighborhoods to form connections & community. We are going after this by creating an AI agent that acts as the highly-social extrovert neighbor who finds symbiotic activities for people to do together.
      </motion.p>
      <div className='totbtn'>
        <button className='getbtn' onClick={handleGetStartedClick}>get started</button>
      </div>
    </div>
  );
}

export default Neighborgood;
