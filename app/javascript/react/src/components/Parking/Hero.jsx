import { auto } from "@popperjs/core";
import React, { useState, useEffect } from "react";

function Hero() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const heroSectionStyle = {
    marginTop: isMobile ? "80px" : "122px",
    width: "100%",
    backgroundColor: "#1a1a1a",
    padding: isMobile ? "10px" : "20px",
    boxSizing: "border-box",
  };

  const heroContentStyle = {
    display: "flex",
    gap: "20px",
    flexDirection: isMobile ? "column" : "row",
    alignItems: "center", // Align center vertically when in row layout
    justifyContent: "center", // Center the content horizontally
    maxWidth: "90%", // Set a percentage max-width for responsiveness
    margin: "0 auto", // Center the content horizontally
  };

  const heroTextStyle = {
    flex: "1 1 60%", // Flex-grow: 1, Flex-shrink: 1, Flex-basis: 60% for flexibility
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: isMobile ? "center" : "left",
  };

  const heroTitleStyle = {
    fontSize: isMobile ? "36px" : "55px",
    fontWeight: "400",
    color: "#ffd613",
    marginBottom: "24px",
  };

  const heroDescriptionStyle = {
    fontSize: isMobile ? "18px" : "24px",
    color: "#fff",
    marginBottom: "36px",
  };

  const ctaButtonStyle = {
    backgroundColor: "#ffd613",
    border: "none",
    borderRadius: "50px",
    color: "#000",
    fontSize: isMobile ? "16px" : "18px",
    padding: isMobile ? "16px 40px" : "22px 61px",
    cursor: "pointer",
    marginRight: auto,
  };

  const heroImageStyle = {
    flex: "1 1 40%", // Flex-grow: 1, Flex-shrink: 1, Flex-basis: 40% for flexibility
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const heroImgStyle = {
    width: "100%",
    height: "auto",
    objectFit: "contain",
  };

  return (
    <section style={heroSectionStyle}>
      <div style={heroContentStyle}>
        <div style={heroTextStyle}>
          <h2 style={heroTitleStyle}>
            <span style={{ color: "#fff" }}>Revolutionize Your</span> Parking
            Journey <span style={{ color: "#fff" }}>with Our Expertise</span>
          </h2>
          <p style={heroDescriptionStyle}>
            Our team will assist you throughout the reservation process
          </p>
          <button style={ctaButtonStyle}>Contact Us</button>
        </div>
        <div style={heroImageStyle}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b6494cac5f2cdd7967a46f9e23470e915622409ff8ef0c6e0827b4320d4af5d?apiKey=1e478041483c415d8c6ecd66dd4ddacc&"
            alt="Parking illustration"
            style={heroImgStyle}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
