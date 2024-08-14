import React from "react";

const GetInTouch = () => {
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
      marginBottom: "40px",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      maxWidth: "600px",
      margin: "0 auto",
    },
    input: {
      padding: "15px",
      fontSize: "1.5em",
      marginBottom: "20px",
      borderRadius: "8px",
      border: "1px solid #444",
      backgroundColor: "#333",
      color: "#ddd",
    },
    textarea: {
      padding: "15px",
      fontSize: "1.5em",
      marginBottom: "20px",
      borderRadius: "8px",
      border: "1px solid #444",
      backgroundColor: "#333",
      color: "#ddd",
      height: "150px",
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
      backgroundImage:
        "linear-gradient(352deg, rgba(33, 37, 41, 0.68), rgba(0, 0, 0, 0.21))",
    },
    buttonHover: {
      backgroundColor: "rgba(255, 255, 0, 0.888)",
    },
    contactDetails: {
      marginTop: "40px",
      fontSize: "1.5em",
      textAlign: "left",
      color: "#ddd",
      maxWidth: "600px",
      margin: "0 auto",
    },
    icon: {
      marginRight: "10px",
      color: "#ffd700",
      fontSize: "2em",
    },
    detailItem: {
      marginBottom: "20px",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Get in touch</h2>
      <form style={styles.form}>
        <input type="text" placeholder="Name" style={styles.input} />
        <input type="email" placeholder="Email ID" style={styles.input} />
        <input type="tel" placeholder="Phone Number" style={styles.input} />
        <textarea placeholder="Your Message" style={styles.textarea}></textarea>
        <button
          style={styles.button}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor =
              styles.buttonHover.backgroundColor)
          }
        >
          Submit
        </button>
      </form>
      <div style={styles.contactDetails}>
        <div style={styles.detailItem}>
          <span style={styles.icon}>📧</span>
          example@yourmail.com
        </div>
        <div style={styles.detailItem}>
          <span style={styles.icon}>📞</span>
          +91 - 9876543210
        </div>
        <div style={styles.detailItem}>
          <span style={styles.icon}>📍</span>
          Door No., Street Name, City Name, Country - 000000
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
