"use client";

import React from "react";
import { Container, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import styles from "./AboutPage.module.css";

export default function BlogInfoSection() {
  return (
    <section className={styles.section}>
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ type: "spring", stiffness: 90, damping: 18 }}
        >
          <Box>
            <Typography className={styles.sectionTitle} gutterBottom>
              🧭 이 블로그는 어떤 공간인가요?
            </Typography>
            <Typography variant="body1" paragraph className={styles.introText}>
              이 블로그는{" "}
              <strong>
                AI, 딥러닝, 시계열 예측, 강화학습, 데이터 과학
              </strong>{" "}
              제가 직접 연구하고 부딪히며 얻은 경험을 바탕으로,{" "}
              <strong>생생한 인사이트와 성장의 발자취</strong>를 남기는 공간입니다.
            </Typography>
            <Typography variant="body1" className={styles.introText}>
              단순한 이론 소개를 넘어서,{" "}
              <strong>
                실제 문제 해결 과정, 실패의 기록, 코드 리뷰, 논문 요약, 공부법
              </strong>{" "}
              까지도 다룹니다.
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </section>
  );
}
