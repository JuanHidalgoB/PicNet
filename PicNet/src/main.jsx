import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { UsersContextProvider } from "./context/usersContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UsersContextProvider>
      <Router>
        <App />
      </Router>
    </UsersContextProvider>
  </React.StrictMode>
);
