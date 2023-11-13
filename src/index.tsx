import React from "react";
import ReactDOM from "react-dom/client";

import "@/common/assets/styles/index.css";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "@/common/theme";
import "@/common/i18n";

import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
