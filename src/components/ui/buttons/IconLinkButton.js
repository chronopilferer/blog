"use client";

import IconButton from "@mui/material/IconButton";
import Link from "next/link";

export default function IconLinkButton({ href, label, icon, external = false }) {
  return (
    <IconButton
      component={external ? "a" : Link}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      color="inherit"
      size="small"
      aria-label={`Visit ${label}`}
      sx={{
        "&:hover": {
          transform: "scale(1.1)",
          transition: "transform 0.2s ease-in-out",
          backgroundColor: "grey.500",
        },
      }}
    >
      {icon}
    </IconButton>
  );
}
