import { ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes/Routes.jsx";
import "./index.css";
import theme from "./theme.js";
import { Provider } from "react-redux";
import store from "./store/store.js";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
