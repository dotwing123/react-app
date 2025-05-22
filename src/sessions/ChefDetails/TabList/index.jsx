"use client";

import { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Tabs,
  Tab,
  Typography,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SquareCard from "../../../components/CommonComponents/SquareCard";
import dish from "../../../assets/dish.png";
import { useSelector } from "react-redux";

const FoodCategories = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const foodCategoriesData = useSelector(
    (state) => state?.sampleData?.chefFoods
  );
  console.log("foodCategoriesData", foodCategoriesData);
  const [selectedCuisine, setSelectedCuisine] = useState(0);
  const [categories, setCategories] = useState([]);

  // Initialize with the first cuisine's categories
  useEffect(() => {
    if (foodCategoriesData.cuisines && foodCategoriesData.cuisines.length > 0) {
      setCategories(foodCategoriesData.cuisines[0].categories);
    }
  }, []);

  const handleCuisineChange = (event, newValue) => {
    setSelectedCuisine(newValue);
    setCategories(foodCategoriesData.cuisines[newValue].categories);
  };

  // Function to handle image errors by replacing with default image
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = dish;
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 10, py: 4 }}>
      <Box
        sx={{
          width: "100%",
          my: 4,
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 1,
        }}
      >
        {foodCategoriesData.cuisines.map((cuisine, index) => (
          <Box
            key={cuisine.id}
            onClick={() => {
              setSelectedCuisine(index);
              setCategories(foodCategoriesData.cuisines[index].categories);
            }}
            sx={{
              backgroundColor:
                selectedCuisine === index ? "#4CAF50" : "#e9ecef",
              color: selectedCuisine === index ? "white" : "#495057",
              borderRadius: "30px",
              padding: "10px 20px",
              cursor: "pointer",
              fontWeight: 500,
              transition: "all 0.2s ease",
              "&:hover": {
                backgroundColor:
                  selectedCuisine === index ? "#43a047" : "#dee2e6",
              },
              minWidth: "120px",
              textAlign: "center",
            }}
          >
            {cuisine.name} {cuisine.count && `(${cuisine.count})`}
          </Box>
        ))}
      </Box>

      <Grid container spacing={3}>
        {categories.map((category) => (
          <Grid item xs={6} sm={4} md={3} key={category.id}>
            <SquareCard name={category.name} image={dish} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FoodCategories;
