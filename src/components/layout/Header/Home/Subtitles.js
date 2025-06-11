"use client";

import { motion } from 'framer-motion';
import styles from './HomeHeader.module.css';

const SubtitleS = () => {
  const jumpAnimation = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: [0, -15, 0],
      transition: {
        delay: 1.0,
        duration: 0.6,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={jumpAnimation}
      className={styles.letterSubtitle}
    >
      's
    </motion.span>
  );
};

export default SubtitleS;
