import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Pages/Home/Home";
import Auth from "./component/Pages/Auth/Auth";
import Questions from "./component/Pages/Questions/Questions";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/Welcome" element={<Home />} />
      <Route path="/Auth" element={<Auth />} />
      <Route path="/Questions" element={<Questions />} />
    </Routes>
  );
};

export default AllRoutes;
