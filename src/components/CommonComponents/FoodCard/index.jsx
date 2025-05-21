"use client";

import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  IconButton,
  Rating,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import FoodImage from "../../../assets/food.png";
export default function FoodCard(props) {
  const { title, price, cuisine, description, rating, imageUrl } = props?.data;
  const [favorite, setFavorite] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Card
      sx={{
        maxWidth: isMobile ? 280 : 326,
        borderRadius: "6px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        overflow: "hidden",
      }}
    >
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="200"
          image={FoodImage}
          alt={title}
          sx={{ borderRadius: "6px" }}
        />
        <IconButton
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            color: "white",
            backgroundColor: "rgba(0,0,0,0.2)",
            "&:hover": {
              backgroundColor: "rgba(0,0,0,0.3)",
            },
          }}
          onClick={() => setFavorite(!favorite)}
        >
          {favorite ? <Favorite /> : <FavoriteBorder />}
        </IconButton>
      </Box>
      <CardContent sx={{ p: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: 1,
          }}
        >
          <Typography variant="h5" component="div" fontWeight="bold">
            {title}
          </Typography>
          <Typography variant="h5" fontWeight="bold">
            {price}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: 1,
          }}
        >
          <Typography variant="body1" color="text.secondary" gutterBottom>
            {cuisine}
          </Typography>

          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              backgroundColor: "#FFB74D",
              borderRadius: 1,
              px: 1,
              py: 0.5,
              mb: 2,
            }}
          >
            <Rating
              value={1}
              max={1}
              readOnly
              sx={{
                color: "white",
                mr: 0.5,
                "& .MuiRating-iconFilled": {
                  color: "white",
                },
              }}
            />
            <Typography variant="body2" fontWeight="medium" color="white">
              {rating}
            </Typography>
          </Box>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
