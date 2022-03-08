import React from "react";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import "./App.css";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
const App = () => {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
