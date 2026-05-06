import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { TaxProvider } from "./context/TaxContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <TaxProvider>
        <App />
      </TaxProvider>
    </BrowserRouter>
  </React.StrictMode>
);
