import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Age from "./pages/age";
import Inspiring from "./pages/inspiring";
import Classisicm from "./pages/classicism"
import Artnov from "./pages/artnov";
import Home from "./pages/home1";
import Impressionism from "./pages/impressionism"
import Suprematism from "./pages/suprematism";
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
          <Route path="/classicism" element={<Classisicm />} />
          <Route path="/artnouveau" element={<Artnov />} />
          <Route path="/suprematism" element={<Suprematism />} />
        </Routes>
      ) : (
        <PortraitContent />
      )}
    </Router>
  );
}

export default App;
