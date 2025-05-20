// src/components/Layout.js
import React, { useState } from "react";
import { Box } from "@mui/material";
import Header from "../CommonComponents/AppBar";
import Sidebar from "../CommonComponents/SideBar";
import { useSelector } from "react-redux";
import Footer from "../CommonComponents/Footer";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isLoading = useSelector((state) => state.loader?.loading);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar open={sidebarOpen} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          // pt: 2,
          // pl: 1,
          // //   marginLeft: sidebarOpen ? '240px' : '60px',
          // transition: 'margin-left 0.3s',
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
