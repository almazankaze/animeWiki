import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

import App from "./App";
import { AppProvider } from "./context";

import "./reset.css";
import "./index.css";

const container = document.getElementById("root");

const store = configureStore({ reducer: rootReducer });

// Create a root.
const root = ReactDOM.createRoot(container);

// Initial render
root.render(
  <Provider store={store}>
    <AppProvider>
      <App />
    </AppProvider>
  </Provider>
);
