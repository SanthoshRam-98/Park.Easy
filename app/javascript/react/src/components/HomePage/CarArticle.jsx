import React from "react";
import { car1 } from "C:/Users/santh/OneDrive/Desktop/park_easy/app/javascript/react/src/Images";
const CarArticle = () => {
  const sectionStyles = {
    container: {
      display: "flex",
      alignItems: "center",
      padding: "80px 32px",
      backgroundColor: "black",
    },
    heading: {
      fontSize: "40px",
      fontWeight: "bold",
      color: "#f1c40f",
    },
    paragraph: {
      fontSize: "18px",
      marginTop: "16px",
      maxWidth: "800px",
      color: "white",
    },
    buttonContainer: {
      display: "flex",
      gap: "16px",
      marginTop: "32px",
    },
    button: {
      backgroundColor: "#ffd700",
      color: "#0e0e0e",
      border: "none",
      borderRadius: "5px",
      padding: "10px 20px",
      cursor: "pointer",
    },
    secondaryButton: {
      backgroundColor: "transparent",
      color: "#ffffff",
      border: "2px solid #ffffff",
      borderRadius: "5px",
      padding: "10px 20px",
      cursor: "pointer",
    },
    imageContainer: {
      display: "flex",
      justifyContent: "space-around",
    },
    image: { maxWidth: "65%" },
  };

  return (
    <section style={sectionStyles.container}>
      <div style={sectionStyles.headingarea}>
        <h1 style={sectionStyles.heading}>
          Simplify Your Car Experience with Park.Easy
        </h1>
        <p style={sectionStyles.paragraph}>
          Park.Easy is an innovative app designed to simplify parking
          experiences for users by providing real-time information and seamless
          parking solutions.
        </p>
        <div style={sectionStyles.buttonContainer}>
          <button style={sectionStyles.button}>Download Now</button>
          <button style={sectionStyles.secondaryButton}>Contact us</button>
        </div>
      </div>
      <div style={sectionStyles.imageContainer}>
        <img src={car1} style={sectionStyles.image} alt="Sample" />
      </div>
    </section>
  );
};

export default CarArticle;
