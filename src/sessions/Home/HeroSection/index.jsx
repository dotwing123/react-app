import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Container,
  Menu,
  MenuItem,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HeroImage from "../../../assets/dashboard_banner.png";

// Sample locations
const locations = [
  { id: 1, name: "New York, NY" },
  { id: 2, name: "Los Angeles, CA" },
  { id: 3, name: "Chicago, IL" },
];

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [selectedLocation, setSelectedLocation] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleLocationClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLocationSelect = (locationName) => {
    setSelectedLocation(locationName);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "500px", md: "520px" },
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* Background Image with Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${HeroImage}), linear-gradient(#333, #111)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: 1,
          },
        }}
      />

      {/* Content */}
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          px: { xs: 2, sm: 4 },
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          color="white"
          sx={{
            fontWeight: 600,
            fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3.25rem" },
            mb: 2,
            maxWidth: "800px",
          }}
        >
          Discover the best food & drinks, order delivery near you
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "stretch",
            width: "100%",
            maxWidth: "800px",
            mt: 4,
            gap: { xs: 2, sm: 2 },
          }}
        >
          {/* Location Selector */}
          <Button
            variant="outlined"
            aria-label="Select your location"
            onClick={handleLocationClick}
            endIcon={<KeyboardArrowDownIcon />}
            startIcon={<LocationOnOutlinedIcon />}
            sx={{
              bgcolor: "white",
              color: "text.primary",
              borderColor: "divider",
              borderRadius: 1,
              py: 1.5,
              px: 2,
              justifyContent: "space-between",
              textTransform: "none",
              width: { xs: "100%", sm: "40%" },
              height: 62,
              "&:hover": {
                bgcolor: "white",
                borderColor: "primary.main",
              },
            }}
          >
            {selectedLocation || "Enter your delivery location"}
          </Button>

          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              sx: {
                width: isMobile ? "90%" : "40%",
                maxWidth: "400px",
              },
            }}
          >
            {locations.map((location) => (
              <MenuItem
                key={location.id}
                onClick={() => handleLocationSelect(location.name)}
              >
                <LocationOnOutlinedIcon sx={{ mr: 1, color: "primary.main" }} />
                {location.name}
              </MenuItem>
            ))}
          </Menu>

          {/* Search Field */}
          <TextField
            aria-label="Search"
            placeholder="Search for restaurant, item or more"
            variant="outlined"
            fullWidth
            sx={{
              bgcolor: "white",
              borderRadius: 1,
              height: 62,
              "& .MuiOutlinedInput-root": {
                height: "100%",
                "& fieldset": {
                  borderColor: "divider",
                },
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
