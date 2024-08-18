import * as React from "react";

function MainContent() {
  const mainStyles = {
    zIndex: 10,
    display: "flex",
    flexDirection: "column",
    padding: "0 70px",
  };

  const sectionStyles = {
    marginTop: "134px",
  };

  const titleStyles = {
    color: "rgba(255, 255, 255, 1)",
    font: "400 40px Poppins, sans-serif",
  };

  const contentRowStyles = {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    marginTop: "24px",
  };

  const contentColumnStyles = {
    width: "50%",
  };

  const textBlockStyles = {
    display: "flex",
    flexDirection: "column",
    fontFamily: "Poppins, sans-serif",
    fontWeight: 400,
  };

  const subtitleStyles = {
    color: "rgba(255, 214, 19, 1)",
    fontSize: "55px",
  };

  const paragraphStyles = {
    color: "rgba(255, 255, 255, 1)",
    fontSize: "24px",
    marginTop: "24px",
  };

  const imageStyles = {
    aspectRatio: "1.76",
    objectFit: "contain",
    width: "100%",
    marginTop: "11px",
  };

  const primaryButtonStyles = {
    borderRadius: "50px",
    color: "rgba(0, 0, 0, 1)",
    padding: "22px 44px",
    font: "500 18px Poppins, sans-serif",
    marginTop: "24px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "rgba(255, 214, 19, 1)",
  };

  // Handle responsive styles using a JavaScript approach
  const isMobile = window.innerWidth <= 991;
  if (isMobile) {
    mainStyles.padding = "0 20px";
    sectionStyles.marginTop = "40px";
    titleStyles.fontSize = "32px";
    contentRowStyles.flexDirection = "column";
    contentRowStyles.gap = "0";
    contentColumnStyles.width = "100%";
    textBlockStyles.marginTop = "40px";
    subtitleStyles.fontSize = "40px";
    imageStyles.marginTop = "40px";
    primaryButtonStyles.padding = "0 20px";
  }

  return (
    <div style={mainStyles}>
      <section style={sectionStyles}>
        <h1 style={titleStyles}>Parking Space Providers</h1>
        <div className="content-row" style={contentRowStyles}>
          <div className="content-column" style={contentColumnStyles}>
            <div className="text-block" style={textBlockStyles}>
              <h2 style={subtitleStyles}>
                Make money from your <br /> empty parking space.
              </h2>
              <p style={paragraphStyles}>
                We provide a seamless platform for individuals and businesses to
                post their parking spaces and connect you with a large community
                of drivers looking for convenient and safe parking solutions.
              </p>
            </div>
          </div>
          <div className="content-column" style={contentColumnStyles}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c951d81461e546aa2cccbcceeed76dbd88bd35e86909b1cff1ad2a4a5592c5e6?placeholderIfAbsent=true&apiKey=1e478041483c415d8c6ecd66dd4ddacc"
              alt="Parking space"
              style={imageStyles}
            />
          </div>
        </div>
        <button style={primaryButtonStyles}>List your space</button>
      </section>
    </div>
  );
}

export default MainContent;
