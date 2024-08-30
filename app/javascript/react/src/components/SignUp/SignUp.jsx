import React from "react";
import SignUpPage from "./SignUpPage";

function SignUp() {
  const pageStyle = {
    backgroundColor: "#1a1a1a", // Ensure the page background matches the dark theme
  };

  return (
    <div style={pageStyle}>
      <SignUpPage />
    </div>
  );
}

export default SignUp;
