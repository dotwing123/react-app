import React from "react";
import { Box, Grid } from "@mui/material";
import TodaySpecial1 from "../../../assets/today_special_1.png";
import TodaySpecial2 from "../../../assets/today_special_2.png";

export default function TodaySpecial() {
  return (
    <Grid container lg={12} xs={12} sx={{ px: 5, mb: 2 }}>
      <Grid item lg={6} md={12} xs={12}>
        <Box
          component="img"
          src={TodaySpecial1}
          alt="Descriptive alt"
          sx={{
            width: "100%",
            height: "auto",
            borderRadius: 2,
            objectFit: "cover",
          }}
        />
      </Grid>
      <Grid item lg={6} md={12} xs={12}>
        <Box
          component="img"
          src={TodaySpecial2}
          alt="Descriptive alt"
          sx={{
            width: "100%",
            height: "auto",
            borderRadius: 2,
            objectFit: "cover",
          }}
        />
      </Grid>
    </Grid>
  );
}
