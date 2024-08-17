import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./components/HomePage/HomePage";
import ParkingPage from "./components/Parking/ParkingPage";

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
});
