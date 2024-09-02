import React, { useEffect, useState } from "react";

function UsersHomePage() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await fetch("/current_user_info", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const data = await response.json();
          console.log("Fetched email:", data.user); // Debugging line
          setEmail(data.user);
        } else {
          window.location.href = "/log_in";
        }
      } catch (error) {
        console.error("Error fetching user info:", error);
        window.location.href = "/log_in";
      }
    };

    checkSession();

    window.addEventListener("popstate", handleNavigation);
    window.addEventListener("beforeunload", clearSessionOnUnload);

    return () => {
      window.removeEventListener("popstate", handleNavigation);
      window.removeEventListener("beforeunload", clearSessionOnUnload);
    };
  }, []);

  const handleNavigation = () => {
    const isLoggedOut = sessionStorage.getItem("isLoggedOut");
    if (isLoggedOut) {
      window.location.href = "/log_in";
    }
  };

  const handleLogout = async () => {
    try {
      const csrfToken = document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute("content");

      const response = await fetch("/logout", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": csrfToken,
        },
      });

      if (response.ok) {
        sessionStorage.setItem("isLoggedOut", "true");
        window.location.href = "/log_in";
      } else {
        console.error("Logout failed with status:", response.status);
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const clearSessionOnUnload = () => {
    sessionStorage.setItem("isLoggedOut", "true");
  };

  return (
    <div
      id="usersHomePage"
      data-email={email}
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
            display: "flex",
            gap: "16px",
            margin: "auto 0",
            padding: "16px 27px 16px 12px",
            font: "400 20px Urbanist, sans-serif",
            border: "1px solid #fff",
            borderRadius: "10px",
          }}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/75cc933a4b1abaa8c117d065f963b16f91c9235b50daff623ebaaf9f31af3a72?placeholderIfAbsent=true&apiKey=1e478041483c415d8c6ecd66dd4ddacc"
            alt="Language Selector"
          />
          <span>English</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6aaa11c34d5622c996fce99ebf98e109deacad80cb2bb70f609a61b9a4c323fe?placeholderIfAbsent=true&apiKey=1e478041483c415d8c6ecd66dd4ddacc"
            alt="Language Selector"
          />
        </div>
        <button
          onClick={handleLogout}
          style={{
            borderRadius: "10px",
            padding: "10px 20px",
            font: "400 16px Poppins, sans-serif",
            backgroundColor: "#ff4c4c",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            margin: "auto 0",
          }}
        >
          Logout
        </button>
      </header>

      <main
        style={{
          textAlign: "center",
          maxWidth: "800px",
          paddingTop: "100px",
        }}
      >
        <h1
          style={{
            color: "#ffd613",
            font: "400 64px/1 Poppins, sans-serif",
            marginBottom: "36px",
          }}
        >
          Welcome to Park.Easy, {email}
        </h1>
        <p
          style={{
            font: "400 24px Poppins, sans-serif",
            marginBottom: "48px",
          }}
        >
          Your one-stop solution for booking sports facilities. Explore the
          available facilities and make your booking today.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <a
            href="/facilities"
            style={{
              borderRadius: "10px",
              padding: "16px 32px",
              font: "600 20px Poppins, sans-serif",
              backgroundColor: "#ffd613",
              color: "#000",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            View Available Facilities
          </a>
          <a
            href="/bookings"
            style={{
              borderRadius: "10px",
              padding: "16px 32px",
              font: "600 20px Poppins, sans-serif",
              backgroundColor: "#000",
              border: "1px solid #ffd613",
              color: "#ffd613",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Manage Your Bookings
          </a>
        </div>
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

export default UsersHomePage;
