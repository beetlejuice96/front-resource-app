import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import ErrorProvider from "./providers/errorProvider/ErrorProvider";

const themeCustom = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1400,
    },
  },
  titleSecond: {
    fontSize: "2.5rem !important",
    color: "#1d1d1d",
    fontWeight: "1000 !important",
    lineHeight: "55px !important",
  },
} as const;

export type CustomTheme = {
  [Key in keyof typeof themeCustom]: typeof themeCustom[Key];
};

declare module "@mui/material/styles/createTheme" {
  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
}

const theme = createTheme(themeCustom);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ErrorProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ErrorProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
