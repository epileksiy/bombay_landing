import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Age from "./pages/age";
import Inspiring from "./pages/inspiring";
import Home from "./pages/home1";
import Impressionism from "./pages/impressionism"
import Impressionism_coctail from "./pages/impressionism_coctail";
import { useOrientation } from "react-use";
import PortraitContent from "./pages/portrait_view";

function App() {
  const { type } = useOrientation();
  return (
    <Router>
      {type === "portrait-primary" ? (
        <Routes>
          <Route path="/" element={<Age />} />
          <Route path="/home" element={<Home />} />
          <Route path="/impressionism" element={<Impressionism />} />
          <Route
            path="/impressionism_coctail"
            element={<Impressionism_coctail />}
          />
        </Routes>
      ) : (
        <PortraitContent />
      )}
    </Router>
  );
}

export default App;
