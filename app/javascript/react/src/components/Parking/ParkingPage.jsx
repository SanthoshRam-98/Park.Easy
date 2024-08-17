import React from "react";
import NavBar from "../HomePage/NavBar";
import Footer from "../HomePage/Footer";
import Hero from "./Hero";
import ParkingServices from "./ParkingServices";
import ParkingSolutions from "./ParkingSolutions";
import ProductPerks from "./ProductPerks";
import Testimonial from "../HomePage/Testimonial";

function ParkingPage() {
  const pageStyle = {
    backgroundColor: "#1a1a1a", // Ensure the page background matches the dark theme
  };

  return (
    <div style={pageStyle}>
      <NavBar />
      <Hero />
      <ParkingServices />
      <ParkingSolutions />
      <ProductPerks />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default ParkingPage;
