"use client";

import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";
import SettingsIcon from "@mui/icons-material/Settings";
import styles from "./UnderConstruction.module.css";

export default function UnderConstruction() {
  return (
    <Box className={styles.container}>
      <SettingsIcon className={styles["background-icon"]} sx={{ fontSize: "20rem !important" }} />

      <SettingsIcon className={styles.icon} fontSize="6rem" />

      <Typography variant="h3" sx={{ mb: 2, color: "#333" }}>
        🚧 페이지가 제작 중입니다 🚧
      </Typography>
      <Typography className={styles.message}>
        현재 이 페이지는 개발 중입니다. 곧 완성될 예정입니다.
      </Typography>

      <Link href="/" passHref>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          메인 페이지로 이동
        </Button>
      </Link>
    </Box>
  );
}
