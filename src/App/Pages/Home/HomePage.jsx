import React from "react";
import "./HomePage.css";
import Navbar from "../../Components/Navbar/Navbar";
import TopNav from "../../Components/TopNav/TopNav";
import Footer from "../../Components/Footer/Footer";
import saly38 from "../../Assets/Saly-38.png";

import chairMan from "../../Assets/chair.png";
import person1 from "../../Assets/person1.png";

import rightIcon from "../../Assets/righticon.png";
import star from "../../Assets/star.png";
import rectangle from "../../Assets/rectangle.png";
import rectangle2 from "../../Assets/rectangle2.png";
import rectangle3 from "../../Assets/rectangle3.png";
import HeroComponent from "../../Components/HeroComponent/HeroComponent";
import LeftImageRightContent from "../../Components/LeftImageRightContent/LeftImageRightContent";
import { empowerNDISIndustry } from "./HomePageData";

function HomePage() {
  return (
    <>
      <TopNav />
      <Navbar />
      <HeroComponent />
      {/* <div style={{ height: "1000px" }}></div> */}
      <img src={rectangle} alt="rectangle" className="rectangle" />
      <LeftImageRightContent data={empowerNDISIndustry} />
      <img src={rectangle2} alt="rectangle2" className="rectangle2" />
      <img src={rectangle3} alt="rectangle3" className="rectangle3" />
      {/* <div className="section-1-type">
        <div className="section-1-container">
          <div className="section-1-heading">Human Resources</div>
          <div className="section-1-text">
            Redefine your HR operations with Tesseract. Conveniently set up job
            roles, publicize them on numerous job sites, process applications,
            and simplify the interview process. Benefit from our effective
            onboarding, solid contract handling, and efficient employee
            management. Improve your team's skills with customized training
            programs and boost their progress with our appraisal system. Engage,
            appreciate, and incentivize your employees while also accessing
            company regulations with ease.
          </div>
          <div className="section-1-buttons">
            <button className="section-1-button">See the demo</button>
            <button className="section-1-outline">
              Make an enquiry{" "}
              <img src={rightIcon} alt="right-icon" className="right-icon" />
            </button>
          </div>
        </div>
        <img src={saly38} alt="" className="section-1-img" />
      </div> */}
      {/* <div style={{ height: "1000px" }}></div> */}
      <div className="section-2-type">
        <img src={chairMan} alt="" className="section-1-img" />
        <div className="section-2-container">
          <div className="section-2-heading">The power of Adaptivness</div>
          <div className="section-2-text">
            Empower NDIS users with our intuitive 'Participants' module,
            enabling efficient management of participant registries, capture of
            services provided, tracking of expenses, and invoice generation.
            <br />
            <br />
            Issues Register - Our user-friendly platform enables staff to
            quickly report and track issues, ensuring timely resolutions and
            enhancing collaboration and problem-solving efficiency for a
            productive workflow.
          </div>
          <div className="section-1-buttons">
            <button className="section-1-button">See the demo</button>
          </div>
        </div>
      </div>
      <div className="section-1-type">
        <div className="section-container">
          <div className="inner-container">
            <div className="clients">Clients love us</div>
            <div className="section-header">Why us</div>
            <div className="section-text">
              Problems trying to resolve the conflict between the two major
              realms of employment solutions.
            </div>
          </div>
          <div className="section-cards">
            <div className="section-card-item">
              <div className="card-stars">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
              </div>
              <div className="card-text">
                Slate helps you see how many more days you need to work to reach
                your financial goal for the month and year.
              </div>
              <div className="card-person">
                <img src={person1} alt="personImage" />
                <div>
                  <div className="card-person-name">Regina Miles</div>
                  <div className="card-person-profession">Designer</div>
                </div>
              </div>
            </div>
            <div className="section-card-item">
              <div className="card-stars">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
              </div>
              <div className="card-text">
                Slate helps you see how many more days you need to work to reach
                your financial goal for the month and year.
              </div>
              <div className="card-person">
                <img src={person1} alt="personImage" />
                <div>
                  <div className="card-person-name">Regina Miles</div>
                  <div className="card-person-profession">Designer</div>
                </div>
              </div>
            </div>
            <div className="section-card-item">
              <div className="card-stars">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
              </div>
              <div className="card-text">
                Slate helps you see how many more days you need to work to reach
                your financial goal for the month and year.
              </div>
              <div className="card-person">
                <img src={person1} alt="personImage" />
                <div>
                  <div className="card-person-name">Regina Miles</div>
                  <div className="card-person-profession">Designer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bussines">
        <div className="bussiness-heading">Business Partners</div>
        <div className="bussiness-cards">
          <div className="business-card-item"></div>
          <div className="business-card-item"></div>
          <div className="business-card-item"></div>
          <div className="business-card-item"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
