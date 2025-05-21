"use client";

import { useRef, useState, useEffect } from "react";
import {
  Box,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CuisineCard from "../../../components/CommonComponents/CircleCard";
import { useSelector } from "react-redux";

const CuisineCarousel = () => {
  const theme = useTheme();
  const cuisines = useSelector((state) => state?.sampleData?.cuisines);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollAmount = 230; // Width of each card + margin

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10); // 10px buffer
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      handleScroll(); // Check initial state
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -230 : 230;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const getVisibleItems = () => {
    if (isMobile) return 1;
    if (useMediaQuery(theme.breakpoints.down("md"))) return 2;
    if (useMediaQuery(theme.breakpoints.down("lg"))) return 3;
    return 5;
  };

  return (
    <Box sx={{ width: "100%", my: 2, px: 5 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          //   mb: 2,
          px: { xs: 2, md: 0 },
        }}
      >
        <Typography
          variant="h5"
          fontSize={"22px"}
          component="h2"
          fontWeight="600"
        >
          Cuisines
        </Typography>
        <Box>
          <IconButton
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            sx={{
              bgcolor: canScrollLeft ? "white" : "grey.200",
              "&:hover": {
                bgcolor: "white",
              },
              transition: "all 0.3s ease",
            }}
          >
            <ArrowBackIcon />
          </IconButton>
          <IconButton
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            sx={{
              bgcolor: canScrollRight ? "white" : "grey.200",
              "&:hover": {
                bgcolor: "white",
              },
              transition: "all 0.3s ease",
            }}
          >
            <ArrowForwardIcon />
          </IconButton>
        </Box>
      </Box>

      <Box
        ref={scrollContainerRef}
        sx={{
          display: "flex",
          gap: 8,
          alignItems: "center",
          justifyContent: "space-around",
          overflowX: "auto",
          scrollbarWidth: "none", // Firefox
          "&::-webkit-scrollbar": { display: "none" }, // Chrome
          px: { xs: 2, md: 0 },
          py: 2,
        }}
      >
        {cuisines.map((cuisine) => (
          <Box key={cuisine.id} sx={{ flexShrink: 0, pl: 1 }}>
            <CuisineCard image={cuisine.image} title={cuisine.title} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CuisineCarousel;
