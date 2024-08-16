import React from "react";
import { PersonFill } from "react-bootstrap-icons"; // Importing the male profile icon

const AboutUs = () => {
  const sectionStyles = {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "80px 32px",
      backgroundColor: "black",
      flexWrap: "wrap", // Allow wrapping for smaller screens
    },
    content: {
      maxWidth: "75%",
      color: "#ffffff",
      marginBottom: "32px", // Add margin for spacing on smaller screens
    },
    heading: {
      fontSize: "4vw", // Responsive font size based on viewport width
      fontWeight: "bold",
      color: "#f1c40f",
      marginBottom: "16px",
    },
    paragraph: {
      fontSize: "1.8vw",
      marginTop: "16px",
    },
    button: {
      backgroundColor: "#f1c40f",
      color: "#000000",
      padding: "8px 16px",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
      marginTop: "32px",
    },
    iconContainer: {
      display: "flex",
      justifyContent: "center",
      marginTop: "32px",
    },
    icon: {
      fontSize: "10vw", // Large icon size, responsive to viewport width
      color: "#f1c40f",
    },
  };

  return (
    <section style={sectionStyles.container} id="about-us">
      <div style={sectionStyles.iconContainer}>
        <PersonFill style={sectionStyles.icon} />
      </div>
      <div style={sectionStyles.content}>
        <h2 style={sectionStyles.heading}>About Park.Easy</h2>
        <p style={sectionStyles.paragraph}>
          Park.Easy is a leading solution for all your parking needs. With a
          focus on convenience, security, and innovation, we provide users with
          real-time parking information, enabling hassle-free parking
          experiences.
        </p>
        <button style={sectionStyles.button}>Learn More</button>
      </div>
    </section>
  );
};

export default AboutUs;
