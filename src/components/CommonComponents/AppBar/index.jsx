"use client";

import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Avatar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Menu as MenuIcon,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Logo from "../../../assets/dashboardLogo.png";
import Sidebar from "../SideBar";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigateTo = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* AppBar */}
      <AppBar
        position="fixed"
        color="default"
        elevation={1}
        sx={{ bgcolor: "#fff", height: 100, justifyContent: "center" }}
      >
        <Toolbar>
          {/* Hamburger Menu */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => toggleDrawer(true)}
            sx={{
              mr: isMobile || isTablet ? 1 : 2,
              ml: isMobile || isTablet ? 0 : 3,
            }}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo */}
          <img
            src={Logo}
            width={isMobile ? 140 : isTablet ? 180 : 260}
            height={isMobile ? 40 : 70}
          />

          {/* Spacer */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Navigation Items */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              gap: 3,
              cursor: "pointer",
            }}
          >
            <Box
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
              onClick={() => navigateTo("/home/chefs")}
            >
              <RestaurantIcon color="action" />
              <Typography variant="body1" color="text.primary">
                Chefs
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                cursor: "pointer",
              }}
              onClick={() => navigateTo("/home/cuisines")}
            >
              <MenuBookIcon sx={{ color: "success.main" }} />
              <Typography variant="body1" color="success.main">
                Cuisines
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <LocalOfferIcon color="action" />
              <Typography variant="body1" color="text.primary">
                Offers
              </Typography>
            </Box>

            <Box
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
              onClick={() => navigateTo("/home/cart")}
            >
              <ShoppingBagIcon color="action" />
              <Typography variant="body1" color="text.primary">
                Cart
              </Typography>
            </Box>
          </Box>

          {/* User Profile */}
          <Box sx={{ display: "flex", alignItems: "center", ml: 3 }}>
            <Avatar sx={{ width: 32, height: 32, bgcolor: "grey.400" }}>
              JM
            </Avatar>
            <Typography
              variant="body1"
              sx={{ ml: 1, display: { xs: "none", md: "block" } }}
            >
              John Michael
            </Typography>
            <ExpandMoreIcon sx={{ ml: 0.5 }} />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
      <Sidebar open={drawerOpen} onClose={() => toggleDrawer(false)} />
    </Box>
  );
};

export default Header;
