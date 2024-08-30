import React, { useState } from "react";

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/users/password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": document.querySelector("[name=csrf-token]").content,
        },
        body: JSON.stringify({
          user: {
            email: email,
          },
        }),
      });

      if (response.ok) {
        setMessage("If the email exists, a password reset link has been sent.");
        setError("");
      } else {
        const data = await response.json();
        setError(data.error || "An error occurred. Please try again.");
        setMessage("");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      setMessage("");
    }
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
          Forgot Password
        </h1>
        <p style={{ marginTop: "36px", font: "400 24px Poppins, sans-serif" }}>
          Enter your email address to reset your password.
        </p>

        {error && (
          <div style={{ color: "red", marginBottom: "24px" }}>{error}</div>
        )}
        {message && (
          <div style={{ color: "green", marginBottom: "24px" }}>{message}</div>
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
            Submit
          </button>
        </form>

        <p
          style={{
            marginTop: "24px",
            font: "300 16px Poppins, sans-serif",
            color: "#b5b5b5",
          }}
        >
          Remembered your password?{" "}
          <a
            href="/log_in"
            style={{ color: "#ffd613", textDecoration: "underline" }}
          >
            Log In
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

export default ForgotPasswordPage;
