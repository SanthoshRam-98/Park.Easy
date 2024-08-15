import React from "react";
import { bikepark } from "C:/Users/santh/OneDrive/Desktop/park_easy/app/javascript/react/src/Images";
const BikeParking = () => {
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
    headingtag: {
      color: "#f1c40f",
      backgroundColor: "black",
      marginBottom: "80px",
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
      <h1 style={sectionStyles.headingtag}> Our Service </h1>
      <div style={sectionStyles.container}>
        <div>
          <img src={bikepark} style={sectionStyles.image} alt="Bike" />
        </div>
        <div style={sectionStyles.content}>
          <h3 style={sectionStyles.heading}>Bike</h3>
          <p style={sectionStyles.paragraph}>EV Parking & Simple Parking</p>
          <p style={sectionStyles.description}>
            Bike parking can supplement transit ridership both in bustling urban
            corridors and at regional stops and stations, and can replace time-
            and space-consuming on-bus bicycle racks ...
          </p>
          <button style={sectionStyles.button}>Know More</button>
        </div>
      </div>
    </div>
  );
};

export default BikeParking;
