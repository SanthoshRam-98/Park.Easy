import React from "react";
import { carpark } from "C:/Users/santh/OneDrive/Desktop/park_easy/app/javascript/react/src/Images";

const CarParking = () => {
  const sectionStyles = {
    bikeParkContainer: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "black",
      padding: "80px 32px",
    },
    container: {
      display: "flex",
      alignItems: "center",
      gap: "32px",
      justifyContent: "space-between",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      maxWidth: "50%",
    },
    heading: {
      fontSize: "24px",
      color: "white",
    },
    paragraph: {
      fontSize: "18px",
      color: "#f1c40f",
    },
    description: {
      marginTop: "8px",
      color: "white",
    },
    button: {
      backgroundColor: "#f1c40f",
      color: "#000000",
      padding: "8px 16px",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
      marginTop: "16px",
      marginRight: "auto",
    },
    image: {
      maxWidth: "85%",
    },
  };

  return (
    <div style={sectionStyles.bikeParkContainer}>
      <div style={sectionStyles.container}>
        <div style={sectionStyles.content}>
          <h3 style={sectionStyles.heading}>Car</h3>
          <p style={sectionStyles.paragraph}>EV Parking & Simple Parking</p>
          <p style={sectionStyles.description}>
            A car park is a space specially designed for all road users so that
            they can park their vehicles safely. In addition to being a
            functional place to park, parking is also an infrastructure that
            reduces the CO2 emissions of ...
          </p>
          <button style={sectionStyles.button}>Know More</button>
        </div>
        <div>
          <img src={carpark} style={sectionStyles.image} alt="Bike" />
        </div>
      </div>
    </div>
  );
};

export default CarParking;
