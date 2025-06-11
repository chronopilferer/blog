"use client";

import { motion } from 'framer-motion';
import styles from './HomeHeader.module.css';

const SubtitleBlog = () => {
  const subtitleBlog = " Blog";

  const letterAnimationBlog = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 1.6 + i * 0.1,
        duration: 0.4,
      },
    }),
  };

  return (
    <>
      {subtitleBlog.split('').map((char, index) => (
        <motion.span
          key={`blog-${index}`}
          custom={index}
          initial="hidden"
          animate="visible"
          variants={letterAnimationBlog}
          className={styles.letterSubtitle}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </>
  );
};

export default SubtitleBlog;
