import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Google,
} from "react-bootstrap-icons"; // Importing Bootstrap Icons

const Footer = () => {
  const footerStyles = {
    container: {
      backgroundColor: "#1a1a1a",
      padding: "40px 32px",
      color: "#ffffff",
      textAlign: "center", // Center content for smaller screens
    },
    links: {
      display: "flex",
      justifyContent: "center", // Center links on smaller screens
      marginBottom: "16px",
      flexWrap: "wrap", // Allow wrapping for smaller screens
      gap: "16px", // Add space between links
    },
    link: {
      color: "#ffffff",
      textDecoration: "none",
    },
    socialIcons: {
      display: "flex",
      justifyContent: "center", // Center icons on smaller screens
      gap: "16px", // Add space between icons
      marginBottom: "16px",
    },
    icon: {
      color: "#f1c40f", // Yellow fill for icons
      fontSize: "24px",
      cursor: "pointer",
    },
  };

  return (
    <footer style={footerStyles.container}>
      <div style={footerStyles.links}>
        <a href="#" style={footerStyles.link}>
          Privacy Policy
        </a>
        <a href="#" style={footerStyles.link}>
          Terms of Service
        </a>
        <a href="#" style={footerStyles.link}>
          Contact Us
        </a>
      </div>
      <div style={footerStyles.socialIcons}>
        <Facebook style={footerStyles.icon} />
        <Twitter style={footerStyles.icon} />
        <Instagram style={footerStyles.icon} />
        <Youtube style={footerStyles.icon} />
        <Google style={footerStyles.icon} />
      </div>
      <p>&copy; 2024 Park.Easy. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
