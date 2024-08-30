import React from "react";
import ForgotPasswordPage from "./ForgotPasswordPage";

function ForgotPassword() {
  const pageStyle = {
    backgroundColor: "#1a1a1a", // Ensure the page background matches the dark theme
  };

  return (
    <div style={pageStyle}>
      <ForgotPasswordPage />
    </div>
  );
}

export default ForgotPassword;
