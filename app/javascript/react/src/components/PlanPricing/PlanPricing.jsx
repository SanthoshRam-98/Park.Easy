import React from "react";
import NavBar from "../HomePage/NavBar";
import Footer from "../HomePage/Footer";
import PricingPlans from "./PricingPlans";

function PlanPricing() {
  const pageStyle = {
    backgroundColor: "#1a1a1a", // Ensure the page background matches the dark theme
  };

  return (
    <div style={pageStyle}>
      <NavBar />
      <PricingPlans />
      <Footer />
    </div>
  );
}

export default PlanPricing;
