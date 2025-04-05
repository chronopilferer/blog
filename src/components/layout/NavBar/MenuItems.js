"use client";

import React from "react";
import UnderlineButton from "@components/ui/buttons/UnderlineButton";
import menuItems from "@config/menuItems";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

export default function MenuItems() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));  

  return (
    <>
      {menuItems.map((item) => (
        <UnderlineButton
          key={item.label}
          href={item.href}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: isMobile ? 0 : "8px",   
            textTransform: "none",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {!isMobile && React.cloneElement(item.icon, { sx: { marginRight: "10px" } })}

            <Typography variant="body1">{item.label}</Typography>
          </Box>
        </UnderlineButton>
      ))}
    </>
  );
}
