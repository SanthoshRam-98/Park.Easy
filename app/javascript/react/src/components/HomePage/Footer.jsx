import React from "react";

const Footer = () => {
  const styles = {
    container: {
      padding: "30px 0",
      backgroundColor: "#000",
      color: "#fff",
      textAlign: "center",
    },
    footerContent: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      flexWrap: "wrap",
      maxWidth: "1000px",
      margin: "0 auto",
      padding: "20px 0",
      borderTop: "1px solid #333",
    },
    column: {
      marginBottom: "20px",
      textAlign: "left",
    },
    title: {
      fontSize: "2em",
      marginBottom: "10px",
    },
    listItem: {
      fontSize: "1.5em",
      color: "#ddd",
      marginBottom: "10px",
    },
    socialIcons: {
      fontSize: "2em",
      color: "#ffd700",
      margin: "0 10px",
    },
    copyright: {
      marginTop: "30px",
      fontSize: "1.5em",
      color: "#777",
    },
  };

  return (
    <footer style={styles.container}>
      <div style={styles.footerContent}>
        <div style={styles.column}>
          <h3 style={styles.title}>Menu</h3>
          <p style={styles.listItem}>Home</p>
          <p style={styles.listItem}>About Us</p>
          <p style={styles.listItem}>Parking</p>
          <p style={styles.listItem}>List your Space</p>
          <p style={styles.listItem}>Plan & Pricing</p>
          <p style={styles.listItem}>Contact</p>
        </div>
        <div style={styles.column}>
          <h3 style={styles.title}>Account</h3>
          <p style={styles.listItem}>Log In</p>
          <p style={styles.listItem}>Sign Up</p>
        </div>
        <div style={styles.column}>
          <h3 style={styles.title}>Follow Us</h3>
          <span style={styles.socialIcons}>📘</span>
          <span style={styles.socialIcons}>📸</span>
          <span style={styles.socialIcons}>🐦</span>
          <span style={styles.socialIcons}>▶️</span>
          <span style={styles.socialIcons}>📧</span>
        </div>
      </div>
      <div style={styles.copyright}>© 2024 by Park.Easy</div>
    </footer>
  );
};

export default Footer;
