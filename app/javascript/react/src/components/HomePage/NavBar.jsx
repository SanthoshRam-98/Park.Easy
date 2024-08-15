import React from "react";

const NavBar = () => {
  const navStyles = {
    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "16px 32px",
      backgroundColor: "#1a1a1a",
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#ffffff",
    },
    navLinks: {
      display: "flex",
      gap: "24px",
    },
    link: {
      color: "#ffffff",
      textDecoration: "none",
    },
    button: {
      backgroundColor: "#f1c40f",
      color: "#000000",
      padding: "8px 16px",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
    },
  };

  return (
    <header style={navStyles.container}>
      <div style={navStyles.title}>Park.Easy</div>
      <nav style={navStyles.navLinks}>
        <a href="#" style={navStyles.link}>
          Home
        </a>
        <a href="#" style={navStyles.link}>
          Parking
        </a>
        <a href="#" style={navStyles.link}>
          List your Space
        </a>
        <a href="#" style={navStyles.link}>
          Plan & Pricing
        </a>
        <a href="#" style={navStyles.link}>
          About Us
        </a>
        <a href="#" style={navStyles.link}>
          Contact Us
        </a>
      </nav>
      <button style={navStyles.button}>Log In</button>
    </header>
  );
};

export default NavBar;
