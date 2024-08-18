import React, { useState, useEffect } from "react";

function HeroSection() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 991;

  const heroWrapperStyle = {
    backgroundColor: "rgba(44, 47, 51, 0.4)",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: isMobile ? "40px 20px 100px" : "64px 80px 309px",
    fontFamily: "Poppins, sans-serif",
    color: "#ffffff",
    textAlign: "center",
  };

  const heroContentStyle = {
    maxWidth: "868px",
    width: "100%",
  };

  const heroTitleStyle = {
    fontSize: isMobile ? "40px" : "55px",
    fontWeight: 400,
    marginBottom: "36px",
  };

  const heroDescriptionStyle = {
    fontSize: "24px",
    fontWeight: 400,
    marginRight: isMobile ? "7px" : "0",
  };

  return (
    <section style={heroWrapperStyle}>
      <div style={heroContentStyle}>
        <h1 style={heroTitleStyle}>
          Park.Easy is India's No.1 General <br />& EV Parking Marketplace
        </h1>
        <p style={heroDescriptionStyle}>
          We continuously strive to offer our customers the finest parking and
          car services solutions.
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
