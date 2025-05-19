"use client";

import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Button,
  Container,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  ChevronRight as ChevronRightIcon,
  ExpandMore as ExpandMoreIcon,
  Logout as LogoutIcon,
  Settings as SettingsIcon,
  Share as ShareIcon,
  Feedback as FeedbackIcon,
} from "@mui/icons-material";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ReceiptIcon from "@mui/icons-material/Receipt";
import Logo from "../../../assets/dashboardLogo.png";
import Sidebar from "../SideBar";
const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* AppBar */}
      <AppBar
        position="static"
        color="default"
        elevation={1}
        sx={{ bgcolor: "#fff", height: 100, justifyContent: "center" }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => toggleDrawer(true)}
            sx={{ mr: 2, ml: 3 }}
          >
            <MenuIcon />
          </IconButton>
          <img src={Logo} width={260} height={70} />
          <Box sx={{ flexGrow: 1 }} />

          {/* Navigation Items */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <RestaurantIcon color="action" />
              <Typography
                variant="body1"
                color="text.primary"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                Chefs
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <MenuBookIcon sx={{ color: "success.main" }} />
              <Typography
                variant="body1"
                color="success.main"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                Cuisines
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <LocalOfferIcon color="action" />
              <Typography
                variant="body1"
                color="text.primary"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                Offers
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <ShoppingBagIcon color="action" />
              <Typography
                variant="body1"
                color="text.primary"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
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

      {/* Main Content */}
      <Container>
        <Box sx={{ mt: 4, mb: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Welcome to Food Delivery
          </Typography>
          <Typography variant="body1">
            Click the menu icon in the top left to open the sidebar.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
