import React, { useState, useEffect } from "react";

function AboutSection() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 991;

  const aboutWrapperStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: isMobile ? "40px 20px" : "128px 0",
    maxWidth: "886px",
    margin: "0 auto",
  };

  const aboutTitleStyle = {
    color: "#ffd613",
    textAlign: "center",
    fontSize: isMobile ? "40px" : "55px",
    fontWeight: 400,
    fontFamily: "Poppins, sans-serif",
    marginBottom: isMobile ? "40px" : "64px",
  };

  const aboutDescriptionStyle = {
    color: "#ffffff",
    textAlign: "center",
    fontSize: isMobile ? "20px" : "24px",
    fontWeight: 400,
    fontFamily: "Poppins, sans-serif",
  };

  return (
    <section style={aboutWrapperStyle}>
      <h2 style={aboutTitleStyle}>About Park.Easy</h2>
      <p style={aboutDescriptionStyle}>
        At Park.Easy, our mission is clear: to make parking easier, safer, and
        more rewarding for you. Whether you're a parking lot renter looking to
        monetize your underutilized parking space or a user looking for a cheap
        parking spot, we've got you covered. Our mission is to simplify your
        parking experience so you can focus on what matters most to you.
      </p>
    </section>
  );
}

export default AboutSection;
