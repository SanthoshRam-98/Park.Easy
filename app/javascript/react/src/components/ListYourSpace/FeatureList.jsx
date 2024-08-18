import React, { useEffect, useState } from "react";

function FeatureList() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 991px)");

    const handleResize = () => setIsMobile(mediaQuery.matches);

    // Set initial state based on the current viewport size
    handleResize();

    // Add event listener for media query changes
    mediaQuery.addEventListener("change", handleResize);

    // Clean up the event listener on component unmount
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const secondaryTitleStyles = {
    color: "rgba(255, 214, 19, 1)",
    textAlign: "center",
    marginTop: isMobile ? "20px" : "100px",
    font: isMobile
      ? "400 24px Poppins, sans-serif"
      : "400 36px Poppins, sans-serif",
  };

  const featuresStyles = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    justifyContent: "space-between", // Adjusted to space items evenly
    alignItems: "flex-start",
    gap: isMobile ? "20px" : "30px",
    marginTop: isMobile ? "20px" : "50px",
    padding: isMobile ? "0 20px" : "0 50px",
  };

  const featureItemStyles = {
    backgroundColor: "rgba(38, 38, 38, 1)",
    borderRadius: "10px",
    padding: isMobile ? "40px 20px" : "40px 20px",
    position: "relative",
    flex: "1",
    textAlign: "center",
    maxWidth: isMobile ? "100%" : "calc(33.333% - 30px)", // Ensures boxes are evenly sized
  };

  const stepNumberStyles = {
    backgroundColor: "rgba(255, 214, 19, 1)",
    borderRadius: "50%",
    width: isMobile ? "40px" : "50px",
    height: isMobile ? "40px" : "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: isMobile ? "16px" : "18px",
    fontWeight: 700,
    color: "rgba(38, 38, 38, 1)",
    position: "absolute",
    top: "-22px", // Adjusted to keep the number inside the box
    right: "38px", // Adjusted to keep the number inside the box
  };

  const featureTitleStyles = {
    color: "rgba(255, 214, 19, 1)",
    fontSize: isMobile ? "20px" : "24px",
    fontWeight: 600,
    marginTop: isMobile ? "20px" : "10px",
  };

  const featureDescriptionStyles = {
    color: "rgba(255, 255, 255, 1)",
    fontSize: isMobile ? "16px" : "18px",
    marginTop: "20px",
  };

  return (
    <div style={{ padding: "50px 0", backgroundColor: "#1c1c1c" }}>
      <h2 style={secondaryTitleStyles}>List, manage & earn</h2>
      <div className="feature-list" style={featuresStyles}>
        <div className="feature-item" style={featureItemStyles}>
          <div style={stepNumberStyles}>01</div>
          <h3 style={featureTitleStyles}>List Any Parking Space</h3>
          <p style={featureDescriptionStyles}>
            You can list any parking space you own or have permission to offer,
            including driveways, garages, off-street parking, residential, or
            commercial areas.
          </p>
        </div>
        <div className="feature-item" style={featureItemStyles}>
          <div style={stepNumberStyles}>02</div>
          <h3 style={featureTitleStyles}>Set Your Availability</h3>
          <p style={featureDescriptionStyles}>
            Determine when your space is open for rent, whether it's around the
            clock or during specific hours. Our calendar lets you establish your
            schedule, even for special events and seasonal demand.
          </p>
        </div>
        <div className="feature-item" style={featureItemStyles}>
          <div style={stepNumberStyles}>03</div>
          <h3 style={featureTitleStyles}>Monthly Earnings Deposits</h3>
          <p style={featureDescriptionStyles}>
            Earnings are automatically deposited to your designated bank account
            at the start of each month.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeatureList;
