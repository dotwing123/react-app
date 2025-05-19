"use client";

import { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  IconButton,
  Button,
  Collapse,
} from "@mui/material";
import {
  Close as CloseIcon,
  ChevronRight as ChevronRightIcon,
  ExpandMore as ExpandMoreIcon,
  Logout as LogoutIcon,
  Settings as SettingsIcon,
  Share as ShareIcon,
  Feedback as FeedbackIcon,
  Info as InfoIcon,
  QuestionAnswer as QuestionAnswerIcon,
  ContactSupport as ContactSupportIcon,
} from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ReceiptIcon from "@mui/icons-material/Receipt";

const menuItems = [
  {
    title: "My Account",
    icon: <PersonIcon color="action" />,
  },
  {
    title: "Favorites",
    icon: <FavoriteIcon color="action" />,
  },
  {
    title: "My Order",
    icon: <ReceiptIcon color="action" />,
  },
  {
    title: "Help",
    icon: <SettingsIcon color="action" />,
    collapsible: true,
    subItems: [
      {
        title: "About",
        icon: <InfoIcon color="action" />,
      },
      {
        title: "FAQs",
        icon: <QuestionAnswerIcon color="action" />,
      },
      {
        title: "Support",
        icon: <ContactSupportIcon color="action" />,
      },
    ],
  },
  {
    title: "Share App",
    icon: <ShareIcon color="action" />,
  },
  {
    title: "Send Feedback",
    icon: <FeedbackIcon color="action" />,
  },
];

const Sidebar = ({ open, onClose }) => {
  const [expandedMenus, setExpandedMenus] = useState({ Help: false });

  const toggleCollapse = (title) => {
    setExpandedMenus((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: "100%",
          maxWidth: 400,
          bgcolor: "background.paper",
        },
      }}
    >
      {/* Drawer Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2,
          bgcolor: "#E2E1E866",
        }}
      >
        <IconButton style={{ visibility: "hidden" }}>
          <CloseIcon sx={{ color: "text.secondary" }} />
        </IconButton>
        <Typography variant="h6" fontWeight={700}>
          Menu
        </Typography>
        <IconButton onClick={onClose}>
          <CloseIcon
            sx={{
              color: "#fff",
              backgroundColor: "#000",
              borderRadius: 6,
            }}
          />
        </IconButton>
      </Box>

      {/* Menu Items */}
      <List sx={{ pt: 2, pb: 2 }}>
        {menuItems.map((item, index) => (
          <Box key={index}>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => item.collapsible && toggleCollapse(item.title)}
                sx={{
                  py: 1.5,
                  mx: 2,
                  boxShadow: "1px 3px 3px rgba(0, 0, 0, 0.08)",
                  borderRadius: "6px",
                  mb: 1,
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText
                  primary={item.title}
                  primaryTypographyProps={{
                    fontWeight: 500,
                    fontSize: 13,
                  }}
                />
                {item.collapsible ? (
                  expandedMenus[item.title] ? (
                    <ExpandMoreIcon color="action" />
                  ) : (
                    <ChevronRightIcon color="action" />
                  )
                ) : (
                  <ChevronRightIcon color="action" />
                )}
              </ListItemButton>
            </ListItem>

            {/* Collapsible Sub Items */}
            {item.collapsible && item.subItems && (
              <Collapse
                in={expandedMenus[item.title]}
                timeout="auto"
                unmountOnExit
              >
                <Box
                  sx={{
                    bgcolor: "#f5f5f5",
                    mx: 2,
                    mb: 1,
                    boxShadow: "1px 3px 3px rgba(0, 0, 0, 0.08)",
                    borderRadius: "6px",
                  }}
                >
                  {item.subItems.map((subItem, subIndex) => (
                    <ListItem disablePadding key={subIndex}>
                      <ListItemButton sx={{ py: 1.5 }}>
                        <ListItemIcon>{subItem.icon}</ListItemIcon>
                        <ListItemText
                          primary={subItem.title}
                          primaryTypographyProps={{
                            fontWeight: 500,
                            fontSize: 13,
                          }}
                        />
                        <ChevronRightIcon color="action" />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </Box>
              </Collapse>
            )}
          </Box>
        ))}
      </List>

      {/* Logout Button */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 2,
          position: "absolute",
          bottom: 20,
          width: "100%",
        }}
      >
        <Button
          variant="outlined"
          startIcon={<LogoutIcon />}
          sx={{
            borderRadius: 28,
            px: 6,
            py: 1.5,
            textTransform: "none",
            borderColor: "success.main",
            color: "success.main",
            "&:hover": {
              borderColor: "success.dark",
              bgcolor: "transparent",
            },
          }}
        >
          Logout
        </Button>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
