// src/theme.js
import { createTheme } from "@mui/material/styles";

// Define custom breakpoints
const breakpoints = {
  values: {
    xs: 0, // mobile
    sm: 600, // tablet
    md: 960, // small laptop
    lg: 1280, // desktop
    xl: 1920, // large desktop
  },
};
// Create the theme
const theme = createTheme({
  breakpoints,
  palette: {
    background: {
      paper: "#fff",
      default: "#linear-gradient(to right, #E28400, #FFB04C)",
    },
    primary: {
      main: "#5DA571",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#dc004e",
      contrastText: "#ffffff",
    },
    background: {
      default: "#f4f6f8",
      paper: "#ffffff",
    },
    text: {
      primary: "#170f49",
      secondary: "#6f6c90",
    },
    success: {
      main: "#4caf50",
    },
    error: {
      main: "#f44336",
    },
    warning: {
      main: "#ff9800",
    },
    info: {
      main: "#2196f3",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    h1: {
      fontWeight: 500,
      fontSize: "40px",
      lineHeight: 1.2,
      color: "#333C4A",
    },
    h2: {
      fontWeight: 400,
      fontSize: "32px",
      lineHeight: 1.3,
      color: "#333C4A",
    },
    h3: {
      fontWeight: 400,
      fontSize: "28px",
      lineHeight: 1.4,
      color: "#333C4A",
    },
    h4: {
      fontWeight: 400,
      fontSize: "24px",
      lineHeight: 1.5,
      color: "#333C4A",
    },
    h5: {
      fontWeight: 400,
      fontSize: "20px",
      lineHeight: 1.6,
      color: "#333C4A",
    },
    h6: {
      fontWeight: 400,
      fontSize: "18px",
      lineHeight: 1.7,
      color: "#333C4A",
    },
    body1: {
      fontSize: "16px",
      lineHeight: 1.6,
      color: "#333C4A",
    },
    body2: {
      fontSize: "13px",
      lineHeight: 1.5,
      color: "#333C4A",
    },
    subtitle1: {
      fontSize: "12px",
      color: "#333C4A",
    },
    subtitle2: {
      fontSize: "10px",
      color: "#333C4A",
    },
  },
  spacing: 8,
});

// Export the theme
export default theme;
