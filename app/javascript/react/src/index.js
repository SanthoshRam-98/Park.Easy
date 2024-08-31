import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./components/HomePage/HomePage";
import ParkingPage from "./components/Parking/ParkingPage";
import ListYourSpace from "./components/ListYourSpace/ListYourSpace";
import PlanPricing from "./components/PlanPricing/PlanPricing";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import LogIn from "./components/LogIn/LogIn";
import SignupPage from "./components/SignUp/SignUpPage";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import UsersHomePage from "./components/UserHomePage/UsersHomePage";

document.addEventListener("DOMContentLoaded", () => {
  // Handle HomePage rendering
  const homePageElement = document.getElementById("welcome");
  if (homePageElement) {
    const homeRoot = ReactDOM.createRoot(homePageElement);
    homeRoot.render(<HomePage />);
  }

  // Handle ParkingPage rendering
  const parkingPageElement = document.getElementById("parkingPage");
  if (parkingPageElement) {
    const parkingRoot = ReactDOM.createRoot(parkingPageElement);
    parkingRoot.render(<ParkingPage />);
  }

  // Handle ListSpacePage rendering
  const listSpaceElement = document.getElementById("listSpacePage");
  if (listSpaceElement) {
    const listSpaceRoot = ReactDOM.createRoot(listSpaceElement);
    listSpaceRoot.render(<ListYourSpace />);
  }

  // Handle PlanPricingPage rendering
  const planPricingElement = document.getElementById("planPricing");
  if (planPricingElement) {
    const listSpaceRoot = ReactDOM.createRoot(planPricingElement);
    listSpaceRoot.render(<PlanPricing />);
  }

  // Handle AboutUsPage rendering
  const aboutUsElement = document.getElementById("aboutUs");
  if (aboutUsElement) {
    const aboutUsRoot = ReactDOM.createRoot(aboutUsElement);
    aboutUsRoot.render(<AboutUs />);
  }

  // Handle ContactUsPage rendering
  const contactUsElement = document.getElementById("contactUs");
  if (contactUsElement) {
    const contactUsRoot = ReactDOM.createRoot(contactUsElement);
    contactUsRoot.render(<ContactUs />);
  }

  // Handle LoginPage rendering
  const loginElement = document.getElementById("logIn");
  if (loginElement) {
    const logInRoot = ReactDOM.createRoot(loginElement);
    logInRoot.render(<LogIn />);
  }

  // Handle SignUpPage rendering
  const signUpElement = document.getElementById("signUp");
  if (signUpElement) {
    const signUpnRoot = ReactDOM.createRoot(signUpElement);
    signUpnRoot.render(<SignupPage />);
  }

  // Handle ForgotPasswordPage rendering
  const forgotPasswordElement = document.getElementById("forgotPassword");
  if (forgotPasswordElement) {
    const forgotPasswordRoot = ReactDOM.createRoot(forgotPasswordElement);
    forgotPasswordRoot.render(<ForgotPassword />);
  }

  // Handle UsersHomePage rendering
  const usersHomePageElement = document.getElementById("usersHomePage");
  if (usersHomePageElement) {
    const usersHomePageRoot = ReactDOM.createRoot(usersHomePageElement);
    usersHomePageRoot.render(<UsersHomePage />);
  }
});
