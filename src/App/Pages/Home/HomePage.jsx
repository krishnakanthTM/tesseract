import React from "react";
import "./HomePage.css";
import Navbar from "../../Components/Navbar/Navbar";
import TopNav from "../../Components/TopNav/TopNav";
import Footer from "../../Components/Footer/Footer";
import rectangle from "../../Assets/rectangle.png";
import rectangle2 from "../../Assets/rectangle2.png";
import rectangle3 from "../../Assets/rectangle3.png";
import rectangle4 from "../../Assets/rectangle4.png";
import vector from "../../Assets/Vector.png";
import sectionBackground from "../../Assets/sectionBackground.png";
import homeServiceBackground from "../../Assets/homeServicesBackground.png";
import handsWithCare from "../../Assets/Hands-with-care.png";
import rectangleIpad1 from "../../Assets/HomeServices_rectangleIpad1.png";
import rectangleIpad2 from "../../Assets/HomeServices_rectangleIpad2.png";
import client1 from "../../Assets/client1.png";
import client2 from "../../Assets/client2.png";
import client3 from "../../Assets/client3.png";
import star from "../../Assets/star.png";
import emptyStar from "../../Assets/emptyStar.png";
import clientTriangle1 from "../../Assets/clients_triangle1.png";
import clientTriangle2 from "../../Assets/clients_triangle2.png";
import rectangleMobile from "../../Assets/rectangle_mobile.png";
import rectangleMobile2 from "../../Assets/rectangle_mobile2.png";
import ImageWithContent from "../../Components/ImageWithContent/ImageWithContent";
import {
  unlockThePowerOfEfficiency,
  empowerNDISIndustry,
  thePowerOfAdaptiveness,
  humanResources,
} from "./HomePageData";
import Whyus from "../../Components/Whyus/Whyus";
import BusinessPartners from "../../Components/BusinessPartners/BusinessPartners";
import saly10 from "../../Assets/Saly-10.png";
import "../../Components/ImageWithContent/ImageWithContent.css";
import heroBackgroundImage from "../../Assets/BackgroundGradiant.png";
import rightIcon from "../../Assets/righticon.png";
import Slider from "react-slick";
import "../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";
import { isMobile } from 'react-device-detect';

function HomePage() {
  const data = [{userName: "client1", content:"Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",clientName: "Regina Miles", role: "Designer",clientImg: client1},{userName: "client2", content:"Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",clientName: "Regina Miles", role: "Designer",clientImg: client2},{userName: "client3", content:"Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",clientName: "Regina Miles", role: "Designer",clientImg: client3}];
  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: isMobile ? 1 : 3,
      slidesToScroll: 1
    };
  
  return (
    <>
      <TopNav type="primary" />
      <Navbar />
      {/** Introduction Container*/}
      <div className="HomeIntroductionContainer">
        <img src={heroBackgroundImage} alt="herobackgroundImage.." className="HomeIntroduction-backgroundImage1" />
        <div className="HomeIntroduction">
          <div className="HomeIntroduction-content">
            <div className="HomeIntroduction-heading">Unlock the power of efficiency with Tesseract</div>
            <div className="HomeIntroduction-text"> Welcome to Tesseract – your comprehensive solution for small and medium enterprises within Australia especially tailored for NDIS providers, Payroll, and Consultancy enterprises. We offer a unified cloud based platform that optimizes your daily tasks, enhances productivity, and fosters team collaboration.</div>
            <div className="HomeIntroduction-buttons">
                  <button className="tesseract-button-primary">Start your free trial
                  </button>
                  <button className="tesseract-button-outline">Make an enquiry
                    <img src={rightIcon} alt="right-icon" className="right-icon" />
                </button>
            </div>
          </div>
          <div className="HomeIntroduction-imageContent">
          <img src={saly10} alt="HomeIntroduction_image1" className="HomeIntroduction-image1" />
          </div>
        </div>
      </div>
      {/* <ImageWithContent data={unlockThePowerOfEfficiency} /> */}
      {/* <img src={rectangle} alt="rectangle" className="rectangle" />
      <img src={rectangle4} alt="rectangle4" className="rectangle4" />
      <img src={rectangleMobile} alt="rectangleMobile" className="rectangleMobile" /> */}
      {/** Industries Container */}
      <div className="HomeIndustries_container">
        <h1>Industries we serve</h1>
        <div className="HomeIndustries_content">
          <div className="HomeIndustries_sections">
            <h3>NDIS Providers</h3>
            <p>Empowering NDIS providers with tools to manage participant registries and compliance effortlessly. Streamline service tracking, cost management, and documentation all in one place. </p>
            <button className="HomeIndustries_buttons">See more...</button>
          </div>
          <div className="HomeIndustries_sections">
            <h3>Payroll Companies</h3>
            <p>Optimize payroll management with our comprehensive platform designed to handle payroll processing and reporting. Ensure compliance and efficiency with Tesseract's robust features.</p>
            <button className="HomeIndustries_buttons">See more...</button>
          </div>
          <div className="HomeIndustries_sections">
            <h3>Consulting Agencies</h3>
            <p>Transform your consulting operations with Tesseract's unified platform, streamlining HR and payroll processes. Ensures efficient management and collaboration across your team. </p>
            <button className="HomeIndustries_buttons">See more...</button>
          </div>
        </div>
      </div>
      {/* <img src={rectangle3} alt="rectangle3" className="rectangle3" />
      <img src={rectangleMobile2} alt="rectangleMobile2" className="rectangleMobile2" />
      <img src={rectangle2} alt="rectangle2" className="rectangleMobile3" /> */}
      {/** Services Container */}
      <div className="HomeServices_container">
        <img src={homeServiceBackground} alt="homeServiceBackground" className="HomeServices_background" />
          <h1>Services we offer</h1>
        <div className="HomeServices_content">
          <div className="container">
            <div className="column1">
            <div className="item">
                <span className="checkmark"><img src={vector} alt="tickMark" />&nbsp;&nbsp;&nbsp;</span>
                Staff and Participants Registry
            </div>
            <div className="item">
                <span className="checkmark"><img src={vector} alt="tickMark" />&nbsp;&nbsp;&nbsp;</span>
                Roster Management
            </div>
            <div className="item">
                <span className="checkmark"><img src={vector} alt="tickMark" />&nbsp;&nbsp;&nbsp;</span>
                Timesheets
            </div>
            <div className="item">
                <span className="checkmark"><img src={vector} alt="tickMark" />&nbsp;&nbsp;&nbsp;</span>
                Payroll
            </div>
            <div className="item">
                <span className="checkmark"><img src={vector} alt="tickMark" />&nbsp;&nbsp;&nbsp;</span>
                Human Resources
            </div>
            <div className="item">
                <span className="checkmark"><img src={vector} alt="tickMark" />&nbsp;&nbsp;&nbsp;</span>
                Mobile App
            </div>
            <div className="item">
                <span className="checkmark"><img src={vector} alt="tickMark" />&nbsp;&nbsp;&nbsp;</span>
                24/7 Support
            </div>
            <div className="item">
                <span className="checkmark"><img src={vector} alt="tickMark" />&nbsp;&nbsp;&nbsp;</span>
                Repository for secured Document Storage
            </div>
            <div className="item">
                <span className="checkmark"><img src={vector} alt="tickMark" />&nbsp;&nbsp;&nbsp;</span>
                Issues Register
            </div>
        </div>
        <div className="column2">
            <div className="item">
                <span className="checkmark"><img src={vector} alt="tickMark" />&nbsp;&nbsp;&nbsp;</span>
                Mobile App
            </div>
            <div className="item">
                <span className="checkmark"><img src={vector} alt="tickMark" />&nbsp;&nbsp;&nbsp;</span>
                24/7 Support
            </div>
            <div className="item">
                <span className="checkmark"><img src={vector} alt="tickMark" />&nbsp;&nbsp;&nbsp;</span>
                Repository for secured Document Storage
            </div>
            <div className="item">
                <span className="checkmark"><img src={vector} alt="tickMark" />&nbsp;&nbsp;&nbsp;</span>
                Issues Register
            </div>
        </div>
    </div>
        </div>
        {/* <img src={rectangleIpad1} alt="rectangleIpad1" className="rectangleIpad1" />
        <img src={rectangleIpad2} alt="rectangleIpad2" className="rectangleIpad2" />
        <img src={rectangle2} alt="rectangle2" className="rectangle2" />*/}
        <img src={handsWithCare} alt="handsWithCare" className="handsWithCare" /> 
      </div>
      {/* <ImageWithContent data={humanResources} framePosition=""/> */}
      {/* <ImageWithContent data={empowerNDISIndustry} /> */}
      {/* <img src={rectangle2} alt="rectangle2" className="rectangle2" /> */}
      {/* Client Container */}
      <div className="HomeClients_container">
        <div className="HomeClients_header">
          <h1>Clients Love us</h1>
          <p>Problems trying to resolve the conflict between the two major realms of employment solutions.</p>
        </div>
        <div className="HomeClients_content">
        <div className="slider-container">
          <Slider {...settings}>
          <div className="HomeClients_cards1">
            <div className="stars">
              <img src={star} alt="star1" className="star" />
              <img src={star} alt="star2" className="star" />
              <img src={star} alt="star3" className="star" />
              <img src={star} alt="star4" className="star" />
              <img src={emptyStar} alt="emptyStar" className="star" />
            </div>
            <p className="testimonial-text">
                Slate helps you see how many more days you need to work to reach your financial goal for the month and year.
            </p>
            <div className="user-info">
                <img src={client1} alt="Regina Miles" className="user-photo" />
                <div>
                    <div className="user-name">Regina Miles</div>
                    <div className="user-role">Designer</div>
                </div>
            </div>
          </div>
          <div className="HomeClients_cards2">
            <div className="stars">
              <img src={star} alt="star1" className="star" />
              <img src={star} alt="star2" className="star" />
              <img src={star} alt="star3" className="star" />
              <img src={star} alt="star4" className="star" />
              <img src={emptyStar} alt="emptyStar" className="star" />
            </div>
            <p className="testimonial-text">
                Slate helps you see how many more days you need to work to reach your financial goal for the month and year.
            </p>
            <div className="user-info">
                <img src={client2} alt="Client2" className="user-photo" />
                <div>
                    <div className="user-name">Regina Miles</div>
                    <div className="user-role">Designer</div>
                </div>
            </div>
          </div>
          <div className="HomeClients_cards3">
            <div className="stars">
              <img src={star} alt="star1" className="star" />
              <img src={star} alt="star2" className="star" />
              <img src={star} alt="star3" className="star" />
              <img src={star} alt="star4" className="star" />
              <img src={emptyStar} alt="emptyStar" className="star" />
            </div>
            <p className="testimonial-text">
                Slate helps you see how many more days you need to work to reach your financial goal for the month and year.
            </p>
            <div className="user-info">
                <img src={client3} alt="Client3" className="user-photo" />
                <div>
                    <div className="user-name">Regina Miles</div>
                    <div className="user-role">Designer</div>
                </div>
            </div>
          </div>
            </Slider>
        </div>
        </div>
        {/* <img src={clientTriangle1} alt="clientTriangle1" className="clientTriangle1" />
        <img src={clientTriangle2} alt="clientTriangle2" className="clientTriangle2" /> */}
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
