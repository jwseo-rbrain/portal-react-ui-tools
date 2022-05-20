import { Routes, Route } from "react-router-dom";
import React from "react";
import App from "../app.jsx";
import Login from "../login";
const Router = (props) => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Router;
