import React from "react";
import { ColumnsGap } from "react-bootstrap-icons";

function Footer() {
  const footerStyles = {
    backgroundColor: "#0f0d0d",
    padding: "63px 70px 29px",
    width: "100%",
  };

  const footerContentStyles = {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "1224px",
    columnGap: "38px",
    marginLeft: "auto",
  };

  const footerSectionStyles = {
    display: "flex",
    flexDirection: "column",
  };

  const footerLogoStyles = {
    color: "#fff",
    font: "600 32px Poppins, sans-serif",
    letterSpacing: "4.8px",
    marginBottom: "20px",
  };

  const navTitleStyles = {
    color: "#fff",
    font: "600 24px Poppins, sans-serif",
    marginBottom: "36px",
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
    marginBottom: "36px",
  };

  const socialIconsStyles = {
    width: "260px",
    height: "auto",
  };

  const copyrightStyles = {
    color: "#fff",
    font: "400 20px Poppins, sans-serif",
    textAlign: "center",
    marginTop: "101px",
  };
  const footerAlign = {
    display: "flex",
  };
  return (
    <footer style={footerStyles}>
      <div style={footerAlign}>
        <div>
          <h2 style={footerLogoStyles}>Park.Easy</h2>
        </div>
        <div style={footerContentStyles}>
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
                    href="/about-us"
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
                    href="/list-your-space"
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
                    href="/plan-pricing"
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
                    href="/contact-us"
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
                  onMouseOut={(e) =>
                    (e.target.style.color = navLinkStyles.color)
                  }
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
                  onMouseOut={(e) =>
                    (e.target.style.color = navLinkStyles.color)
                  }
                >
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
          <div style={footerSectionStyles}>
            <h3 style={sectionTitleStyles}>Follow Us</h3>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5c667a60170e4ad6bbb30c1269c779dbb5e4a85882152b195b9c5d36dc7bfe9?apiKey=1e478041483c415d8c6ecd66dd4ddacc&"
              alt="Social media icons"
              style={socialIconsStyles}
            />
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
