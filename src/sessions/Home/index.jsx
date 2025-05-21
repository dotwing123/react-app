// src/components/OtpVerification.jsx
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CuisineCarousel from "./CuisinesScroller";
import NearbyShopCarousel from "./NearByShops";
import TopRatedChefCarousel from "./TopRatedChef";
import TodaySpecial from "./TodaySpecial";
import HeroSection from "./HeroSection";
import FoodCarousel from "./FoodScroller";
import SaveData from "../../constants/data";
const Home = () => {
  const navigateTo = useNavigate();
  return (
    <>
      <HeroSection />
      <CuisineCarousel />
      <NearbyShopCarousel />
      <TodaySpecial />
      <TopRatedChefCarousel />
      <FoodCarousel />
      <SaveData />
    </>
  );
};

export default Home;
