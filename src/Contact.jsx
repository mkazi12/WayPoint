// src/Contact.jsx

import React from "react";
import Navbar from "./NavBar";
import CForm from "./ContactForm";
import { Form } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div style={pageStyle}>
        <h1>Contact Us!</h1>
        <h8>At Waypoint, we’re passionate about helping you craft the perfect journey. Whether you’re planning your next adventure or need help with an existing itinerary, we’re here to assist you every step of the way.
        </h8>
        <CForm/>
      </div>
    </>
    
  );
};


const FormStyle={
  position: 'relative', // Position relative to layer form elements
  maxWidth: '500px', // Set a maximum width for the form container
  margin: 'auto', // Center the form container
  padding: '250px', // Add padding around the form container
  backgroundColor: '#E6E9E0', // Set a background color for the form container
  borderRadius: '20px', // Round the corners of the form container
  boxShadow: '0 0 10px rgba(0,0,0,0.1)', // Add a shadow for visual effect
}
const pageStyle = {
  padding: "20px", // Add padding around the page content
  textAlign: "center", // Center the text horizontally on the page
  fontSize: "45px", // Set the font size for the main heading
  minHeight: "100vh", // Ensure the page has a minimum height of 100% of the viewport height
  backgroundColor: "#DADED4", // Set a light green background color for the page
  color: "#39603D", // Set the text color to a dark green
  display: 'flex', // Use flexbox for layout
  flexDirection: 'column', // Stack children vertically
  alignItems: 'center', // Center content horizontally
  justifyContent: 'center', // Center content vertically
};

export default Contact;
