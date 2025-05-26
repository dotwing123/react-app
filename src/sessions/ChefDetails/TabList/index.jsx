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
import TabList from "../../../components/CommonComponents/TabList";

const FoodCategories = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const foodCategoriesData = useSelector(
    (state) => state?.sampleData?.chefFoods
  );
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
      <TabList
        renderData={foodCategoriesData?.cuisines}
        renderName={"name"}
        renderCount={"count"}
        onClick={(index) => {
          setSelectedCuisine(index);
          setCategories(foodCategoriesData.cuisines[index].categories);
        }}
        selectedIdx={selectedCuisine}
      />
      <Grid container spacing={4} justifyContent={"space-between"}>
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
