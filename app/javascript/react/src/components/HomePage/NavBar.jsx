import React, { useState } from "react";

function Header() {
  // State to manage which link is hovered
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleMouseEnter = (link) => {
    setHoveredLink(link);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  const styles = {
    mainHeader: {
      backgroundColor: "#131212",
      padding: "43px 70px 25px",
      width: "100%",
      position: "sticky",
      top: 0,
      zIndex: 1000,
    },
    headerContent: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    logo: {
      color: "#fff",
      fontSize: "32px",
      fontWeight: 600,
      fontFamily: "Poppins, sans-serif",
      letterSpacing: "4.8px",
    },
    mainNav: {
      display: "flex",
      alignItems: "center",
    },
    navList: {
      display: "flex",
      gap: "30px",
      listStyle: "none",
      margin: 0,
      padding: 0,
    },
    navLink: (link) => ({
      color: hoveredLink === link ? "#ffd613" : "#b5b5b5",
      fontSize: "20px",
      fontWeight: 400,
      fontFamily: "Poppins, sans-serif",
      textDecoration: "none",
      transition: "color 0.3s ease, border-bottom 0.3s ease",
      borderBottom: hoveredLink === link ? "2px solid #ffd613" : "none",
    }),
    loginBtn: {
      backgroundColor: "#ffd613",
      border: "none",
      borderRadius: "50px",
      color: "#000",
      fontSize: "18px",
      fontWeight: 500,
      fontFamily: "Poppins, sans-serif",
      padding: "11px 60px",
      marginLeft: "30px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    loginBtnHover: {
      backgroundColor: "#e0c20b",
    },
    "@media (max-width: 991px)": {
      mainHeader: {
        padding: "20px",
      },
      headerContent: {
        flexDirection: "column",
        alignItems: "flex-start",
      },
      mainNav: {
        marginTop: "20px",
        flexDirection: "column",
        alignItems: "flex-start",
      },
      navList: {
        flexDirection: "column",
        gap: "10px",
      },
      loginBtn: {
        marginLeft: 0,
        marginTop: "20px",
      },
    },
  };

  return (
    <header style={styles.mainHeader}>
      <div style={styles.headerContent}>
        <h1 style={styles.logo}>Park.Easy</h1>
        <nav style={styles.mainNav}>
          <ul style={styles.navList}>
            <li>
              <a
                href="/"
                style={styles.navLink("home")}
                onMouseEnter={() => handleMouseEnter("home")}
                onMouseLeave={handleMouseLeave}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/parking"
                style={styles.navLink("parking")}
                onMouseEnter={() => handleMouseEnter("parking")}
                onMouseLeave={handleMouseLeave}
              >
                Parking
              </a>
            </li>
            <li>
              <a
                href="/list-space"
                style={styles.navLink("list-space")}
                onMouseEnter={() => handleMouseEnter("list-space")}
                onMouseLeave={handleMouseLeave}
              >
                List your Space
              </a>
            </li>
            <li>
              <a
                href="/plan-pricing"
                style={styles.navLink("plan-pricing")}
                onMouseEnter={() => handleMouseEnter("plan-pricing")}
                onMouseLeave={handleMouseLeave}
              >
                Plan & Pricing
              </a>
            </li>
            <li>
              <a
                href="/about"
                style={styles.navLink("about")}
                onMouseEnter={() => handleMouseEnter("about")}
                onMouseLeave={handleMouseLeave}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/contact"
                style={styles.navLink("contact")}
                onMouseEnter={() => handleMouseEnter("contact")}
                onMouseLeave={handleMouseLeave}
              >
                Contact Us
              </a>
            </li>
          </ul>
          <button style={styles.loginBtn}>Log In</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
