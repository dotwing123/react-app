import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import theme from "../../theme";
const AuthLeftSection = ({
  content1,
  content2,
  description,
  bannerImg,
  isCovered,
}) => {
  return (
    <div
      style={{
        backgroundSize: isCovered ? "cover" : "contain",
        backgroundPosition: "center",
        backgroundImage: `url(${bannerImg})`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingLeft: 36,
        color: "white",
        height: "100%",
      }}
    >
      <Typography
        variant="h1"
        component="h1"
        color={"#fff"}
        fontWeight={400}
        letterSpacing={1}
      >
        {content1}
      </Typography>
      <Typography
        variant="h1"
        component="h1"
        color={"#fff"}
        fontWeight={400}
        letterSpacing={1}
        gutterBottom
      >
        {content2}
      </Typography>
      <Typography
        variant="h1"
        fontSize={48}
        component="h1"
        fontWeight={600}
        sx={{ color: theme.palette.primary.main, mb: 4 }}
      >
        {description}
      </Typography>
      <Box sx={{ display: "flex", gap: 1, ml: 2 }}>
        <Box
          sx={{ width: 12, height: 5, bgcolor: "white", borderRadius: 3 }}
        ></Box>
        <Box
          sx={{ width: 26, height: 5, bgcolor: "#5cb85c", borderRadius: 3 }}
        ></Box>
        <Box
          sx={{ width: 12, height: 5, bgcolor: "white", borderRadius: 3 }}
        ></Box>
      </Box>
    </div>
  );
};

export default AuthLeftSection;
