"use client";

import React from "react";
import { Container, Box, Typography, Stack, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import styles from "./AboutPage.module.css";

export default function ContentSection() {
  return (
    <section className={styles.section}>
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ type: "spring", stiffness: 110, damping: 20 }}
        >
          <Box>
            <Typography className={styles.sectionTitle} gutterBottom>
              🧠 어떤 콘텐츠를 볼 수 있나요?
            </Typography>
            <Stack spacing={3} mt={3}>
              <motion.div
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card variant="outlined" className={styles.cardItem}>
                  <CardContent>
                    <Typography variant="h6">📘 AI & 딥러닝</Typography>
                    <Typography variant="body2">
                      실험 코드, 논문 리뷰, 실제 적용 사례를 공유합니다.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card variant="outlined" className={styles.cardItem}>
                  <CardContent>
                    <Typography variant="h6">
                      🔍 연구와 프로젝트 기록
                    </Typography>
                    <Typography variant="body2">
                      실전 문제 해결 과정과 성과를 기술합니다.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card variant="outlined" className={styles.cardItem}>
                  <CardContent>
                    <Typography variant="h6">
                      🧪 실험과 시행착오
                    </Typography>
                    <Typography variant="body2">
                      실패에서 얻은 교훈과, 그에 따른 개선 과정까지 가감 없이 공유합니다.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Stack>
          </Box>
        </motion.div>
      </Container>
    </section>
  );
}
