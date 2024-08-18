import React from "react";
import NavBar from "../HomePage/NavBar";
import Footer from "../HomePage/Footer";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import AboutUsFeature from "./AboutUsFeature";
function AboutUs() {
  const pageStyle = {
    backgroundColor: "#1a1a1a", // Ensure the page background matches the dark theme
  };

  return (
    <div style={pageStyle}>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <AboutUsFeature />
      <Footer />
    </div>
  );
}

export default AboutUs;
