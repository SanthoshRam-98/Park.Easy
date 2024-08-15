import React from "react";

const GetInTouch = () => {
  const styles = {
    section: {
      padding: "80px 40px",
      backgroundColor: "#1a1a1a",
    },
    heading: {
      fontSize: "4em",
      fontWeight: "bold",
      color: "#f1c40f",
      textAlign: "center",
    },
    container: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "48px",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      width: "50%",
      spaceBetween: "16px",
    },
    input: {
      padding: "16px",
      backgroundColor: "#333333",
      color: "#ffffff",
      borderRadius: "8px",
      marginBottom: "16px",
    },
    textarea: {
      padding: "16px",
      backgroundColor: "#333333",
      color: "#ffffff",
      borderRadius: "8px",
      height: "128px",
      marginBottom: "16px",
    },
    button: {
      backgroundColor: "#f1c40f",
      color: "#000000",
      padding: "12px 24px",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "rgba(255, 255, 0, 0.888)",
    },
    contactInfo: {
      display: "flex",
      flexDirection: "column",
      width: "50%",
      spaceBetween: "16px",
    },
    contactItem: {
      display: "flex",
      alignItems: "center",
      spaceBetween: "16px",
      color: "#ffffff",
      marginBottom: "16px",
    },
    icon: {
      color: "#f1c40f",
      marginRight: "16px",
    },
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Get in touch</h2>
      <div style={styles.container}>
        <form style={styles.form}>
          <input type="text" placeholder="Name" style={styles.input} />
          <input type="email" placeholder="Email ID" style={styles.input} />
          <input type="text" placeholder="Phone Number" style={styles.input} />
          <textarea
            placeholder="Your Message"
            style={styles.textarea}
          ></textarea>
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
        <div style={styles.contactInfo}>
          <div style={styles.contactItem}>
            <i className="fas fa-envelope" style={styles.icon}></i>
            <span>example@yourmail.com</span>
          </div>
          <div style={styles.contactItem}>
            <i className="fas fa-phone" style={styles.icon}></i>
            <span>+91-9878543210</span>
          </div>
          <div style={styles.contactItem}>
            <i className="fas fa-map-marker-alt" style={styles.icon}></i>
            <span>Door No., Street Name, City Name, Country - 000000</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
