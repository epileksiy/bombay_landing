import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Age from "./pages/age";
import Inspiring from "./pages/inspiring";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Age />} />
        <Route path="/inspiring" element={<Inspiring />} />
      </Routes>
    </Router>
  );
}

export default App;
