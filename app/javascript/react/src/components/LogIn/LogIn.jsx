import React from "react";
import LoginPage from "./LoginPage";

function LogIn() {
  const pageStyle = {
    backgroundColor: "#1a1a1a", // Ensure the page background matches the dark theme
  };

  return (
    <div style={pageStyle}>
      <LoginPage />
    </div>
  );
}

export default LogIn;
