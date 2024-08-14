import React from "react";
import { car1 } from "C:/Users/santh/OneDrive/Desktop/park_easy/app/javascript/react/src/Images";

const CarArticle = () => {
  const styles = {
    carArticle: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      padding: "20px 40px", // Adjust padding to match NavBar's padding
      backgroundColor: "rgb(0 0 0 / 92%)",
      color: "#fff",
      //maxWidth: "1200px", // Adjust based on the NavBar width
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
    paragraph: {
      fontSize: "2em",
      marginTop: "20px",
      color: "#ddd",
    },
    buttons: {
      display: "flex",
      columnGap: "28px",
    },
    downloadButton: {
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
      backgroundImage:
        "linear-gradient(352deg, rgba(33, 37, 41, 0.68), rgba(0, 0, 0, 0.21))",
    },
    downloadButtonHover: {
      backgroundColor: "rgba(255, 255, 0, 0.888)",
    },
    contactButton: {
      textDecoration: "none",
      backgroundColor: "#333",
      color: "#fff",
      border: "1px solid #fff",
      padding: "6px 44px",
      textAlign: "center",
      display: "inline-block",
      fontSize: "1.2em",
      borderRadius: "32px",
      transition: "background-color 0.3s ease, color 0.3s ease",
    },
    imageSection: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      maxWidth: "75%",
    },
    carImage: {
      maxWidth: "80%",
      height: "auto",
      borderRadius: "10px",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
    },
  };

  return (
    <div id="container">
      <div style={styles.carArticle}>
        <div style={styles.textSection}>
          <h1 style={styles.heading}>
            Simplify Your Car Experience with Park.Easy
          </h1>
          <p style={styles.paragraph}>
            Park.Easy is an innovative app designed to simplify parking
            experiences for users by providing real-time information and
            seamless parking solutions.
          </p>
          <div style={styles.buttons}>
            <button
              style={styles.downloadButton}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor =
                  styles.downloadButtonHover.backgroundColor)
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor =
                  styles.downloadButton.backgroundColor)
              }
            >
              Download Now
            </button>
            <button style={styles.contactButton}>Contact us</button>
          </div>
        </div>
        <div style={styles.imageSection}>
          <img src={car1} alt="Car 1" style={styles.carImage} />
        </div>
      </div>
    </div>
  );
};

export default CarArticle;
