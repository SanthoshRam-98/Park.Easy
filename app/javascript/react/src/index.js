import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./components/HomePage/HomePage";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("welcome");
  const root = ReactDOM.createRoot(container);
  root.render(<HomePage />);
});
