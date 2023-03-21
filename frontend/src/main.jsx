import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./contexts/ContextProvider";

import App from "./App";
import "./index.css";

axios.defaults.baseURL = "https://expense-tracker-api-delta.vercel.app/"
// axios.defaults.baseURL = "http://localhost:8090";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>
);
