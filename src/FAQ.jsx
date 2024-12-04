import React, { useState, useRef, useEffect } from "react";
import Navbar from "./NavBar";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [height, setHeight] = useState(0);
  const contentRef = useRef([]);

  const faqData = [
    {
      question: "What is Waypoint?",
      answer: "Waypoint is your all-in-one travel planner.",
    },
    {
      question: "Is Waypoint free?",
      answer:
        "Yes, Waypoint is a free travel planner! Based on demand and other factors, we may charge for premium features in the future.",
    },
    {
      question: "How does Waypoint curate my trips?",
      answer:
        "Waypoint gathers info such as responses to questions, requirements, and style choices. Then, Waypoint uses this data to tailor your personalized trip.",
    },
    {
      question: "Can Waypoint create a budget for my trip?",
      answer: "Yes! Waypoint can create a trip plan that will fit a budget you set.",
    },
    {
      question: "How can I contact Waypoint?",
      answer: "You can reach us via email or through our contact form.",
    },
    {
      question: "Can Waypoint book hotels and flights?",
      answer:
        "Kinda. Waypoint can provide information on estimated prices and availability of hotels and flights. You still need to select and book your flights yourself.",
    },

  ];

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
      setHeight(contentRef.current[index]?.scrollHeight);
    }
  };

  useEffect(() => {
    if (activeIndex !== null) {
      setHeight(contentRef.current[activeIndex]?.scrollHeight);
    }
  }, [activeIndex]);

  return (
    <div>
      <Navbar />
      <div style={pageStyle}>
        <h1>FAQ Page</h1>
        <div style={faqBoxStyle}>
          {faqData.map((item, index) => (
            <div key={index} style={faqItemStyle}>
              <div
                onClick={() => toggleAccordion(index)}
                style={questionContainerStyle}
              >
                <span style={iconStyle}>
                  {activeIndex === index ? "▼" : "►"}
                </span>
                <h2 style={questionStyle}>{item.question}</h2>
              </div>
              <div
                ref={(el) => (contentRef.current[index] = el)}
                style={{
                  ...answerContainerStyle,
                  height:
                    activeIndex === index ? `${height}px` : "0px",
                }}
              >
                <p style={answerStyle}>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const pageStyle = {
  padding: "50px",
  minHeight: "200vh",
  backgroundColor: "#DADED4",
  color: "#39603D",
  textAlign: "center",
};

const faqBoxStyle = {
  maxWidth: "700px",
  margin: "0 auto",
  padding: "20px",
  borderRadius: "15px",
  background: "linear-gradient(135deg, #39603D, black)",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
  color: "#FFFFFF",
};

const faqItemStyle = {
  marginBottom: "20px",
  cursor: "pointer",
  textAlign: "left",
};

const questionContainerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const iconStyle = {
  marginRight: "10px",
  fontSize: "18px",
  fontWeight: "bold",
};

const questionStyle = {
  marginBottom: "10px",
  fontWeight: "bold",
  fontSize: "22px",
};

const answerContainerStyle = {
  overflow: "hidden",
  transition: "height 0.3s ease",
};

const answerStyle = {
  padding: "10px 20px",
  textAlign: "center",
  margin: 0,
  fontSite: "20px",
};

export default FAQ;
