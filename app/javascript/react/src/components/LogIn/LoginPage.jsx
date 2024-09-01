import React, { useState, useEffect } from "react";
import { Eye, EyeSlash } from "react-bootstrap-icons";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [csrfToken, setCsrfToken] = useState("");

  useEffect(() => {
    // Directly read CSRF token from meta tag
    const csrfMetaTag = document.querySelector('meta[name="csrf-token"]');
    if (csrfMetaTag) {
      setCsrfToken(csrfMetaTag.getAttribute("content"));
    }

    // Check if there's a flash message in the URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const flashMessage = urlParams.get("flash");

    if (flashMessage) {
      setError(decodeURIComponent(flashMessage));
    }
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/users/sign_in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": csrfToken,
        },
        body: JSON.stringify({ user: { email, password } }),
      });

      const data = await response.json();

      if (response.ok) {
        // Redirect with location.replace to ensure session preservation
        window.location.replace(
          `/users_home_page?email=${encodeURIComponent(email)}`
        );
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error("Login failed:", error);
      setError("An unexpected error occurred. Please try again.");
    }
  };

  const inputStyles = {
    borderRadius: "10px",
    width: "574px",
    maxWidth: "100%",
    color: "#b5b5b5",
    padding: "13px 56px",
    font: "400 20px Poppins, sans-serif",
    border: "1px solid #b5b5b5",
    backgroundColor: "transparent",
    outline: "none",
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

        {error && (
          <div style={{ color: "red", marginBottom: "24px" }}>{error}</div>
        )}
        {success && (
          <div style={{ color: "green", marginBottom: "24px" }}>{success}</div>
        )}

        <form onSubmit={handleSubmit} style={{ marginTop: "106px" }}>
          <div style={{ marginBottom: "24px" }}>
            <label
              htmlFor="email"
              style={{
                display: "block",
                marginBottom: "8px",
                font: "500 20px Poppins, sans-serif",
                textAlign: "start",
              }}
            >
              Email*
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyles}
              required
            />
          </div>
          <div style={{ marginBottom: "24px" }}>
            <label
              htmlFor="password"
              style={{
                display: "block",
                marginBottom: "8px",
                font: "500 20px Poppins, sans-serif",
                textAlign: "start",
              }}
            >
              Password*
            </label>
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={inputStyles}
                required
              />
              {showPassword ? (
                <EyeSlash
                  style={{
                    position: "absolute",
                    right: "20px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    color: "#b5b5b5",
                  }}
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <Eye
                  style={{
                    position: "absolute",
                    right: "20px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    color: "#b5b5b5",
                  }}
                  onClick={togglePasswordVisibility}
                />
              )}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "36px",
              font: "16px Poppins, sans-serif",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontWeight: "300",
              }}
            >
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <a
              href="/forgot_password"
              style={{ fontWeight: "500", cursor: "pointer", color: "#fff" }}
            >
              Forgot Password
            </a>
          </div>
          <button
            type="submit"
            style={{
              borderRadius: "10px",
              width: "100%",
              color: "#000",
              padding: "13px 0",
              font: "600 20px Poppins, sans-serif",
              backgroundColor: "#ffd613",
              border: "none",
              cursor: "pointer",
            }}
          >
            Log In
          </button>
          <button
            style={{
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
            }}
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bea5ef7ae3dbf2ed8d538030a0b3e0102b38917bd99a5d45e793d8d63c7b3a77?placeholderIfAbsent=true&apiKey=1e478041483c415d8c6ecd66dd4ddacc"
              alt="Google Logo"
            />
            <span>Log In with Google</span>
          </button>
        </form>
        <p
          style={{
            color: "#b5b5b5",
            textAlign: "center",
            marginTop: "24px",
            font: "300 16px Poppins, sans-serif",
          }}
        >
          By continuing, you are indicating that <br />
          you accept our{" "}
          <span
            style={{
              textDecoration: "underline",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Terms of Service
          </span>
          .
        </p>
        <p
          style={{
            marginTop: "24px",
            font: "300 16px Poppins, sans-serif",
            color: "#b5b5b5",
          }}
        >
          Don't have an account?{" "}
          <a
            href="/users/sign_up"
            style={{ color: "#ffd613", textDecoration: "underline" }}
          >
            Sign Up
          </a>
        </p>
      </main>

      <footer
        style={{
          backgroundColor: "#0f0d0d",
          alignSelf: "stretch",
          display: "flex",
          marginTop: "104px",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "40px",
            flexWrap: "wrap",
            justifyContent: "center",
            padding: "54px 0",
            fontWeight: "300",
          }}
        >
          <span style={{ fontWeight: "500", cursor: "pointer" }}>
            Privacy Policy
          </span>
          <span style={{ fontWeight: "500", cursor: "pointer" }}>
            Terms of Service
          </span>
          <span style={{ fontWeight: "500", cursor: "pointer" }}>Help</span>
        </div>
        <div
          style={{
            padding: "24px 0",
            fontSize: "20px",
            color: "#b5b5b5",
            borderTop: "1px solid #313131",
            display: "flex",
            gap: "6px",
            justifyContent: "center",
          }}
        >
          <span>© 2024 Park.Easy.</span>
          <span>All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}

export default LoginPage;
