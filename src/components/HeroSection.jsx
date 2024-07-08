import { Link } from "react-router-dom";
import { heroChair } from "../assets";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="left-container">
          <div className="hero-text">
            <h1 className="hero-header-text">
              The Executive Chair - Ultimate Comfort for All-Day Work
            </h1>
            <h3>
              Say goodbye to back pain and hello to peak productivity with the
              Executive Chair. Designed for all-day comfort, this chair provides
              the perfect blend of support and adjustability. Focus on what
              matters most without sacrificing your well-being.
            </h3>
            <Link to={"/cart"}>
              <button className="hero-btn">Shop Now</button>
            </Link>
          </div>
        </div>
        <div className="right-container">
          <img src={heroChair} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
