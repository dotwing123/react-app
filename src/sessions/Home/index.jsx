// src/components/OtpVerification.jsx
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AppBar from "../../components/CommonComponents/AppBar";
import Footer from "../../components/CommonComponents/Footer";
import Dashboard from "../../components/Dashboard";
const Home = () => {
  const navigateTo = useNavigate();
  return (
    <>
      <AppBar />
      <Dashboard />
      <Footer />
    </>
  );
};

export default Home;
