import React from "react";

const Testimonial = () => {
  const styles = {
    testimonialContainer: {
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
    testimonialCards: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      margin: "0 auto",
      maxWidth: "80%",
    },
    card: {
      backgroundColor: "#333",
      padding: "20px",
      borderRadius: "10px",
      maxWidth: "300px",
      position: "relative",
      color: "#ddd",
      textAlign: "left",
    },
    cardYellow: {
      backgroundColor: "#ff0",
      color: "#000",
    },
    name: {
      fontSize: "2em",
      color: "#fff",
      marginTop: "20px",
    },
    text: {
      fontSize: "1.5em",
      marginTop: "10px",
    },
    icon: {
      fontSize: "3em",
      marginBottom: "20px",
      color: "#ffd700",
    },
    bubble: {
      position: "absolute",
      top: "-10px",
      left: "20px",
      width: "30px",
      height: "30px",
      backgroundColor: "#333",
      transform: "rotate(45deg)",
    },
    bubbleYellow: {
      backgroundColor: "#ff0",
    },
  };

  return (
    <div style={styles.testimonialContainer}>
      <h2 style={styles.heading}>Testimonials</h2>
      <div style={styles.testimonialCards}>
        <div style={styles.card}>
          <div style={styles.bubble}></div>
          <div style={styles.icon}>👥</div>
          <h3 style={styles.name}>Charlie</h3>
          <p style={styles.text}>
            I tried Park.Easy car wash service on the recommendation of a
            friend, and there has been no looking back since then.
          </p>
        </div>
        <div style={{ ...styles.card, ...styles.cardYellow }}>
          <div style={{ ...styles.bubble, ...styles.bubbleYellow }}></div>
          <div style={styles.icon}>👥</div>
          <h3 style={styles.name}>Kumar</h3>
          <p style={styles.text}>
            I can quickly check for open spots and secure one with ease. The
            convenience is unmatched.
          </p>
        </div>
        <div style={styles.card}>
          <div style={styles.bubble}></div>
          <div style={styles.icon}>👥</div>
          <h3 style={styles.name}>Jessica</h3>
          <p style={styles.text}>
            Park.Easy has been a lifesaver in urban areas with limited parking
            options. I no longer waste time driving around aimlessly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
