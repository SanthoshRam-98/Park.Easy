import React, { useState, useEffect } from "react";

function ContactForm() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 991;

  const contactUsStyle = {
    backgroundColor: "#131212",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    padding: isMobile ? "0 15px" : "0 70px", // Align with padding used on previous page
    margin: "0 auto", // Center the content on the page
  };

  const mainSectionStyle = {
    alignSelf: "center",
    marginTop: isMobile ? "40px" : "80px", // Adjust margin-top to maintain consistency
    width: "100%",
  };

  const introStyle = {
    display: "flex",
    gap: isMobile ? "20px" : "40px", // Maintain a consistent gap between elements
    flexDirection: isMobile ? "column" : "row",
    alignItems: "center", // Align items to the center for better visual balance
  };

  const introTextStyle = {
    display: "flex",
    flexDirection: "column",
    lineHeight: "normal",
    width: isMobile ? "100%" : "50%",
    marginTop: isMobile ? "20px" : "0",
  };

  const mainHeadingStyle = {
    color: "#ffd613",
    fontSize: isMobile ? "36px" : "72px", // Adjust font size to match previous page
    lineHeight: "1.2",
    alignSelf: "flex-start", // Align the heading to the start for consistency
    marginBottom: isMobile ? "10px" : "20px", // Add margin-bottom for spacing
  };

  const subHeadingStyle = {
    color: "#ffffff",
    fontSize: isMobile ? "18px" : "22px", // Adjust font size to maintain proportionality
    marginTop: "10px", // Add spacing above the subheading
    marginBottom: "30px", // Add spacing below the subheading
    maxWidth: isMobile ? "100%" : "unset", // Apply media query logic in JavaScript
  };

  const introImageStyle = {
    aspectRatio: "1.12",
    objectFit: "contain",
    objectPosition: "center",
    marginTop: isMobile ? "20px" : "0",
  };

  return (
    <main style={contactUsStyle}>
      <section style={mainSectionStyle}>
        <div style={introStyle}>
          <div style={introTextStyle}>
            <h1 style={mainHeadingStyle}>Contact Us</h1>
            <p style={subHeadingStyle}>
              Fill up the form and our Team will get back to you within 24
              hours.
            </p>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc852d68ff802f92dc623fe13aae72212c7f33b732c3ab9637a3fd61c4124a25?placeholderIfAbsent=true&apiKey=1e478041483c415d8c6ecd66dd4ddacc"
            alt="Intro"
            style={introImageStyle}
          />
        </div>
      </section>
    </main>
  );
}

export default ContactForm;
