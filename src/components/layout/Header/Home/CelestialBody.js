"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './HomeHeader.module.css';

const CelestialBody = ({ isScrolled }) => {
  return (
    <motion.div
      className={styles.celestialBody}
      initial={{ scale: 0.9 }}
      animate={{
        scale: 1.1,
        background: isScrolled
          ? 'radial-gradient(circle at 30% 30%, #ffcc00, #ff9900)'
          : 'radial-gradient(circle at 30% 30%, #fff, #ccc)',
        boxShadow: isScrolled
          ? '0 0 20px 10px rgba(255, 204, 0, 0.5)'
          : '0 0 15px 5px rgba(255, 255, 255, 0.5)',
      }}
      transition={{ duration: 1 }}
    />
  );
};

export default CelestialBody;