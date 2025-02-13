"use client";

import { styled, Button } from "@mui/material";

const UnderlineButton = styled(Button)(({ theme }) => ({
  color: "inherit",
  textTransform: "none",
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    width: "100%",
    height: "2px",
    bottom: 0,
    left: 0,
    backgroundColor: theme.palette.primary.main,
    transform: "scaleX(0)",
    transition: "transform 0.4s ease-in-out",
  },
  "&:hover::after, &:focus::after, &.active::after": {
    transform: "scaleX(1)",
  },
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));


export default UnderlineButton;