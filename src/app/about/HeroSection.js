"use client";

import React from "react";
import { Container, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import styles from "./AboutPage.module.css";

export default function HeroSection() {
  return (
    <section className={styles.section}>
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <Box className={styles.heroSection}>
            <Typography className={styles.heroTitle} gutterBottom>
              👋 환영합니다!
            </Typography>
            <Typography className={styles.heroSubtitle} gutterBottom>
              AI 연구자이자 개발자, 기록하며 성장하는 김현우의 블로그입니다.
            </Typography>
            <Typography className={styles.introText} mt={2}>
              시간을 훔쳐 배우고, 기술로 되돌려주는 개발자가 되고 싶습니다.  
              이곳은 제가 직접 경험하고 고민한 것을 기록하고 나누는{" "}
              <strong>개발 여정의 지도</strong>입니다.
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </section>
  );
}
