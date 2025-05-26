import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Avatar,
  Chip,
  Button,
  Grid,
  Card,
  CardContent,
  Checkbox,
  Breadcrumbs,
  Link,
  useTheme,
  useMediaQuery,
  TextField,
  InputAdornment,
} from "@mui/material";
import { NavigateNext } from "@mui/icons-material";
import menuData from "./data";
import Cuisine from "../../components/CommonComponents/Cusinins";
import SearchIcon from "@mui/icons-material/Search";
import TabList from "../../components/CommonComponents/TabList";

const CuisineDetails = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("appetizers");
  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemSelect = (itemId) => {
    setSelectedItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  const currentMenuItems = menuData.menuItems[selectedCategory] || [];

  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      {/* Breadcrumb */}
      <Breadcrumbs
        separator={<NavigateNext fontSize="small" />}
        sx={{ mb: 3 }}
        aria-label="breadcrumb"
      >
        <Link
          underline="hover"
          color="inherit"
          href="/home"
          sx={{ display: "flex", alignItems: "center" }}
        >
          Home
        </Link>
        <Link underline="hover" color="inherit" href="/home/cuisines">
          Cuisines
        </Link>
        <Typography color="text.primary">Italian</Typography>
      </Breadcrumbs>
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
          width: { xs: "100%", sm: "100%", lg: "100%" },
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
          my: 1,
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <TabList
          renderData={menuData.restaurant.categories}
          renderName={"name"}
          renderCount={"count"}
          onClick={(index, data) => {
            setSelectedIdx(index);
            setSelectedCategory(data?.id);
          }}
          selectedIdx={selectedIdx}
        />
      </Box>
      {/* <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Avatar
              src={menuData.restaurant.image}
              alt={menuData.restaurant.name}
              sx={{ width: 60, height: 60, mr: 2 }}
            />
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography variant="h5" fontWeight="bold">
                  {menuData.restaurant.name}
                </Typography>
                <Chip
                  label={menuData.restaurant.status}
                  size="small"
                  sx={{
                    backgroundColor: "#4CAF50",
                    color: "white",
                    fontSize: "0.75rem",
                  }}
                />
              </Box>
              <Typography variant="body2" color="text.secondary">
                {menuData.restaurant.owner}
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
            {menuData.restaurant.categories.map((category) => (
              <Chip
                key={category.id}
                label={`${category.name} (${category.count})`}
                onClick={() => setSelectedCategory(category.id)}
                sx={{
                  backgroundColor:
                    selectedCategory === category.id ? "#4CAF50" : "#e9ecef",
                  color: selectedCategory === category.id ? "white" : "#495057",
                  "&:hover": {
                    backgroundColor:
                      selectedCategory === category.id ? "#43a047" : "#dee2e6",
                  },
                }}
              />
            ))}
          </Box>

          <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#4CAF50",
                "&:hover": { backgroundColor: "#43a047" },
                borderRadius: "8px",
              }}
            >
              Order Now
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: "#4CAF50",
                color: "#4CAF50",
                "&:hover": {
                  borderColor: "#43a047",
                  backgroundColor: "rgba(76, 175, 80, 0.04)",
                },
                borderRadius: "8px",
              }}
            >
              Schedule for Later
            </Button>
          </Box>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
            {menuData.restaurant.cuisines.map((cuisine) => (
              <Chip
                key={cuisine.id}
                label={`${cuisine.name} (${cuisine.count})`}
                onClick={() => setSelectedCuisine(cuisine.id)}
                sx={{
                  backgroundColor:
                    selectedCuisine === cuisine.id ? "#4CAF50" : "#e9ecef",
                  color: selectedCuisine === cuisine.id ? "white" : "#495057",
                  borderRadius: "20px",
                  "&:hover": {
                    backgroundColor:
                      selectedCuisine === cuisine.id ? "#43a047" : "#dee2e6",
                  },
                }}
              />
            ))}
          </Box>
        </Grid>
      </Grid> */}

      {/* Menu Items */}
      <Grid container spacing={2}>
        {currentMenuItems.map((item) => (
          <Grid item lg={12}>
            <Cuisine data={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CuisineDetails;
