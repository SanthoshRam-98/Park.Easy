import React from "react";

function Instructions() {
  // Determine viewport width
  const width = window.innerWidth;

  const sectionStyles = {
    display: "flex",
    flexDirection: "column",
    marginTop: width <= 991 ? "40px" : "212px",
    padding: width <= 991 ? "0 20px" : "0 70px",
    backgroundColor: "transparent",
  };

  const titleStyles = {
    color: "rgba(255, 214, 19, 1)",
    textAlign: "center",
    fontWeight: 400,
    fontSize: width <= 991 ? "40px" : "48px",
    fontFamily: "Poppins, sans-serif",
    margin: 0,
  };

  const stepsContainerStyles = {
    display: "flex",
    flexDirection: "column",
    marginTop: width <= 991 ? "40px" : "64px",
  };

  const stepStyles = {
    marginTop: width <= 991 ? "40px" : "64px",
  };

  const stepTitleStyles = {
    marginTop: 0,
    color: "rgba(255, 214, 19, 1)",
    fontWeight: 400,
    fontSize: "36px",
    fontFamily: "Poppins, sans-serif",
  };

  const stepDescriptionStyles = {
    color: "rgba(255, 255, 255, 1)",
    fontSize: "24px",
    marginTop: "36px",
  };

  return (
    <section style={sectionStyles}>
      <h2 style={titleStyles}>How It Works ??</h2>
      <div style={stepsContainerStyles}>
        <div style={stepStyles}>
          <h3 style={stepTitleStyles}>Create Your Listing</h3>
          <p style={stepDescriptionStyles}>
            Sign up with Park.Easy, provide details about your parking space,
            set your pricing, and upload high-quality photos to attract
            potential users.
          </p>
        </div>
        <div style={stepStyles}>
          <h3 style={stepTitleStyles}>Receive Reservation Requests</h3>
          <p style={stepDescriptionStyles}>
            Users will discover your parking space through our platform and send
            reservation requests. You have full control to accept or decline
            requests based on your availability.
          </p>
        </div>
        <div style={stepStyles}>
          <h3 style={stepTitleStyles}>Earn Passive Income</h3>
          <p style={stepDescriptionStyles}>
            Once your space is listed and reservations are confirmed, you can
            start earning passive income. Payments are securely processed, and
            you'll receive your earnings directly.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Instructions;
