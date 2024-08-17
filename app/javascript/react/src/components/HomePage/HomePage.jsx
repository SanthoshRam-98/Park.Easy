import React from "react";
import NavBar from "./NavBar";
import CarArticle from "./CarArticle";
import Services from "./Services";
import Testimonial from "./Testimonial";
import AboutUs from "./AboutUs";
import GetInTouch from "./GetInTouch";
import Footer from "./Footer";
function HomePage() {
  const pageStyle = {
    backgroundColor: "#1a1a1a", // Ensure the page background matches the dark theme
  };

  return (
    <div style={pageStyle}>
      <NavBar />
      <CarArticle />
      <Services />
      <Testimonial />
      <AboutUs />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default HomePage;
