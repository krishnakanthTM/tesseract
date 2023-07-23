import React from "react";
import saly10 from "../../Assets/Saly-10.png";
import rightIcon from "../../Assets/righticon.png";
import heroBackgroundImage from "../../Assets/BackgroundGradiant.png";
import "./HeroComponent.css";

function HeroComponent() {
  return (
    <div className="hero-container">
      <img
        src={heroBackgroundImage}
        alt="heroBackgroundImage"
        className="hero-background-image"
      />
      <div className="hero-content">
        <div className="hero-heading">
          Unlock the power of efficiency with Tesseract
        </div>
        <div className="hero-text">
          Welcome to Tesseract - your all-inclusive solution for NDIS providers,
          Payroll, and Consultancy businesses. We offer a unified platform on
          the cloud that optimizes your daily tasks, enhances productivity, and
          stimulates team cooperation.
        </div>
        <div className="hero-buttons">
          <button className="tesseract-button-primary">
            Start your free trial
          </button>
          <button className="tesseract-button-outline">
            Make an enquiry{" "}
            <img src={rightIcon} alt="right-icon" className="right-icon" />
          </button>
        </div>
      </div>
      <img src={saly10} alt="" className="hero-image" />
    </div>
  );
}

export default HeroComponent;
