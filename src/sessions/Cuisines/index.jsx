import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import CardComponent from "../../components/CommonComponents/Card";
import { nearByShops } from "../../constants/data";
export default function Cuisines() {
  return (
    <Box sx={{ px: 5, py: 4 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: 2,
        }}
      >
        <IconButton sx={{ ml: -2 }}>
          <KeyboardArrowLeftOutlinedIcon />
        </IconButton>
        <Typography>Home / Near You</Typography>
      </Box>
      <Typography
        variant="h5"
        fontSize={"22px"}
        component="h2"
        fontWeight="600"
      >
        Near You
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          alignItems: "center",
          justifyContent: "space-around",
          overflowX: "auto",
          scrollbarWidth: "none", // Firefox
          px: { xs: 2, md: 0 },
        }}
      >
        {nearByShops.map((item, idx) => (
          <Box key={idx} sx={{ flexShrink: 0, pl: 1 }}>
            <CardComponent data={item} />
          </Box>
        ))}
        {nearByShops.map((item, idx) => (
          <Box key={idx} sx={{ flexShrink: 0, pl: 1 }}>
            <CardComponent data={item} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
