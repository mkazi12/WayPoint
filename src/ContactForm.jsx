// src/CForm.jsx

import React from "react";

function CForm() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "dfe1803b-b055-4b77-86d7-e3fe0c3ae4f8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div >
      <form onSubmit={onSubmit}>
        <input type="text" name="name" placeholder="Your Name" required style={inputStyle} />
        <input type="email" name="email" placeholder="Your Email" required style={inputStyle} />
        <textarea name="message" placeholder="Your Message" required style={textareaStyle}></textarea>
        <button type="submit" style={buttonStyle}>Submit Form</button>
      </form>
      <span style={resultStyle}>{result}</span>
    </div>
  );
}

// Styles
const formStyle = {
  margin: "20px auto",
  padding: "200px",
  borderRadius: "10px",
  maxWidth: "500px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
};

const inputStyle = {
  display: "block",
  width: "150%",
  padding: "10px",
  margin: "10px 0",
  borderRadius: "5px",
  border: "1px solid #ddd",
  fontSize: "16px",
};

const textareaStyle = {
  display: "block",
  width: "150%",
  padding: "10px",
  margin: "10px 0",
  borderRadius: "5px",
  border: "1px solid #ddd",
  fontSize: "16px",
  minHeight: "100px",
};

const buttonStyle = {
  display: "block",
  width: "160%",
  padding: "10px",
  margin: "10px 0",
  borderRadius: "5px",
  border: "none",
  backgroundColor: "#39603D",
  color: "#fff",
  fontSize: "16px",
  cursor: "pointer",
};

const resultStyle = {
  display: "block",
  marginTop: "10px",
  fontSize: "16px",
};

export default CForm;
