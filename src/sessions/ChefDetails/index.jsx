import React from "react";
import Swiper from "./Swiper";
import TabList from "./TabList";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Grid } from "@mui/material";
export default function ChefDetails() {
  return (
    <Grid container px={5}>
      <Swiper />
      <TabList />
      {/* <Swiper /> */}
    </Grid>
  );
}
