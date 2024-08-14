import React from "react";
import { carpark } from "C:/Users/santh/OneDrive/Desktop/park_easy/app/javascript/react/src/Images";

const CarParking = () => {
  const styles = {
    serviceContainer: {
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
    bikeEV: {
      display: "flex",
      justifyContent: "space-around",
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
    buttonHover: {
      backgroundColor: "rgba(255, 255, 0, 0.888)",
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
    },
  };

  return (
    <div style={styles.serviceContainer}>
      <div style={styles.bikeEV}>
        <div style={styles.textSection}>
          <p style={styles.paragraph}> Car </p>
          <h3 style={styles.subHeading}>EV Parking & Simple Parking</h3>
          <p style={styles.paragraph}>
            A car park is a space specially designed for all road users so that
            they can park their vehicle safely.In addition to being a functional
            place to park, parking is also an infrastructure that reduces the
            CO2 emissions of ...
          </p>
          <div>
            <button
              style={styles.button}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor =
                  styles.buttonHover.backgroundColor)
              }
            >
              Know More
            </button>
          </div>
        </div>
        <div style={styles.imageSection}>
          <img
            src={carpark}
            alt="Service Illustration"
            style={styles.serviceImage}
          />
        </div>
      </div>
    </div>
  );
};

export default CarParking;
