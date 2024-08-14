import React from "react";

const Service = () => {
  const styles = {
    serviceContainer: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      padding: "20px 40px", // Same padding as CarArticle to match
      backgroundColor: "rgb(0 0 0 / 92%)",
      color: "#fff",
      margin: "0 auto", // Centering the content
    },
    textSection: {
      maxWidth: "40%",
      padding: "80px",
    },
    heading: {
      fontSize: "4em",
      color: "#ff0",
    },
    subHeading: {
      fontSize: "2.5em",
      color: "#ffd700",
      marginTop: "20px",
    },
    paragraph: {
      fontSize: "2em",
      marginTop: "20px",
      color: "#ddd",
    },
    button: {
      textDecoration: "none",
      backgroundColor: "#ff0",
      border: "none",
      padding: "20px 45px",
      textAlign: "center",
      display: "inline-block",
      fontSize: "1.2em",
      borderRadius: "32px",
      transition: "background-color 0.3s ease, color 0.3s ease",
      color: "#000",
      marginTop: "20px",
      backgroundImage:
        "linear-gradient(352deg, rgba(33, 37, 41, 0.68), rgba(0, 0, 0, 0.21))",
    },
    imageSection: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      maxWidth: "75%",
    },
    serviceImage: {
      maxWidth: "80%",
      height: "auto",
      borderRadius: "10px",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
    },
  };

  return (
    <div style={styles.serviceContainer}>
      <div style={styles.imageSection}>
        <img
          src="/path-to-your-image/service-image.png"
          alt="Service Illustration"
          style={styles.serviceImage}
        />
      </div>
      <div style={styles.textSection}>
        <h2 style={styles.heading}>Our Services</h2>
        <h3 style={styles.subHeading}>EV Parking & Simple Parking</h3>
        <p style={styles.paragraph}>
          Bike parking can supplement transit ridership both in bustling urban
          corridors and at regional stops and stations, and can replace time-
          and space-consuming on-bus bicycle racks...
        </p>
        <button style={styles.button}>Know More</button>
      </div>
    </div>
  );
};

export default Service;
