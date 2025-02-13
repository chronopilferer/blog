"use client";

import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import IconLinkButton from "@components/ui/buttons/IconLinkButton";
import MenuItems from "@components/layout/NavBar/MenuItems";

const NavBar = React.memo(function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: isScrolled ? "rgba(51, 51, 51, 0.8)" : "#333",
        transition: "background-color 0.3s ease",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          minHeight: "56px",
          padding: "0 16px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconLinkButton href="/" label="home" icon={<HomeIcon sx={{ fontSize: "2rem", color: "white" }} />} />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexGrow: 1,
            justifyContent: "flex-end",
            gap: "15px",
          }}
        >
          <MenuItems />
        </Box>
      </Toolbar>
    </AppBar>
  );
});

export default NavBar;
