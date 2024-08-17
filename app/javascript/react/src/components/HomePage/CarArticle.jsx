import React, { useState, useEffect } from "react";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 991);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const heroSectionStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: isMobile ? "0 20px" : "0 70px",
    marginTop: isMobile ? "40px" : "84px",
    flexDirection: isMobile ? "column" : "row",
  };

  const heroContentStyles = {
    width: isMobile ? "100%" : "50%",
    fontFamily: "Poppins, sans-serif",
    textAlign: isMobile ? "center" : "left",
  };

  const mainHeadingStyles = {
    color: "#ffd613",
    fontSize: isMobile ? "40px" : "80px",
    lineHeight: isMobile ? "44px" : "80px",
    fontWeight: "400",
  };

  const subHeadingStyles = {
    color: "#ffffff",
    fontSize: "24px",
    margin: isMobile ? "20px 0" : "36px 60px 0 0",
  };

  const buttonGroupStyles = {
    display: "flex",
    gap: "23px",
    marginTop: "36px",
    justifyContent: isMobile ? "center" : "flex-start",
  };

  const buttonStyles = {
    borderRadius: "50px",
    fontSize: "18px",
    fontWeight: "500",
    padding: isMobile ? "15px 30px" : "22px 44px",
    cursor: "pointer",
  };

  const downloadButtonStyles = {
    ...buttonStyles,
    backgroundColor: "#ffd613",
    color: "#000000",
    border: "none",
  };

  const contactButtonStyles = {
    ...buttonStyles,
    backgroundColor: "transparent",
    color: "#ffffff",
    border: "1px solid #ffffff",
  };

  const heroImageStyles = {
    width: isMobile ? "100%" : "50%",
    aspectRatio: "0.84",
    objectFit: "contain",
    marginTop: isMobile ? "40px" : "0",
  };

  return (
    <section style={heroSectionStyles}>
      <div style={heroContentStyles}>
        <h2 style={mainHeadingStyles}>
          Simplify Your Car Experience with Park.Easy
        </h2>
        <p style={subHeadingStyles}>
          Park.Easy is an innovative app designed to simplify parking
          experiences for users by providing real-time information and seamless
          parking solutions.
        </p>
        <div style={buttonGroupStyles}>
          <button style={downloadButtonStyles}>Download Now</button>
          <button style={contactButtonStyles}>Contact us</button>
        </div>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5edb5949663cb3f3b24b5c31ae8367b891216293d59db61f930118f440919b8c?placeholderIfAbsent=true&apiKey=1e478041483c415d8c6ecd66dd4ddacc"
        alt="Park.Easy app interface"
        loading="lazy"
        style={heroImageStyles}
      />
    </section>
  );
};

export default Hero;
