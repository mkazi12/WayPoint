// src/App.jsx

import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./NavBar";

const App = () => {
  return (
    <div>
      <Navbar />
      <div style={homeStyle}>
        <h1>Home Page</h1>
        <h1>Your perfect trip, expertly planned.</h1>
        <p>Your all in one travel companion</p>
        <Link to="/getstarted" style={buttonStyle}>Get Started</Link>
      </div>
    </div>
  );
};

const homeStyle = {
  padding: "50px",
  textAlign: "center",
  minHeight: "200vh", // Add some height to enable scrolling
  backgroundColor: "#DADED4", // Main background color
  fontSize: "30px", // Increase font size for emphasis
};

export default App;

const waypointStyle = {
  color: "#39603D", // Secondary color
  textDecoration: "none",
  fontWeight: "bold",
  fontFamily: "'Libre Bodoni', serif", // Apply Libre Bodoni font
  fontSize: "24px", // Increase font size for emphasis
};

const buttonStyle = {
  backgroundColor: "#39603D",
  color: "#FFFFFF",
  textDecoration: "none",
  fontWeight: "bold",
  padding: "10px 20px",
  borderRadius: "15px",
  fontFamily: "Arial, sans-serif",
  transition: "background-color 0.3s ease",
};