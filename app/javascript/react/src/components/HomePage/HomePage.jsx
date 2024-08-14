import React from "react";
import NavBar from "./NavBar";
import CarArticle from "./CarArticle";
import BikeParking from "./BikeParking";
import CarParking from "./CarParking";
import Testimonial from "./Testimonial";
import AboutUs from "./AboutUs";
import GetInTouch from "./GetInTouch";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <CarArticle />
      <BikeParking />
      <CarParking />
      <Testimonial />
      <AboutUs />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default HomePage;
