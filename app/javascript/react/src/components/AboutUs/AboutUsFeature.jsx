import React, { useState, useEffect } from "react";

function AboutUs() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 991;

  const aboutUsWrapperStyle = {
    backgroundColor: "#131212",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    alignItems: "center",
  };

  const featureWrapperStyle = (reverse) => ({
    display: "flex",
    flexDirection: isMobile ? "column" : reverse ? "row-reverse" : "row",
    alignItems: "center",
    gap: "20px",
    margin: isMobile ? "40px auto" : "212px auto",
    maxWidth: "1300px",
    width: "100%",
    padding: isMobile ? "0 20px" : "0",
  });

  const featureImageStyle = {
    width: isMobile ? "100%" : "40%",
    objectFit: "contain",
    marginBottom: isMobile ? "20px" : "0",
  };

  const featureContentStyle = {
    width: isMobile ? "100%" : "60%",
    textAlign: isMobile ? "center" : "left", // Ensure text is centered on mobile
  };

  const featureTitleStyle = {
    color: "#ffd613",
    fontSize: isMobile ? "20px" : "36px", // Ensure the font size is not too small on mobile
    fontFamily: "Poppins, sans-serif",
    fontWeight: 400,
    marginBottom: "12px", // Adjusted for better spacing
  };

  const featureDescriptionStyle = {
    color: "#ffffff",
    fontSize: isMobile ? "16px" : "24px", // Ensure readability on mobile
    fontFamily: "Poppins, sans-serif",
    fontWeight: 400,
  };

  const sections = [
    {
      title: "Community-Centric Approach",
      description:
        "We believe that parking is not just about spaces; it's about people. Our application is more than a platform; it's a community of space listers and users coming together to solve parking challenges. Join our community and be part of a parking revolution.",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7640b95210e3c941d7d2561c368bb7a430a9be527b895fb7921e744129e1ef49?placeholderIfAbsent=true&apiKey=1e478041483c415d8c6ecd66dd4ddacc",
      imageAlt: "Community-Centric Approach",
      reverse: false,
    },
    {
      title: "User-Friendly Platform",
      description:
        "Our intuitive platform is designed with you in mind. Whether you're listing your space or booking a spot, you'll find that our user-friendly interface makes the process seamless and straightforward.",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7455cdbee18cdb0a6cfb08365e4cd86551f8296159a49319ab6966212e969564?placeholderIfAbsent=true&apiKey=1e478041483c415d8c6ecd66dd4ddacc",
      imageAlt: "User-Friendly Platform",
      reverse: true,
    },
    {
      title: "Responsive Support",
      description:
        "Need assistance or have questions? Our dedicated support team is here to help you every step of the way. We're just a message or call away, ready to address your concerns.",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5f57b9939070be1379acfcec9fd1f59c1cbf6c0b6a45edef42b36886321c1b00?placeholderIfAbsent=true&apiKey=1e478041483c415d8c6ecd66dd4ddacc",
      imageAlt: "Responsive Support",
      reverse: false,
    },
  ];

  return (
    <div style={aboutUsWrapperStyle}>
      {sections.map((section, index) => (
        <section key={index} style={featureWrapperStyle(section.reverse)}>
          <img
            src={section.imageSrc}
            alt={section.imageAlt}
            style={featureImageStyle}
          />
          <div style={featureContentStyle}>
            <h3 style={featureTitleStyle}>{section.title}</h3>
            <p style={featureDescriptionStyle}>{section.description}</p>
          </div>
        </section>
      ))}
    </div>
  );
}

export default AboutUs;
