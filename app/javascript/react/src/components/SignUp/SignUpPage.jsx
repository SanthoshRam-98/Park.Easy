import React, { useState } from "react";
import { Eye, EyeSlash } from "react-bootstrap-icons";

function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== passwordConfirmation) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": document.querySelector("[name=csrf-token]").content,
        },
        body: JSON.stringify({
          user: {
            email: email,
            password: password,
            password_confirmation: passwordConfirmation,
          },
        }),
      });

      if (response.ok) {
        setSuccess("Signup successful! Please log in.");
        setError("");
        setTimeout(() => {
          window.location.href = "/log_in"; // Redirect to login page
        }, 2000);
      } else {
        const data = await response.json();
        setError(data.message || "Signup failed. Please try again.");
        setSuccess("");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      setSuccess("");
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
      {/* Header, Footer, and other UI elements */}
      <main style={{ textAlign: "center", maxWidth: "534px" }}>
        <h1
          style={{
            color: "#ffd613",
            marginTop: "212px",
            font: "400 80px/1 Poppins, sans-serif",
          }}
        >
          Sign Up
        </h1>
        <p style={{ marginTop: "36px", font: "400 24px Poppins, sans-serif" }}>
          Get started by entering your details below.
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
          <div style={{ marginBottom: "24px" }}>
            <label
              htmlFor="password_confirmation"
              style={{
                display: "block",
                marginBottom: "8px",
                font: "500 20px Poppins, sans-serif",
                textAlign: "start",
              }}
            >
              Confirm Password*
            </label>
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                id="password_confirmation"
                placeholder="Confirm your Password"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                style={inputStyles}
                required
              />
            </div>
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
            Sign Up
          </button>
        </form>

        <p
          style={{
            marginTop: "24px",
            font: "400 16px Poppins, sans-serif",
            color: "#b5b5b5",
          }}
        >
          Already have an account?{" "}
          <a
            href="/log_in"
            style={{
              color: "#ffd613",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Log In
          </a>
        </p>

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

export default SignupPage;
