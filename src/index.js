import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

import "./index.css";
import App from "./App";
import { store } from "./app/store";

import "./i18n/i18n";

const theme = createTheme({
  palette: {
    background: {
      default: "rgb(245, 245, 245)",
      paper: "rgb(245, 245, 245)",
    },
    primary: {
      main: "rgb(1, 113, 217)", // just borrowed this color :D
    },
    secondary: {
      main: "#ff1744",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
