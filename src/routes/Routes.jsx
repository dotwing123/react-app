import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";
import App from "../App";
import NewPassword from "../sessions/Auth/NewPassword";
import ForgotPassword from "../sessions/Auth/ForgotPassword";
import OtpVerification from "../sessions/Auth/OtpVerification";
import PrivateRoute from "../components/PrivateRoute";
import Home from "../sessions/Home";
import Cuisines from "../sessions/Cuisines";
import Chefs from "../sessions/Chefs";
import Dashboard from "../components/Dashboard";

const LoadingFallback = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <CircularProgress />
  </Box>
);

const AppRoutes = () => {
  return (
    <Box>
      <Router>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            {/* DELETE AFTER DEVELOPMENT */}
            <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
            {/* DELETE AFTER DEVELOPMENT */}

            <Route path="/" element={<App />} />
            <Route path="/verifyotp" element={<OtpVerification />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/createpassword" element={<NewPassword />} />
            <Route path="/home" element={<PrivateRoute element={<Home />} />} />
            <Route
              path="/home/cuisines"
              element={<PrivateRoute element={<Cuisines />} />}
            />
            <Route
              path="/home/chefs"
              element={<PrivateRoute element={<Chefs />} />}
            />
          </Routes>
        </Suspense>
      </Router>
    </Box>
  );
};

export default AppRoutes;
