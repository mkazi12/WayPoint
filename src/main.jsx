// src/main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./About";
import Contact from "./Contact";
import FAQ from "./FAQ"; 
import Services from "./Services";
import SignIn from "./SignIn";
import GetStarted from "./GetStarted";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/getstarted" element={<GetStarted />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
