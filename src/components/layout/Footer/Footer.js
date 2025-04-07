"use client";

import React from "react";
import { Box, Container, Divider, Stack } from "@mui/material";
import IconLinkButton from "@components/ui/buttons/IconLinkButton";
import Copyright from "@components/layout/Footer/Copyright";
import socialLinks from "@config/socialLinks";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Divider />
      <Container maxWidth="lg">
        <Box
          sx={{
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            pt: { xs: 2, sm: 4, md: 8 },
            width: "100%",
            px: { xs: 2, sm: 4 },
          }}
        >
          <Stack
            direction="row"
            spacing={2}
            wrap="wrap"
            justifyContent="center"
            sx={{ alignItems: "center" }}
          >
            {socialLinks.map((link) => (
              <IconLinkButton key={link.label} href={link.href} label={link.label} icon={link.icon} />
            ))}
          </Stack>
        </Box>

        <Box sx={{ mt: { xs: 2, sm: 4, md: 8 } }}>
          <Copyright />
        </Box>
      </Container>
    </footer>
  );
}