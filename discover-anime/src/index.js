import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { AppProvider } from "./context";

import "./App.css";

const container = document.getElementById("root");

// Create a root.
const root = ReactDOM.createRoot(container);

// Initial render
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
