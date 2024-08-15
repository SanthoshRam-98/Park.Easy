import React from "react";

export default function Testimonial() {
  const containerStyle = {
    backgroundColor: "#000000",
    padding: "80px 32px",
  };

  const wrapperStyle = {};

  const headingStyle = {
    color: "#FFD700",
    fontSize: "2.25rem",
    fontWeight: "bold",
    marginBottom: "48px",
  };

  const testimonialWrapperStyle = {
    display: "flex",
    justifyContent: "space-between",
    gap: "24px",
  };

  const textCenterStyle = {
    textAlign: "center",
  };

  const iconStyle = {
    color: "#FFFFFF",
    fontSize: "2rem",
    marginBottom: "16px",
  };

  const nameStyle = {
    color: "#FFFFFF",
    fontSize: "1.25rem",
    marginBottom: "16px",
  };

  const textContainerStyle = {
    backgroundColor: "#3A3A3A",
    color: "#FFFFFF",
    borderRadius: "20px",
    padding: "24px",
    maxWidth: "320px",
    margin: "0 auto",
  };

  const highlightedTextContainerStyle = {
    backgroundImage: "linear-gradient(to right, #FFD700, #FFB800)",
    color: "#000000",
    borderRadius: "20px",
    padding: "24px",
    maxWidth: "320px",
    margin: "0 auto",
  };

  return (
    <div style={containerStyle}>
      <div style={wrapperStyle}>
        <h2 style={headingStyle}>Testimonials</h2>
        <div style={testimonialWrapperStyle}>
          <div style={textCenterStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <i className="fas fa-users" style={iconStyle}></i>
            </div>
            <h3 style={nameStyle}>Charlie</h3>
            <div style={textContainerStyle}>
              <p>
                I tried Park.Easy car wash service on the recommendation of a
                friend, and there has been no looking back since then.
              </p>
            </div>
          </div>

          <div style={textCenterStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <i className="fas fa-users" style={iconStyle}></i>
            </div>
            <h3 style={nameStyle}>Kumar</h3>
            <div style={highlightedTextContainerStyle}>
              <p>
                I can quickly check for open spots and secure one with ease. The
                convenience is unmatched.
              </p>
            </div>
          </div>

          <div style={textCenterStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <i className="fas fa-users" style={iconStyle}></i>
            </div>
            <h3 style={nameStyle}>Jessica</h3>
            <div style={textContainerStyle}>
              <p>
                Park.Easy has been a lifesaver in urban areas with limited
                parking options. I no longer waste time driving around
                aimlessly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
