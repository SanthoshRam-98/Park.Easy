import React from "react";

function CommunityJoin() {
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
    marginTop: width <= 991 ? "40px" : "64px",
    textAlign: "center",
  };

  const stepDescriptionStyles = {
    color: "rgba(255, 255, 255, 1)",
    fontSize: "24px",
    marginTop: "36px",
    maxWidth: "100%",
  };

  return (
    <section style={sectionStyles}>
      <h2 style={titleStyles}>Join the Park.Easy Community</h2>
      <div style={stepsContainerStyles}>
        <p style={stepDescriptionStyles}>
          Become a valued member of the Park.Easy community and unlock the
          potential of your parking space.Monetize your unused parking
          spaces,provide convenient options for drivers, and enjoy the benefits
          of hassle-free parking.
        </p>
      </div>
    </section>
  );
}

export default CommunityJoin;
