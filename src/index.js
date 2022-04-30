import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/ListPage";
import Firstpage from "./pages/HomePage/firstpage.js";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Firstpage />} />
      <Route path="/list" element={<Home />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
