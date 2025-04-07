"use client";

import React from "react";
import { Container, Box, Typography, Stack, Button } from "@mui/material";
import { GitHub, Description, Face, LinkedIn } from "@mui/icons-material";
import { motion } from "framer-motion";
import styles from "./AboutPage.module.css";

export default function SocialSection() {
  return (
    <section className={styles.section}>
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <Box>
            <Typography className={styles.sectionTitle} gutterBottom>
              🔗 연결하고 소통해요!
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              mt={2}
              className={styles.socialContainer}
            >
              <motion.div whileHover={{ scale: 1.1 }}>
                <Button
                  startIcon={<GitHub />}
                  variant="outlined"
                  href="https://github.com/chronopilferer"
                  target="_blank"
                >
                  GitHub
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Button
                  startIcon={<Description />}
                  variant="outlined"
                  href="https://www.notion.so/ace7ff5a62b340878d5731225e1df4cb"
                  target="_blank"
                >
                  Notion
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Button
                  startIcon={<Face />}
                  variant="outlined"
                  href="https://huggingface.co/chronopilferer"
                  target="_blank"
                >
                  Hugging Face
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Button
                  startIcon={<LinkedIn />}
                  variant="outlined"
                  href="https://www.linkedin.com/in/pilferer-chrono-14aa0a35a/"
                  target="_blank"
                >
                  LinkedIn
                </Button>
              </motion.div>
            </Stack>
          </Box>
        </motion.div>
      </Container>
    </section>
  );
}
