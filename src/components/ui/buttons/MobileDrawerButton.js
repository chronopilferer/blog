"use client";

import React from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function MobileDrawerButton({ onClick }) {
  return (
    <IconButton color="inherit" onClick={onClick} aria-label="open menu">
      <MenuIcon sx={{ fontSize: "2rem" }} />
    </IconButton>
  );
}
