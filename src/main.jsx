// src/index.js
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./component/UserContext";
import { GoogleOAuthProvider } from "@react-oauth/google";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="11994211778-t3le3urqoljuj6c4hu5qb1potr7idbc2.apps.googleusercontent.com">
      <UserProvider>
        <Router>
          <App />
        </Router>
      </UserProvider>
    </GoogleOAuthProvider>
  </StrictMode>
);
