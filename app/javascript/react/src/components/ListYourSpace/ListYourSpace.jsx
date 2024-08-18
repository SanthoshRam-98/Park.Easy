import * as React from "react";
import NavBar from "../HomePage/NavBar";
import MainContent from "./MainContent";
import FeatureList from "./FeatureList";
import Instructions from "./Instructions";
import Form from "./Form";
import CommunityJoin from "./CommunityJoin";
import Footer from "../HomePage/Footer";

function App() {
  return (
    <div style={rootStyles}>
      <NavBar />
      <MainContent />
      <FeatureList />
      <Instructions />
      <Form />
      <CommunityJoin />
      <Footer />
    </div>
  );
}

const rootStyles = {
  backgroundColor: "rgba(19, 18, 18, 1)",
  color: "rgba(255, 255, 255, 1)",
  fontFamily: "Poppins, sans-serif",
  padding: "0 20px", // added padding for responsiveness
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

export default App;
