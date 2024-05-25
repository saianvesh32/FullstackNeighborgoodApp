import React from 'react';
import { motion } from 'framer-motion';
import "./Connect.css";
import houses1 from "../assets/houses1.jpg";

const Connect = () => {
  const imageAnimation = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1.5, delay: 0.3 } // Increased duration and delay
    }
  };

  const contentAnimation = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1.5, delay: 0.5 } // Increased duration and delay
    }
  };

  return (
    <div id="connect">
      <div className="forhead">
        <h1 className="head2">Connect to neighbors</h1>
      </div>
      <div className="connect-container">
        <motion.div
          className="image-section"
          variants={imageAnimation}
          initial="hidden"
          animate="visible"
        >
          <img src={houses1} alt="Neighborhood" className="neighborhood-image" />
        </motion.div>
        <motion.div
          className="content-section"
          variants={contentAnimation}
          initial="hidden"
          animate="visible"
        >
          <h1 className="headline">A Way For Neighbors to <span className="highlight">Connect</span></h1>
          <p>Neighborhood norms have evolved away from <strong>spontaneous connections</strong>.</p>
          <p>Today we prefer to screen our contacts online before meeting in person. We screen work colleagues using <strong>LinkedIn</strong>; we screen activity participants on <strong>Facebook</strong>; we screen <strong>romance candidates</strong> using online dating services.</p>
          <p>What's needed now is an app that lets us share specific info that we select, with <strong>nearby neighbors</strong> that we also select—just as we can do now on LinkedIn, but for our social lives with nearby neighbors.</p>
          <p>AI can suggest <strong>matches and activities</strong>, making connection even <strong>easier</strong>. LLMs enable semantic understanding of wants and needs, allowing the neighborhood connector—formerly the local extrovert—to instead be an <strong>AI agent</strong>.</p>
          <button className="getbtn">Get Started</button>
        </motion.div>
      </div>
    </div>
  );
};

export default Connect;
