import React from "react";
import Navbar from "./Navbar";

const Services = () => {
  return (
    <div>
      <Navbar />
      <div style={pageStyle}>
        <h1 style={headingStyle}>Our Services</h1>
        <div style={servicesContainerStyle}>
          <div style={serviceItemStyle}>
            <img src="path/to/image1.jpg" alt="Service 1" style={imageStyle} />
            <h2 style={serviceTitleStyle}>Service 1</h2>
          </div>
          <div style={serviceItemStyle}>
            <img src="path/to/image2.jpg" alt="Service 2" style={imageStyle} />
            <h2 style={serviceTitleStyle}>Service 2</h2>
          </div>
          <div style={serviceItemStyle}>
            <img src="path/to/image3.jpg" alt="Service 3" style={imageStyle} />
            <h2 style={serviceTitleStyle}>Service 3</h2>
          </div>
          <div style={serviceItemStyle}>
            <img src="path/to/image4.jpg" alt="Service 4" style={imageStyle} />
            <h2 style={serviceTitleStyle}>Service 4</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

const pageStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: "50px",
  minHeight: "100vh",
  backgroundColor: "#DADED4",
  color: "#39603D",
};

const headingStyle = {
  marginBottom: "40px",
  textAlign: "center",
};

const servicesContainerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "40px",
  justifyItems: "center",
  width: "100%",
  maxWidth: "1200px",
};

const serviceItemStyle = {
  textAlign: "center",
};

const serviceTitleStyle = {
  marginTop: "15px",
};

const imageStyle = {
  width: "300px",
  height: "200px",
  objectFit: "cover",
  borderRadius: "10px",
};

export default Services;
