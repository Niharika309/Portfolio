import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import NiharikaPortfolio from "./App.jsx";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <NiharikaPortfolio />
    </ThemeProvider>
  </React.StrictMode>
);
