"use client";

import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import styles from "./Footer.module.css";

export default function Copyright() {
  const currentYear = React.useMemo(() => new Date().getFullYear(), []);
  return (
    <Typography component="p" variant="body2" className={styles.copyright}>
      {"Copyright © "}
      <Link color="inherit" href="https://chronopilferer.github.io/" aria-label="Go to Chrono Pilferer's Website">
        Chrono Pilferer
      </Link>
      &nbsp;{currentYear}
    </Typography>
  );
}
