
import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <Router>
        <App />
      </Router>
    </NextUIProvider>
  </React.StrictMode>
);
