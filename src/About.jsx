import React from "react";
import Navbar from "./NavBar";
import "./about.css"; // Import the CSS file

const About = () => {
  return (
    <div className="about-page">
      <Navbar />
      <div className="about-container">
        <div className="about-content">
          <h1>Your ideal Travel Planner</h1>
          <p>
            Your all in one travel planner. Do you want to go on a vacation? Do
            you want to meetup with friends somewhere, do you want to explore
            attractions at a country. <strong>WayPoint</strong> has the ability
            to make your travels convenient as you would like.
          </p>
          <h2>Why WayPoint?</h2>
          <p>
            Our objective is to make your travels easier, we want to save YOU
            the hassle of having to call hotels for vacancy, to look for
            restaurants that cost a lot of money, to overpay for a vacation
            beyond your budget.
          </p>
        </div>
        <div className="about-logo">
          <h1>W</h1>
        </div>
      </div>
    </div>
  );
};

export default About;
