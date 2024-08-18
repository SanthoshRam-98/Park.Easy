import React, { useState, useEffect } from "react";

function PricingPlan() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const pricingPlans = [
    { name: "Normal", price: "₹20", duration: "Valid for one Hour" },
    { name: "Basic", price: "₹750", duration: "Valid for one week" },
    { name: "Standard", price: "₹2,999", duration: "Valid for one month" },
    { name: "Classic", price: "₹7,999", duration: "Valid for 3 months" },
    { name: "Premium", price: "₹14,999", duration: "Valid for 6 months" },
    { name: "Ultimate", price: "₹24,999", duration: "Valid for 12 months" },
  ];

  // Define responsive breakpoints
  const isMobile = windowWidth <= 600;
  const isTablet = windowWidth > 600 && windowWidth <= 991;
  const isDesktop = windowWidth > 991;

  // Styles
  const containerStyle = {
    backgroundColor: "#131212",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflow: "hidden",
    minHeight: "100vh",
    padding: isMobile ? "20px" : "40px",
  };

  const titleStyle = {
    color: "#ffd613",
    textAlign: "center",
    marginTop: isMobile ? "20px" : "100px",
    fontFamily: "Poppins, sans-serif",
    fontWeight: 400,
    fontSize: isMobile ? "30px" : isTablet ? "40px" : "55px",
    marginBottom: isMobile ? "20px" : "40px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
    gridTemplateRows: "auto",
    gap: "20px",
    width: "100%",
    maxWidth: "1300px",
  };

  const cardStyle = {
    backgroundColor: "#1f1f1f",
    borderRadius: "10px",
    padding: "30px",
    boxSizing: "border-box",
    textAlign: "center",
    color: "#ffffff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const planNameStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  const priceStyle = {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#ffd613",
    marginBottom: "10px",
  };

  const durationStyle = {
    fontSize: "18px",
    marginBottom: "20px",
  };

  const buttonStyle = {
    backgroundColor: "#ffd613",
    color: "#000000",
    border: "none",
    borderRadius: "30px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    alignSelf: "center",
    marginTop: "auto",
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Choose Your Pricing Plan</h1>
      <div style={gridStyle}>
        {pricingPlans.map((plan, index) => (
          <div key={index} style={cardStyle}>
            <div>
              <h2 style={planNameStyle}>{plan.name}</h2>
              <p style={priceStyle}>{plan.price}</p>
              <p style={durationStyle}>{plan.duration}</p>
            </div>
            <button style={buttonStyle}>Get Started</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingPlan;
