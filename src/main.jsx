import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "../globalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage404 from "./ErrorPage/ErrorPage404";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<ErrorPage404 />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
