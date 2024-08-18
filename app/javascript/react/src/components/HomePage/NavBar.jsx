import React, { useState, useEffect } from "react";

function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Update active link based on current path
    const path = window.location.pathname;
    const linkMap = {
      "/": "home",
      "/parking": "parking",
      "/list_space": "list_space",
      "/plan_pricing": "plan_pricing",
      "/about_us": "about",
      "/contact_us": "contact",
    };
    setActiveLink(linkMap[path] || "home");
  }, []);

  const handleMouseEnter = (link) => {
    setHoveredLink(link);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  const handleNavClick = (link, href) => {
    setActiveLink(link);
    window.location.href = href; // Navigate to the new page
  };

  const styles = {
    mainHeader: {
      backgroundColor: "#131212",
      padding: isMobile ? "20px" : "43px 70px 25px",
      width: "100%",
      position: "sticky",
      top: 0,
      zIndex: 1000,
    },
    headerContent: {
      display: "flex",
      justifyContent: isMobile ? "flex-start" : "space-between",
      alignItems: "center",
      flexDirection: isMobile ? "column" : "row",
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
      flexDirection: isMobile ? "column" : "row",
      marginTop: isMobile ? "20px" : "0",
    },
    navList: {
      display: "flex",
      gap: isMobile ? "10px" : "30px",
      listStyle: "none",
      margin: 0,
      padding: 0,
      flexDirection: isMobile ? "column" : "row",
    },
    navLink: (link) => ({
      color:
        hoveredLink === link || activeLink === link ? "#ffd613" : "#b5b5b5",
      fontSize: "20px",
      fontWeight: 400,
      fontFamily: "Poppins, sans-serif",
      textDecoration:
        hoveredLink === link || activeLink === link ? "underline" : "none",
      transition: "color 0.3s ease, textDecoration 0.3s ease",
      cursor: "pointer",
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
      marginLeft: isMobile ? "0" : "30px",
      marginTop: isMobile ? "20px" : "0",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    loginBtnHover: {
      backgroundColor: "#e0c20b",
    },
  };

  return (
    <header style={styles.mainHeader}>
      <div style={styles.headerContent}>
        <h1 style={styles.logo}>Park.Easy</h1>
        <nav style={styles.mainNav}>
          <ul style={styles.navList}>
            {[
              { name: "Home", link: "home", href: "/" },
              { name: "Parking", link: "parking", href: "/parking" },
              {
                name: "List your Space",
                link: "list_space",
                href: "/list_space",
              },
              {
                name: "Plan & Pricing",
                link: "plan_pricing",
                href: "/plan_pricing",
              },
              { name: "About Us", link: "about", href: "/about_us" },
              { name: "Contact Us", link: "contact", href: "/contact_us" },
            ].map(({ name, link, href }) => (
              <li key={link}>
                <a
                  href={href}
                  style={styles.navLink(link)}
                  onMouseEnter={() => handleMouseEnter(link)}
                  onMouseLeave={handleMouseLeave}
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default link behavior
                    handleNavClick(link, href); // Handle navigation
                  }}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
          <button
            style={{
              ...styles.loginBtn,
              ...(hoveredLink === "login" ? styles.loginBtnHover : {}),
            }}
            onMouseEnter={() => handleMouseEnter("login")}
            onMouseLeave={handleMouseLeave}
          >
            Log In
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
