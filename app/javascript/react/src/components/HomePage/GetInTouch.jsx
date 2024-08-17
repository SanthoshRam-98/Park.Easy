import React, { useState, useEffect } from "react";

const Contact = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 991);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const contactSectionStyles = {
    padding: isMobile ? "0 20px" : "0 70px",
    marginTop: isMobile ? "40px" : "112px",
    fontFamily: "Poppins, sans-serif",
  };

  const sectionTitleStyles = {
    color: "#ffd613",
    fontSize: isMobile ? "40px" : "55px",
    fontWeight: "400",
    marginBottom: isMobile ? "40px" : "85px",
    textAlign: isMobile ? "center" : "left",
  };

  const formAndInfoContainerStyles = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    justifyContent: "space-between",
    gap: "100px",
  };

  const contactFormStyles = {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    marginBottom: "36px",
    flex: 1,
  };

  const formGroupStyles = {
    display: "flex",
    flexDirection: "column",
  };

  const labelStyles = {
    color: "#b5b5b5",
    fontSize: "20px",
    marginBottom: "8px",
  };

  const inputStyles = {
    borderRadius: "10px",
    border: "1px solid #b5b5b5",
    backgroundColor: "transparent",
    color: "#ffffff",
    fontSize: "20px",
    padding: "13px 20px",
  };

  const textAreaStyles = {
    borderRadius: "10px",
    border: "1px solid #b5b5b5",
    backgroundColor: "transparent",
    color: "#ffffff",
    fontSize: "20px",
    padding: "13px 20px",
    height: "150px",
    resize: "vertical",
  };

  const submitButtonStyles = {
    borderRadius: "50px",
    backgroundColor: "#ffd613",
    color: "#000000",
    fontSize: "18px",
    fontWeight: "500",
    padding: isMobile ? "15px 40px" : "22px 70px",
    border: "none",
    cursor: "pointer",
    alignSelf: "center",
    width: isMobile ? "100%" : "auto",
  };

  const contactInfoStyles = {
    display: "flex",
    flexDirection: "column",
    marginTop: "32px",
    gap: "24px",
    flex: 1,
  };

  const infoItemStyles = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  };

  const infoIconStyles = {
    width: "30px",
    height: "30px",
  };

  const infoTextStyles = {
    color: "#ffffff",
    fontSize: "20px",
    fontWeight: "400",
  };

  return (
    <section style={contactSectionStyles}>
      <h2 style={sectionTitleStyles}>Get in touch</h2>
      <div style={formAndInfoContainerStyles}>
        <form style={contactFormStyles}>
          <div style={formGroupStyles}>
            <label htmlFor="name" style={labelStyles}>
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              style={inputStyles}
            />
          </div>
          <div style={formGroupStyles}>
            <label htmlFor="email" style={labelStyles}>
              Email ID
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@yourmail.com"
              style={inputStyles}
            />
          </div>
          <div style={formGroupStyles}>
            <label htmlFor="phone" style={labelStyles}>
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="Your phone number"
              style={inputStyles}
            />
          </div>
          <div style={formGroupStyles}>
            <label htmlFor="message" style={labelStyles}>
              Your Message
            </label>
            <textarea
              id="message"
              placeholder="Type your message here"
              style={textAreaStyles}
            />
          </div>
          <button type="submit" style={submitButtonStyles}>
            Submit
          </button>
        </form>
        <div style={contactInfoStyles}>
          <div style={infoItemStyles}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f824f57ea76c23be52155b6395fd060c26b2653a4eb39e0a2965c2573c74528?placeholderIfAbsent=true&apiKey=1e478041483c415d8c6ecd66dd4ddacc"
              alt="Email icon"
              style={infoIconStyles}
            />
            <p style={infoTextStyles}>example@yourmail.com</p>
          </div>
          <div style={infoItemStyles}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea2e7ceb3d5dd0ada9c69901d574b869c9142a53c2885c7b5bc9841e8d08627b?placeholderIfAbsent=true&apiKey=1e478041483c415d8c6ecd66dd4ddacc"
              alt="Phone icon"
              style={infoIconStyles}
            />
            <p style={infoTextStyles}>+91 - 9876543210</p>
          </div>
          <div style={infoItemStyles}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0df4f959bed707b7a4f09b333894666f96d284ea5cc3b409aa2cfd8cbcd007bf?placeholderIfAbsent=true&apiKey=1e478041483c415d8c6ecd66dd4ddacc"
              alt="Address icon"
              style={infoIconStyles}
            />
            <p style={infoTextStyles}>
              Door No. , Street Name,
              <br />
              City Name,
              <br />
              Country - 000000
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
