import React from "react";
import NavBar from "../HomePage/NavBar";
import Footer from "../HomePage/Footer";
import GetInTouch from "../HomePage/GetInTouch";
import ContactForm from "./ContactForm";
function ContactUs() {
  const pageStyle = {
    backgroundColor: "#1a1a1a", // Ensure the page background matches the dark theme
  };

  return (
    <div style={pageStyle}>
      <NavBar />
      <ContactForm />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default ContactUs;
