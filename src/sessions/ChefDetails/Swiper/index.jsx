import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Rating,
  Grid,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ShoppingCart, VerifiedUser } from "@mui/icons-material";
import Slider from "react-slick";
import sliderImage from "../../../assets/today_special_1.png";
import sliderImage2 from "../../../assets/today_special_2.png";

// Don't import CSS here

const foodSlides = [
  {
    id: 1,
    image: sliderImage,
    alt: "Pasta with tomato sauce and basil",
  },
  {
    id: 2,
    image: sliderImage2,
    alt: "Pizza with vegetables",
  },
  {
    id: 3,
    image: sliderImage,
    alt: "Grilled salmon with vegetables",
  },
];

const restaurantInfo = {
  name: "Culinary Craft",
  owner: "John Smith",
  rating: 4.5,
  verified: true,
  workingDays: "Mon - Sun",
  workingHours: "09:00 AM to 05:00 PM",
  profileImage: "https://via.placeholder.com/100",
};

function FoodSlider() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Changed from 5000 to 2000 for 2-second intervals
    pauseOnHover: false, // Prevents pausing on hover
    cssEase: "linear",
    beforeChange: (_, next) => setCurrentSlide(next),
    customPaging: (i) => (
      <Box
        sx={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor:
            i === currentSlide ? "white" : "rgba(255, 255, 255, 0.5)",
          display: "inline-block",
          margin: "0 4px",
        }}
      />
    ),
    dotsClass: "slick-dots custom-dots",
  };

  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      {/* Slider */}
      <Box
        sx={{
          height: { xs: "300px", sm: "350px", md: "400px" },
          "& .slick-slide": { position: "relative" },
          "& .slick-dots": {
            bottom: "25%",
            zIndex: 2,
            "& li": {
              margin: 0,
            },
          },
          zIndex: -1,
        }}
      >
        <Slider {...settings}>
          {foodSlides.map((slide) => (
            <Box
              key={slide.id}
              sx={{
                position: "relative",
                height: { xs: "300px", sm: "350px", md: "400px" },
              }}
            >
              <Box
                component="img"
                src={slide.image}
                alt={slide.alt}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "brightness(0.7)",
                }}
              />
            </Box>
          ))}
        </Slider>
      </Box>

      {/* Restaurant Info Card */}
      <Card
        sx={{
          position: "absolute",
          left: "50%",
          bottom: "-25%",
          transform: "translateX(-50%)",
          width: { xs: "90%", sm: "80%", md: "70%" },
          maxWidth: "550px",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
          zIndex: 10,
        }}
      >
        <CardContent sx={{ p: { xs: 2, md: 3 } }}>
          <Grid container spacing={1} alignItems="center">
            <Grid item xs={3} sm={2}>
              <Avatar
                src={restaurantInfo.profileImage}
                alt={restaurantInfo.owner}
                sx={{
                  width: { xs: 60, sm: 80 },
                  height: { xs: 60, sm: 80 },
                  border: "2px solid white",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
              />
            </Grid>

            <Grid item xs={7} sm={8}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
                <Typography
                  variant={isMobile ? "h6" : "h5"}
                  component="h2"
                  fontWeight="bold"
                >
                  {restaurantInfo.name}
                </Typography>
                {restaurantInfo.verified && (
                  <VerifiedUser
                    sx={{
                      ml: 1,
                      color: "#4CAF50",
                      fontSize: isMobile ? 16 : 20,
                    }}
                  />
                )}
              </Box>

              <Typography variant="body2" color="text.secondary" gutterBottom>
                {restaurantInfo.owner}
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <Rating
                  value={restaurantInfo.rating}
                  precision={0.5}
                  readOnly
                  size={isMobile ? "small" : "medium"}
                  sx={{ color: "#FFA726" }}
                />
                <Typography
                  variant="body2"
                  sx={{ ml: 1, color: "#FFA726", fontWeight: "bold" }}
                >
                  {restaurantInfo.rating}
                </Typography>
              </Box>

              {!isMobile && (
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Working Hours: {restaurantInfo.workingDays} | Timings:{" "}
                    {restaurantInfo.workingHours}
                  </Typography>
                </Box>
              )}

              {isMobile && (
                <Typography variant="caption" color="text.secondary">
                  {restaurantInfo.workingDays}, {restaurantInfo.workingHours}
                </Typography>
              )}
            </Grid>

            <Grid
              item
              xs={2}
              sm={2}
              sx={{ display: "flex", justifyContent: "flex-end" }}
            >
              <IconButton
                sx={{
                  backgroundColor: "#4CAF50",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#388E3C",
                  },
                  width: { xs: 40, sm: 48 },
                  height: { xs: 40, sm: 48 },
                }}
              >
                <ShoppingCart />
              </IconButton>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}

export default FoodSlider;
