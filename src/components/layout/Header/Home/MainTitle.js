"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './HomeHeader.module.css';

const MainTitle = () => {
  const mainTitle = "Chrono Pilferer";

  const letterAnimationMain = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.4 },
    }),
  };

  return (
    <>
      {mainTitle.split('').map((char, index) => (
        <motion.span
          key={`main-${index}`}
          custom={index}
          initial="hidden"
          animate="visible"
          variants={letterAnimationMain}
          className={styles.letterMain}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </>
  );
};

export default MainTitle;
