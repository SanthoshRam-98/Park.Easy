import React, { useState, useEffect } from "react";

const About = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 991);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const aboutSectionStyles = {
    backgroundColor: "#000000",
    padding: isMobile ? "40px 20px" : "96px 80px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Poppins, sans-serif",
  };

  const sectionTitleStyles = {
    color: "#ffd613",
    fontSize: isMobile ? "40px" : "55px",
    fontWeight: "400",
    lineHeight: "1",
    alignSelf: "flex-start",
    marginBottom: isMobile ? "40px" : "73px",
  };

  const aboutContentStyles = {
    display: "flex",
    gap: "20px",
    justifyContent: isMobile ? "center" : "space-between",
    width: "100%",
    maxWidth: "1135px",
    flexDirection: isMobile ? "column" : "row",
    alignItems: isMobile ? "center" : "flex-start",
  };

  const aboutImageStyles = {
    width: "167px",
    aspectRatio: "1.16",
    objectFit: "contain",
  };

  const separatorStyles = {
    width: "1px",
    height: "285px",
    backgroundColor: "#453636",
    display: isMobile ? "none" : "block",
  };

  const aboutTextStyles = {
    flex: "1",
    color: "#ffffff",
    fontSize: "24px",
    fontWeight: "300",
  };

  const exploreMoreButtonStyles = {
    borderRadius: "50px",
    backgroundColor: "#ffd613",
    color: "#000000",
    fontSize: "18px",
    fontWeight: "500",
    padding: isMobile ? "15px 40px" : "22px 54px",
    border: "none",
    cursor: "pointer",
    marginTop: "26px",
  };

  return (
    <section style={aboutSectionStyles}>
      <h2 style={sectionTitleStyles}>About us</h2>
      <div style={aboutContentStyles}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/76199143a098239988747e07c6c0d3dcd1b4cbd6c027628f7737e9343a172e93?placeholderIfAbsent=true&apiKey=1e478041483c415d8c6ecd66dd4ddacc"
          alt="About Park.Easy"
          loading="lazy"
          style={aboutImageStyles}
        />
        <div style={separatorStyles} />
        <div style={aboutTextStyles}>
          <p>
            Welcome to Park.Easy, we know how important it's to have hassle-free
            parking, whether you're a car owner looking for a safe place to park
            your vehicle or a traveller looking for convenient parking options.
            Our goal is to make your parking experience as seamless and
            stress-free as possible.
          </p>
          <button style={exploreMoreButtonStyles}>Explore More</button>
        </div>
      </div>
    </section>
  );
};

export default About;
