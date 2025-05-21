import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import CardComponent from "../../components/CommonComponents/Card";
import SearchIcon from "@mui/icons-material/Search";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import { useSelector } from "react-redux";
export default function Chefs() {
  const chefs = useSelector((state) => state?.sampleData?.chefs);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
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
            width: { xs: "70%", sm: "30%", lg: "40%" },
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
        {chefs.map((item, idx) => (
          <Box key={idx} sx={{ flexShrink: 0, pl: 1 }}>
            <CardComponent data={item} />
          </Box>
        ))}
        {chefs.map((item, idx) => (
          <Box key={idx} sx={{ flexShrink: 0, pl: 1 }}>
            <CardComponent data={item} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
