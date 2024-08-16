import React from "react";
import { PersonFill } from "react-bootstrap-icons"; // Importing a Bootstrap icon

const Testimonial = () => {
  const sectionStyles = {
    testimonialContainer: {
      backgroundColor: "black",
      padding: "80px 32px",
    },
    headingtag: {
      color: "#f1c40f",
      backgroundColor: "black",
      marginBottom: "80px",
      fontSize: "4vw",
    },
    container: {
      display: "flex",
      gap: "16px",
      flexWrap: "wrap",
      justifyContent: "space-between",
    },
    card: {
      padding: "24px",
      borderRadius: "8px",
      color: "#ffffff",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      maxWidth: "300px",
      margin: "8px",
    },
    profileContainer: {
      display: "flex",
      alignItems: "center",
      marginBottom: "16px",
    },
    icon: {
      fontSize: "24px",
      color: "#f1c40f",
      marginRight: "16px",
    },
    name: {
      fontSize: "18px",
      fontWeight: "bold",
      color: "#f1c40f",
    },
    message: {
      fontStyle: "italic",
    },
    greyBackground: {
      backgroundColor: "#1a1a1a",
    },
    yellowBackground: {
      backgroundColor: "#f1c40f",
      color: "black",
    },
    carddiv: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  };

  return (
    <section style={sectionStyles.testimonialContainer} id="testimonial">
      <div>
        <h1 style={sectionStyles.headingtag}>Testimonials</h1>
      </div>
      <div style={sectionStyles.container}>
        <div style={sectionStyles.carddiv}>
          <div style={sectionStyles.profileContainer}>
            <PersonFill style={sectionStyles.icon} />
            <div style={sectionStyles.name}>Charlie</div>
          </div>
          <div
            style={{ ...sectionStyles.card, ...sectionStyles.greyBackground }}
          >
            <p style={sectionStyles.message}>
              I tried Park.Easy car wash service on the recommendation of a
              friend, and there has been no looking back since then.
            </p>
          </div>
        </div>
        <div style={sectionStyles.carddiv}>
          <div style={sectionStyles.profileContainer}>
            <PersonFill style={sectionStyles.icon} />
            <div style={sectionStyles.name}>Kumar</div>
          </div>
          <div
            style={{ ...sectionStyles.card, ...sectionStyles.yellowBackground }}
          >
            <p style={sectionStyles.message}>
              I can quickly check for open spots and secure one with ease. The
              convenience is unmatched.
            </p>
          </div>
        </div>
        <div style={sectionStyles.carddiv}>
          <div style={sectionStyles.profileContainer}>
            <PersonFill style={sectionStyles.icon} />
            <div style={sectionStyles.name}>Jessica</div>
          </div>
          <div
            style={{ ...sectionStyles.card, ...sectionStyles.greyBackground }}
          >
            <p style={sectionStyles.message}>
              Park.Easy has been a lifesaver in urban areas with limited parking
              options. I no longer waste time driving around aimlessly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
