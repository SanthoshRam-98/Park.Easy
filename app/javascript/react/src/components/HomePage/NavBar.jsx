import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { useState } from "react";

// Define styles as JavaScript objects
const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    backgroundColor: "black",
    alignItems: "center",
  },
  navHeader: {
    color: "white",
    textDecoration: "none",
    fontSize: "1.6em",
    fontWeight: "bold",
  },
  navSection: {
    color: "white",
    textDecoration: "none",
    position: "relative",
    fontSize: "1.2em",
    transition: "color 0.3s ease",
  },
  navButton: {
    textDecoration: "none",
    backgroundColor: "yellow",
    border: "none",
    padding: "6px 44px",
    textAlign: "center",
    display: "inline-block",
    fontSize: "16px",
    borderRadius: "32px",
    transition: "background-color 0.3s ease, color 0.3s ease",
    color: "black",
    fontSize: "1.2em",
  },
  hoverNavSection: {
    color: "yellow",
  },
  hoverNavSectionAfter: {
    width: "100%",
  },
  hoverNavButton: {
    backgroundColor: "rgba(255, 255, 0, 0.888)",
  },
};

const NavBar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseOver = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseOut = () => {
    setHoveredIndex(null);
  };

  return (
    <div id="container">
      <div style={styles.navbar}>
        <a href="#" style={styles.navHeader}>
          Park.Easy
        </a>
        <a
          href="#"
          style={{
            ...styles.navSection,
            ...(hoveredIndex === 0 ? styles.hoverNavSection : {}),
            position: "relative",
          }}
          onMouseOver={() => handleMouseOver(0)}
          onMouseOut={handleMouseOut}
        >
          Home
          <div
            style={{
              position: "absolute",
              left: 0,
              bottom: "-6px",
              width: hoveredIndex === 0 ? "100%" : 0,
              height: "2px",
              backgroundColor: "yellow",
              transition: "width 0.3s ease",
            }}
          />
        </a>
        <a
          href="#"
          style={{
            ...styles.navSection,
            ...(hoveredIndex === 1 ? styles.hoverNavSection : {}),
            position: "relative",
          }}
          onMouseOver={() => handleMouseOver(1)}
          onMouseOut={handleMouseOut}
        >
          Parking
          <div
            style={{
              position: "absolute",
              left: 0,
              bottom: "-6px",
              width: hoveredIndex === 1 ? "100%" : 0,
              height: "2px",
              backgroundColor: "yellow",
              transition: "width 0.3s ease",
            }}
          />
        </a>
        <a
          href="#"
          style={{
            ...styles.navSection,
            ...(hoveredIndex === 2 ? styles.hoverNavSection : {}),
            position: "relative",
          }}
          onMouseOver={() => handleMouseOver(2)}
          onMouseOut={handleMouseOut}
        >
          List Your Space
          <div
            style={{
              position: "absolute",
              left: 0,
              bottom: "-6px",
              width: hoveredIndex === 2 ? "100%" : 0,
              height: "2px",
              backgroundColor: "yellow",
              transition: "width 0.3s ease",
            }}
          />
        </a>
        <a
          href="#"
          style={{
            ...styles.navSection,
            ...(hoveredIndex === 3 ? styles.hoverNavSection : {}),
            position: "relative",
          }}
          onMouseOver={() => handleMouseOver(3)}
          onMouseOut={handleMouseOut}
        >
          Plan & Pricing
          <div
            style={{
              position: "absolute",
              left: 0,
              bottom: "-6px",
              width: hoveredIndex === 3 ? "100%" : 0,
              height: "2px",
              backgroundColor: "yellow",
              transition: "width 0.3s ease",
            }}
          />
        </a>
        <a
          href="#"
          style={{
            ...styles.navSection,
            ...(hoveredIndex === 4 ? styles.hoverNavSection : {}),
            position: "relative",
          }}
          onMouseOver={() => handleMouseOver(4)}
          onMouseOut={handleMouseOut}
        >
          About Us
          <div
            style={{
              position: "absolute",
              left: 0,
              bottom: "-6px",
              width: hoveredIndex === 4 ? "100%" : 0,
              height: "2px",
              backgroundColor: "yellow",
              transition: "width 0.3s ease",
            }}
          />
        </a>
        <a
          href="#"
          style={{
            ...styles.navSection,
            ...(hoveredIndex === 5 ? styles.hoverNavSection : {}),
            position: "relative",
          }}
          onMouseOver={() => handleMouseOver(5)}
          onMouseOut={handleMouseOut}
        >
          Contact Us
          <div
            style={{
              position: "absolute",
              left: 0,
              bottom: "-6px",
              width: hoveredIndex === 5 ? "100%" : 0,
              height: "2px",
              backgroundColor: "yellow",
              transition: "width 0.3s ease",
            }}
          />
        </a>
        <a
          href="#"
          style={styles.navButton}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor =
              styles.hoverNavButton.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor =
              styles.navButton.backgroundColor)
          }
        >
          Log In
        </a>
      </div>
    </div>
  );
};

// Render NavBar component
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("welcome");
  const root = ReactDOM.createRoot(container);
  root.render(<NavBar />);
});

export default NavBar;
