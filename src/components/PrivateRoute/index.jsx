// src/components/PrivateRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import Layout from "../Layout";
const PrivateRoute = ({ element: Component, ...rest }) => {
  const isAuthenticated =
    secureLocalStorage.getItem("appTkn") !== null || undefined;
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return <Layout>{Component}</Layout>;
};
export default PrivateRoute;
