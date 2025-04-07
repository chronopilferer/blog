"use client";

import React from "react";
import { Container, Box, Typography } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { motion } from "framer-motion";
import styles from "./AboutPage.module.css";

export default function AboutSection() {
  return (
    <section className={styles.section}>
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ type: "spring", stiffness: 100, damping: 22 }}
        >
          <Box>
            <Typography className={styles.sectionTitle} gutterBottom>
              👨‍💻 About Me | 김현우
            </Typography>
            <Typography variant="body1" className={styles.introText}>
              저는 목포해양대학교 컴퓨터공학과에서 학부연구생으로 활동 중입니다.
              AI와 데이터 과학에 깊은 흥미를 가지고 있으며,  
              이론과 실무의 경계를 넘나드는 유연한 개발자를 꿈꿉니다.
            </Typography>
            <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
              🧪 주요 이력 타임라인
            </Typography>
            <Timeline position="alternate" className={styles.timelineContainer}>
              <TimelineItem>
                <TimelineOppositeContent>
                  2023.10 ~ 현재
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>📡 전파 기반 기술 과제</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent>
                  2024.06 ~ 2024.12
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  🚢 선박 자동 접안 시스템 개발
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent>
                  2024.10 ~ 현재
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                </TimelineSeparator>
                <TimelineContent>
                  📊 글로벌기초연구실 참여 – 시계열 예측 기반 AI 연구 수행
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Box>
        </motion.div>
      </Container>
    </section>
  );
}
