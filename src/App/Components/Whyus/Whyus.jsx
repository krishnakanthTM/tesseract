import React from "react";
import "./Whyus.css";
import sectionBackground from "../../Assets/sectionBackground.png";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";
// import CarouselComponent from "../Carousel/CarouselComponent";
// import { whyUsCarousalData } from "../../Pages/Home/HomePageData";

function Whyus() {
  return (
    <div className="whyus-container">
      <ScrollToTop />
      <img
        src={sectionBackground}
        alt="sectionBackground"
        className="whyus-background-image"
      />
      <div className="whyus-data">
        <div className="whyus-header">
          {/* <div className="whyus-subText">Clients love us</div> */}
          <div className="whyus-heading">About us</div>
          {/* <div className="whyus-text">
          Problems trying to resolve the conflict between the two major realms
          of employment solution
        </div> */}
        </div>
        <div className="whyus-temp-para">
          Tesseract, your all-in-one cloud-based command center, delivers
          unparalleled convenience at your fingertips. Designed specifically for
          NDIS providers, payroll companies and consulting firms, Tesseract
          consolidates HR, payroll, audits, roster management and accounting
          into a single digital ecosystem. With unlimited storage, Tesseract
          ensures you never have to worry about running out of capacity. <br />{" "}
          <br /> No matter where you are, take advantage of our easy-to-use
          mobile app to streamline your daily tasks and maintain team unity. Our
          dedicated professionals at IT are available 24/7 to ensure your
          business continues to run smoothly. <br /> <br /> Rely on our
          dedicated account managers to streamline your business operations and
          reduce costs. <br /> <br /> Contact our friendly team today and
          discover the wide range of best-in-class products and services we
          offer. Tesseract is more than just a platform - it's your gateway to
          effortless operations!
        </div>
      </div>
      {/* <CarouselComponent data={whyUsCarousalData} /> */}
    </div>
  );
}

export default Whyus;
