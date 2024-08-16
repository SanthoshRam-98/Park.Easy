import React from "react";
import { EnvelopeFill, TelephoneFill, GeoAltFill } from "react-bootstrap-icons"; // Importing Bootstrap icons

const GetInTouch = () => {
  const sectionStyles = {
    container: {
      padding: "80px 32px",
      backgroundColor: "black",
      color: "white",
      textAlign: "center",
    },
    heading: {
      fontSize: "4vw", // Responsive font size
      fontWeight: "bold",
      color: "#f1c40f",
      marginBottom: "32px",
      textAlign: "start",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      width: "600px", // Responsive form width
      margin: "0 auto", // Center the form
    },
    input: {
      padding: "12px",
      borderRadius: "8px",
      border: "1px solid #ddd",
      fontSize: "16px",
      //width: "100%", // Full-width inputs
      backgroundColor: "white", // Set input background color
      color: "black", // Set input text color
    },
    button: {
      backgroundColor: "#f1c40f",
      color: "#000000",
      padding: "12px 20px",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
      marginTop: "16px",
      alignSelf: "start", // Center the button
    },
    info: {
      marginTop: "32px",
      color: "#f1c40f",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start", // Align text and icons to the left
      gap: "16px",
      marginLeft: "auto",
      marginRight: "auto",
    },
    iconText: {
      display: "flex",
      alignItems: "center",
      gap: "8px", // Space between icon and text
    },
    icon: {
      fill: "#f1c40f", // Yellow fill for icons
    },
    formdiv: {
      display: "flex",
    },
    spanElement: {
      color: "white",
    },
  };

  return (
    <section style={sectionStyles.container} id="get-in-touch">
      <h2 style={sectionStyles.heading}>Get in Touch</h2>
      <div style={sectionStyles.formdiv}>
        <form style={sectionStyles.form}>
          <input
            type="text"
            placeholder="Your Name"
            style={sectionStyles.input}
          />
          <input
            type="email"
            placeholder="Your Email"
            style={sectionStyles.input}
          />
          <input
            type="tel"
            placeholder="Your Number"
            style={sectionStyles.input}
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            style={sectionStyles.input}
          />
          <button style={sectionStyles.button} type="submit">
            Send Message
          </button>
        </form>
        <div style={sectionStyles.info}>
          <div style={sectionStyles.iconText}>
            <EnvelopeFill style={sectionStyles.icon} />
            <span style={sectionStyles.spanElement}>
              Email: info@parkeasy.com
            </span>
          </div>
          <div style={sectionStyles.iconText}>
            <TelephoneFill style={sectionStyles.icon} />
            <span style={sectionStyles.spanElement}>Phone: +1 234 567 890</span>
          </div>
          <div style={sectionStyles.iconText}>
            <GeoAltFill style={sectionStyles.icon} />
            <span style={sectionStyles.spanElement}>
              Door No., Street Name, City Name, Country - 000000
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
