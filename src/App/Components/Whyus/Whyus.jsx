import React from "react";
import "./Whyus.css";
import sectionBackground from "../../Assets/sectionBackground.png";
import CarouselComponent from "../Carousel/CarouselComponent";
import { whyUsCarousalData } from "../../Pages/Home/HomePageData";

function Whyus() {
  return (
    <div className="whyus-container">
      <img
        src={sectionBackground}
        alt="sectionBackground"
        className="whyus-background-image"
      />
      <div className="whyus-header">
        <div className="whyus-subText">Clients love us</div>
        <div className="whyus-heading">Why us</div>
        <div className="whyus-text">
          Problems trying to resolve the conflict between the two major realms
          of employment solution
        </div>
      </div>
      <CarouselComponent data={whyUsCarousalData} />
    </div>
  );
}

export default Whyus;
