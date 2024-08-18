import React, { useState } from "react";
import { Eye, EyeSlash } from "react-bootstrap-icons";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputStyles = {
    borderRadius: "10px",
    width: "574px",
    maxWidth: "100%",
    color: "#b5b5b5",
    padding: "13px 56px",
    font: "400 20px Poppins, sans-serif",
    border: "1px solid #b5b5b5",
    backgroundColor: "transparent", // Ensure background stays transparent
    outline: "none", // To avoid default outline
  };

  const formGroupStyles = {
    marginBottom: "24px",
  };

  const labelStyles = {
    display: "block",
    marginBottom: "8px",
    font: "500 20px Poppins, sans-serif",
    textAlign: "start",
  };

  const passwordInputStyles = {
    position: "relative",
  };

  const imgStyles = {
    position: "absolute",
    right: "20px",
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
    color: "#b5b5b5", // Ensure the icon is visible
  };

  const formOptionsStyles = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "36px",
    font: "16px Poppins, sans-serif",
  };

  const rememberMeStyles = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontWeight: "300",
  };

  const forgotPasswordStyles = {
    fontWeight: "500",
    cursor: "pointer",
    color: "#fff",
  };

  const submitButtonStyles = {
    borderRadius: "10px",
    width: "100%",
    color: "#000",
    padding: "13px 0",
    font: "600 20px Poppins, sans-serif",
    backgroundColor: "#ffd613",
    border: "none",
    cursor: "pointer",
  };

  const googleLoginStyles = {
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "16px",
    width: "100%",
    padding: "13px 0",
    marginTop: "24px",
    font: "400 20px Poppins, sans-serif",
    backgroundColor: "transparent",
    border: "1px solid #b5b5b5",
    color: "#fff",
    cursor: "pointer",
  };

  const termsTextStyles = {
    color: "#b5b5b5",
    textAlign: "center",
    marginTop: "24px",
    font: "300 16px Poppins, sans-serif",
  };

  const termsLinkStyles = {
    textDecoration: "underline",
    color: "#fff",
    cursor: "pointer",
  };

  const footerContainerStyles = {
    backgroundColor: "#0f0d0d",
    alignSelf: "stretch",
    display: "flex",
    marginTop: "104px",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Poppins, sans-serif",
    padding: "63px 80px 40px",
  };

  const footerContentStyles = {
    display: "flex",
    width: "293px",
    maxWidth: "100%",
    flexDirection: "column",
    alignItems: "center",
  };

  const footerLogoStyles = {
    fontSize: "48px",
    fontWeight: "600",
    letterSpacing: "7.2px",
  };

  const socialIconsStyles = {
    aspectRatio: "7.25",
    objectFit: "contain",
    objectPosition: "center",
    width: "260px",
    margin: "64px 0 0",
  };

  const copyrightStyles = {
    fontSize: "20px",
    fontWeight: "400",
    marginTop: "36px",
  };

  const formStyle = {
    marginTop: "106px",
  };
  return (
    <div
      style={{
        backgroundColor: "#131212",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "123px",
        overflow: "hidden",
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "1300px",
          gap: "20px",
          whiteSpace: "nowrap",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            letterSpacing: "7.2px",
            font: "600 48px Poppins, sans-serif",
          }}
        >
          Park.Easy
        </div>
        <div
          style={{
            borderRadius: "10px",
            display: "flex",
            gap: "16px",
            margin: "auto 0",
            padding: "16px 27px 16px 12px",
            font: "400 20px Urbanist, sans-serif",
            border: "1px solid #fff",
          }}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/75cc933a4b1abaa8c117d065f963b16f91c9235b50daff623ebaaf9f31af3a72?placeholderIfAbsent=true&apiKey=1e478041483c415d8c6ecd66dd4ddacc"
            alt=""
          />
          <span>English</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6aaa11c34d5622c996fce99ebf98e109deacad80cb2bb70f609a61b9a4c323fe?placeholderIfAbsent=true&apiKey=1e478041483c415d8c6ecd66dd4ddacc"
            alt=""
          />
        </div>
      </header>

      <main style={{ textAlign: "center", maxWidth: "534px" }}>
        <h1
          style={{
            color: "#ffd613",
            marginTop: "212px",
            font: "400 80px/1 Poppins, sans-serif",
          }}
        >
          Log In
        </h1>
        <p style={{ marginTop: "36px", font: "400 24px Poppins, sans-serif" }}>
          Get started today by entering just a few details.
        </p>

        <form style={formStyle}>
          <div style={formGroupStyles}>
            <label htmlFor="email" style={labelStyles}>
              Email*
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your Email"
              style={inputStyles}
              required
            />
          </div>
          <div style={formGroupStyles}>
            <label htmlFor="password" style={labelStyles}>
              Password*
            </label>
            <div style={passwordInputStyles}>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your Password"
                style={inputStyles}
                required
              />
              {showPassword ? (
                <EyeSlash
                  style={imgStyles}
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <Eye style={imgStyles} onClick={togglePasswordVisibility} />
              )}
            </div>
          </div>
          <div style={formOptionsStyles}>
            <div style={rememberMeStyles}>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <a href="/" style={forgotPasswordStyles}>
              Forgot Password
            </a>
          </div>
          <button type="submit" style={submitButtonStyles}>
            Log In
          </button>
          <button style={googleLoginStyles}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bea5ef7ae3dbf2ed8d538030a0b3e0102b38917bd99a5d45e793d8d63c7b3a77?placeholderIfAbsent=true&apiKey=1e478041483c415d8c6ecd66dd4ddacc"
              alt="Google Logo"
            />
            <span>Log In with Google</span>
          </button>
        </form>
        <p style={termsTextStyles}>
          By continuing, you are indicating that <br />
          you accept our <span style={termsLinkStyles}>Terms of Service</span>.
        </p>
      </main>

      <footer style={footerContainerStyles}>
        <div style={footerContentStyles}>
          <div style={footerLogoStyles}>Park.Easy</div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/48dbb8623ebaa20e6776d6e40112dbd05e90c1bcf4150510ac68eb9225551153?placeholderIfAbsent=true&apiKey=1e478041483c415d8c6ecd66dd4ddacc"
            alt="Social Media Icons"
            style={socialIconsStyles}
          />
          <div style={copyrightStyles}>© 2024 by Park.Easy</div>
        </div>
      </footer>
    </div>
  );
}

export default LoginPage;
