import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Age from "./pages/age";
import Inspiring from "./pages/inspiring";
import Home from "./pages/home1";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Age />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
