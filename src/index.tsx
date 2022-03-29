import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { App } from "./pages";
import "@fontsource/open-sans";
import "macro-css";
import "./assets/styles/globals.scss";

ReactDOM.render(
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <App />
  </div>,
  document.getElementById("root"),
);

reportWebVitals();
