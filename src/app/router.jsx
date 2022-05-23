import { Routes, Route } from "react-router-dom";
import React from "react";
import SideBar from "../sideBar.jsx";
import Login from "../login";
import Header from "../header";
import FootBar from "../footbar.jsx";
import List from "../list.jsx";
const Router = (props) => {
  return (
    <Routes>
      <Route path="/sideBar" element={<SideBar />} />
      <Route path="/header" element={<Header />} />
      <Route path="/login" element={<Login />} />
      <Route path="/footBar" element={<FootBar />} />
      <Route path="/list" element={<List />} />
    </Routes>
  );
};

export default Router;
