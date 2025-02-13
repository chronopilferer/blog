"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Box } from '@mui/material';
import styles from '@components/layout/Header/Home/Header.module.css';
import MainTitle from './MainTitle';
import SubtitleS from './Subtitles';
import SubtitleBlog from './SubtitleBlog';
import CelestialBody from './CelestialBody';

const Header = ({ isScrolled }) => {
  return (
    <motion.header
      className={styles.headerContainer}
      initial={{ backgroundColor: '#000', color: '#fff' }}
      animate={{
        backgroundColor: isScrolled ? '#fff' : '#000',
        color: isScrolled ? '#000' : '#fff',
      }}
      transition={{ duration: 0.8 }}
    >
      <Box className={styles.headerBox}>
        <CelestialBody isScrolled={isScrolled} />
        <motion.h1 className={styles.headerTitle}>
          <MainTitle />
          <SubtitleS />
          <SubtitleBlog />
        </motion.h1>
      </Box>
    </motion.header>
  );
};

export default Header;
