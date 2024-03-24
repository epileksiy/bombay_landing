import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Age from "./pages/age";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Age />} />
      </Routes>
    </Router>
  );
}

export default App;
