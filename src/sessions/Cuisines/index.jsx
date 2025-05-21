import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import CardComponent from "../../components/CommonComponents/Card";
import { useSelector } from "react-redux";

export default function Cuisines() {
  const nearByShops = useSelector((state) => state?.sampleData?.nearbyShops);

  return (
    <Box sx={{ px: { xs: 2, sm: 3, md: 5 }, py: { xs: 2, sm: 3, md: 4 } }}>
      {/* Back Button + Breadcrumb */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: 2,
        }}
      >
        <IconButton sx={{ ml: -1 }}>
          <KeyboardArrowLeftOutlinedIcon />
        </IconButton>
        <Typography variant="body1" sx={{ ml: 1 }}>
          Home / Near You
        </Typography>
      </Box>

      {/* Heading */}
      <Typography
        variant="h5"
        fontSize={{ xs: "18px", sm: "20px", md: "22px" }}
        fontWeight="600"
        mb={2}
      >
        Near You
      </Typography>

      {/* Cards Container */}
      <Box
        sx={{
          display: "flex",
          flexWrap: { xs: "nowrap", sm: "wrap" },
          gap: 2,
          overflowX: { xs: "auto", sm: "visible" },
          pb: 2,
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
        }}
      >
        {nearByShops?.map((item, idx) => (
          <Box
            key={idx}
            sx={{
              flex: {
                xs: "0 0 auto",
                sm: "1 1 calc(50% - 16px)",
                md: "1 1 calc(33.33% - 16px)",
              },
              minWidth: { xs: "280px", sm: "auto" },
            }}
          >
            <CardComponent data={item} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
