import React from "react";
import Navmenu from "../components/Navmenu";
import "../styles/LandingPage.css";
import HeroSection from "../components/HeroSection";
import Products from "../components/Products";
const LandingPage = () => {
  return (
    <div className="container">
      <Navmenu />
      <HeroSection />
      <Products />
    </div>
  );
};

export default LandingPage;
