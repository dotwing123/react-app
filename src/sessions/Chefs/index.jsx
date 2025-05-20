import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import CardComponent from "../../components/CommonComponents/Card";
import SearchIcon from "@mui/icons-material/Search";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import { nearByShops } from "../../constants/data";
export default function Chefs() {
  return (
    <Box sx={{ px: 5, py: 4 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 2,
        }}
      >
        <Typography
          variant="h5"
          fontSize={"22px"}
          component="h2"
          fontWeight="600"
        >
          Chefs
        </Typography>
        <TextField
          placeholder="Search"
          variant="outlined"
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
            sx: {
              bgcolor: "white",
              borderRadius: 1,
              py: 0.5,
              height: 48,
              "& fieldset": {
                borderColor: "#CBCBCB",
              },
            },
          }}
          sx={{
            width: { xs: "100%", sm: "60%", lg: "40%" },
          }}
        />
        {/* <IconButton>
            <TuneOutlinedIcon />
          </IconButton> */}
      </Box>

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
