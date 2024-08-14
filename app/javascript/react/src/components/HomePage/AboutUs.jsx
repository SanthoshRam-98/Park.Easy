import React from "react";

const AboutUs = () => {
  const styles = {
    container: {
      padding: "50px 0",
      backgroundColor: "rgb(0 0 0 / 92%)",
      color: "#fff",
      textAlign: "center",
    },
    heading: {
      fontSize: "4em",
      color: "#ffd700",
      marginBottom: "20px",
    },
    text: {
      fontSize: "2em",
      maxWidth: "70%",
      margin: "0 auto",
      color: "#ddd",
    },
    button: {
      marginTop: "30px",
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
    buttonHover: {
      backgroundColor: "rgba(255, 255, 0, 0.888)",
    },
    icon: {
      fontSize: "3em",
      marginBottom: "20px",
      color: "#ffd700",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.icon}>👥</div>
      <h2 style={styles.heading}>About us</h2>
      <p style={styles.text}>
        Welcome to Park.Easy, we know how important it is to have hassle-free
        parking, whether you're a car owner looking for a safe place to park
        your vehicle or a traveler looking for convenient parking options. Our
        goal is to make your parking experience as seamless and stress-free as
        possible.
      </p>
      <button
        style={styles.button}
        onMouseOver={(e) =>
          (e.currentTarget.style.backgroundColor =
            styles.buttonHover.backgroundColor)
        }
      >
        Explore More
      </button>
    </div>
  );
};

export default AboutUs;
