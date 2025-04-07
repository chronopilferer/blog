"use client";

import React from "react";
import { Container, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import styles from "./AboutPage.module.css";

export default function FinalSection() {
  return (
    <section className={styles.section}>
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ type: "spring", stiffness: 100, damping: 22 }}
        >
          <Box className={styles.finalSection}>
            <Typography variant="h5" gutterBottom>
              🌱 함께 성장해요
            </Typography>
            <Typography variant="body1">
              완벽을 추구하기보다는, 함께 배우고, 질문하고, 성장하는 여정이 되었으면 합니다.
            </Typography>
            <Typography variant="body1">
              <strong>우리의 학습 곡선이 서로에게 영감이 되길 바랍니다. 🚀</strong>
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </section>
  );
}
