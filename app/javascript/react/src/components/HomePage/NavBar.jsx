import React from "react";

const NavBar = () => {
  const navStyles = {
    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "16px 32px",
      backgroundColor: "#1a1a1a",
      flexWrap: "wrap", // Make the container wrap for smaller screens
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#ffffff",
    },
    navLinks: {
      display: "flex",
      gap: "24px",
      flexWrap: "wrap",
      justifyContent: "flex-end", // Align links to the right
    },
    link: {
      color: "#ffffff",
      textDecoration: "none",
      fontSize: "16px",
      position: "relative",
      fontSize: "1.2em", // Ensure only one instance of fontSize
      transition: "color 0.3s ease",
    },
    linkHover: {
      color: "#f1c40f", // Yellow color for hover
    },
    linkAfter: {
      content: "''",
      position: "absolute",
      left: 0,
      bottom: -2,
      width: "100%",
      height: "2px",
      backgroundColor: "#f1c40f", // Yellow color for the underline
      transform: "scaleX(0)",
      transition: "transform 0.3s ease",
    },
    linkHoverAfter: {
      transform: "scaleX(1)",
    },
    button: {
      backgroundColor: "#f1c40f",
      color: "#000000",
      padding: "8px 16px",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
      marginTop: "8px",
    },
    buttonHover: {
      backgroundColor: "rgba(255, 255, 0, 0.888)", // Background color on hover
    },
  };

  return (
    <header style={navStyles.container}>
      <div style={navStyles.title}>Park.Easy</div>
      <nav style={navStyles.navLinks}>
        {[
          "Home",
          "Parking",
          "List your Space",
          "Plan & Pricing",
          "About Us",
          "Contact Us",
        ].map((text, index) => (
          <div key={index} style={{ position: "relative" }}>
            <a
              href="#"
              style={navStyles.link}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = navStyles.linkHover.color;
                e.currentTarget.querySelector("span").style.transform =
                  navStyles.linkHoverAfter.transform;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.querySelector("span").style.transform =
                  "scaleX(0)";
              }}
            >
              {text}
              <span style={navStyles.linkAfter}></span>
            </a>
          </div>
        ))}
      </nav>
      <button
        style={navStyles.button}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor =
            navStyles.buttonHover.backgroundColor)
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "#f1c40f")
        }
      >
        Log In
      </button>
    </header>
  );
};

export default NavBar;
