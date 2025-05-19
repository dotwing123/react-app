// src/components/OtpVerification.jsx
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AppBar from "../../components/CommonComponents/AppBar";
import Footer from "../../components/CommonComponents/Footer";
const Home = () => {
  const navigateTo = useNavigate();
  return (
    <>
      <AppBar />
      <Footer />
    </>
  );
};

export default Home;
