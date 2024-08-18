import React, { useState, useEffect } from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "react-bootstrap-icons";

function Footer() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isSmallMobile, setIsSmallMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsSmallMobile(window.innerWidth <= 480);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const footerStyles = {
    backgroundColor: "#0f0d0d",
    padding: isSmallMobile
      ? "20px 10px"
      : isMobile
      ? "30px 20px"
      : "63px 70px 29px",
    width: "100%",
    boxSizing: "border-box",
  };

  const footerContentStyles = {
    display: "flex",
    flexDirection: isSmallMobile ? "column" : "row",
    justifyContent: isSmallMobile ? "center" : "space-between",
    alignItems: isSmallMobile ? "center" : "flex-start",
    maxWidth: "1224px",
    margin: "0 auto",
  };

  const footerSectionStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: isSmallMobile ? "center" : "flex-start",
  };

  const footerLogoStyles = {
    color: "#fff",
    font: "600 32px Poppins, sans-serif",
    letterSpacing: "4.8px",
    marginBottom: isSmallMobile ? "10px" : "20px",
  };

  const navTitleStyles = {
    color: "#fff",
    font: "600 24px Poppins, sans-serif",
    marginBottom: isSmallMobile ? "20px" : "36px",
  };

  const navListStyles = {
    listStyle: "none",
    padding: 0,
    margin: 0,
  };

  const navLinkStyles = {
    color: "#b5b5b5",
    font: "400 20px Poppins, sans-serif",
    textDecoration: "none",
    display: "block",
    marginBottom: "8px",
    transition: "color 0.3s ease",
  };

  const navLinkHoverStyles = {
    color: "#f1c40f",
  };

  const sectionTitleStyles = {
    color: "#fff",
    font: "600 24px Poppins, sans-serif",
    marginBottom: isSmallMobile ? "20px" : "36px",
  };

  const socialIconsContainer = {
    display: "flex",
    justifyContent: isSmallMobile ? "center" : "flex-start",
    gap: "20px",
    marginTop: isSmallMobile ? "20px" : "0",
  };

  const socialIconStyles = {
    color: "rgb(255, 214, 19)",
    fontSize: isSmallMobile ? "20px" : "24px",
    transition: "color 0.3s ease",
    cursor: "pointer",
  };

  const socialIconHoverStyles = {
    color: "#e0c20b",
  };

  const copyrightStyles = {
    color: "#fff",
    font: "400 20px Poppins, sans-serif",
    textAlign: "center",
    marginTop: isSmallMobile ? "40px" : "101px",
  };

  return (
    <footer style={footerStyles}>
      <div style={footerContentStyles}>
        <h2 style={footerLogoStyles}>Park.Easy</h2>
        <div style={footerSectionStyles}>
          <nav>
            <h3 style={navTitleStyles}>Menu</h3>
            <ul style={navListStyles}>
              <li>
                <a
                  href="/"
                  style={navLinkStyles}
                  onMouseOver={(e) =>
                    (e.target.style.color = navLinkHoverStyles.color)
                  }
                  onMouseOut={(e) =>
                    (e.target.style.color = navLinkStyles.color)
                  }
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about_us"
                  style={navLinkStyles}
                  onMouseOver={(e) =>
                    (e.target.style.color = navLinkHoverStyles.color)
                  }
                  onMouseOut={(e) =>
                    (e.target.style.color = navLinkStyles.color)
                  }
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/parking"
                  style={navLinkStyles}
                  onMouseOver={(e) =>
                    (e.target.style.color = navLinkHoverStyles.color)
                  }
                  onMouseOut={(e) =>
                    (e.target.style.color = navLinkStyles.color)
                  }
                >
                  Parking
                </a>
              </li>
              <li>
                <a
                  href="/list_space"
                  style={navLinkStyles}
                  onMouseOver={(e) =>
                    (e.target.style.color = navLinkHoverStyles.color)
                  }
                  onMouseOut={(e) =>
                    (e.target.style.color = navLinkStyles.color)
                  }
                >
                  List your Space
                </a>
              </li>
              <li>
                <a
                  href="/plan_pricing"
                  style={navLinkStyles}
                  onMouseOver={(e) =>
                    (e.target.style.color = navLinkHoverStyles.color)
                  }
                  onMouseOut={(e) =>
                    (e.target.style.color = navLinkStyles.color)
                  }
                >
                  Plan & Pricing
                </a>
              </li>
              <li>
                <a
                  href="/contact_us"
                  style={navLinkStyles}
                  onMouseOver={(e) =>
                    (e.target.style.color = navLinkHoverStyles.color)
                  }
                  onMouseOut={(e) =>
                    (e.target.style.color = navLinkStyles.color)
                  }
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div style={footerSectionStyles}>
          <h3 style={sectionTitleStyles}>Account</h3>
          <ul style={navListStyles}>
            <li>
              <a
                href="/login"
                style={navLinkStyles}
                onMouseOver={(e) =>
                  (e.target.style.color = navLinkHoverStyles.color)
                }
                onMouseOut={(e) => (e.target.style.color = navLinkStyles.color)}
              >
                Log In
              </a>
            </li>
            <li>
              <a
                href="/signup"
                style={navLinkStyles}
                onMouseOver={(e) =>
                  (e.target.style.color = navLinkHoverStyles.color)
                }
                onMouseOut={(e) => (e.target.style.color = navLinkStyles.color)}
              >
                Sign Up
              </a>
            </li>
          </ul>
        </div>
        <div style={footerSectionStyles}>
          <h3 style={sectionTitleStyles}>Follow Us</h3>
          <div style={socialIconsContainer}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              style={socialIconStyles}
              onMouseOver={(e) =>
                (e.target.style.color = socialIconHoverStyles.color)
              }
              onMouseOut={(e) =>
                (e.target.style.color = socialIconStyles.color)
              }
            >
              <Facebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              style={socialIconStyles}
              onMouseOver={(e) =>
                (e.target.style.color = socialIconHoverStyles.color)
              }
              onMouseOut={(e) =>
                (e.target.style.color = socialIconStyles.color)
              }
            >
              <Twitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={socialIconStyles}
              onMouseOver={(e) =>
                (e.target.style.color = socialIconHoverStyles.color)
              }
              onMouseOut={(e) =>
                (e.target.style.color = socialIconStyles.color)
              }
            >
              <Instagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              style={socialIconStyles}
              onMouseOver={(e) =>
                (e.target.style.color = socialIconHoverStyles.color)
              }
              onMouseOut={(e) =>
                (e.target.style.color = socialIconStyles.color)
              }
            >
              <Linkedin />
            </a>
          </div>
        </div>
      </div>
      <div>
        <p style={copyrightStyles}>© 2024 by Park.Easy</p>
      </div>
    </footer>
  );
}

export default Footer;
