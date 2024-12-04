// src/Navbar.jsx

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav style={{ ...navStyle, ...(isScrolled ? scrolledNavStyle : {}) }}>
      <div style={navContainerStyle}>
        <Link to="/" style={waypointStyle}>
          Waypoint
        </Link>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <Link to="/about" style={linkStyle}>
              About
            </Link>
          </li>
          <li style={liStyle}>
            <Link to="/Dashboard" style={linkStyle}>
              Dashboard
            </Link>
          </li>
          {/* <li style={liStyle}>
            <Link to="/services" style={linkStyle}>
              Services
            </Link>
          </li> */}
          <li style={liStyle}>
            <Link to="/contact" style={linkStyle}>
              Contact
            </Link>
          </li>
          <li style={liStyle}>
            <Link to="/faq" style={linkStyle}>
              FAQ
            </Link>
          </li>
          <li style={liStyle}>
            <Link to="/signin" style={buttonStyle}>
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const navStyle = {
  backgroundColor: "#DADED4", // Main color
  padding: "20px",
  position: "fixed",
  width: "100%",
  top: 0,
  transition: "all 0.3s ease-in-out",
  zIndex: 1000,
  borderBottom: "1px solid #39603D", // Border similar to design
};

const scrolledNavStyle = {
  padding: "10px", // Minimize padding
  opacity: 0.8, // Fade out effect
};

const navContainerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
};

const ulStyle = {
  listStyle: "none",
  display: "flex",
  justifyContent: "flex-end", // Align links to the right
  margin: 0,
  padding: 0,
  flex: 1,
};

const liStyle = {
  margin: "0 10px",
};

const waypointStyle = {
  color: "#39603D", // Secondary color
  textDecoration: "none",
  fontWeight: "bold",
  fontFamily: "'Libre Bodoni', serif", // Apply Libre Bodoni font
  fontSize: "24px", // Increase font size for emphasis
};

const linkStyle = {
  color: "#39603D", // Secondary color
  textDecoration: "none",
  fontWeight: "bold",
  fontFamily: "Arial, sans-serif", // Use a different font for other links
  transition: "color 0.3s ease",
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

export default Navbar;
