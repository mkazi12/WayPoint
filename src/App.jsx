// src/App.jsx

import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./NavBar";

const App = () => {
  return (
    <div style={rootStyle}>
      <Navbar/>
      <div style={homeStyle}>
        <h1>Waypoint</h1>
        <h1>Your perfect trip, expertly planned.</h1>
        <p>Your all in one travel companion</p>
        <Link to="/getstarted" style={buttonStyle}>Get Started</Link>
      </div>
    </div>
  );
};

// New root style to reset margins and padding
const rootStyle = {
  margin: 0,
  padding: 0,
  minHeight: "100vh",
  width: "100%",
  backgroundColor: "#DADED4",
  overflowX: "hidden", // Prevent horizontal scrolling
};

const homeStyle = {
  padding: "50px",
  textAlign: "center",
  minHeight: "200vh",
  fontSize: "30px",
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
  display: "inline-block", // Ensure proper button spacing
};

export default App;