import React from "react";
import "./HomePage.css";
import Navbar from "../../Components/Navbar/Navbar";
import TopNav from "../../Components/TopNav/TopNav";
import Footer from "../../Components/Footer/Footer";
import saly10 from "../../Assets/Saly-10.png";
import saly38 from "../../Assets/Saly-38.png";
import saly1 from "../../Assets/Saly-1.png";

import chairMan from "../../Assets/chair.png";
import person1 from "../../Assets/person1.png";

import rightIcon from "../../Assets/righticon.png";
import star from "../../Assets/star.png";
import rectangle from "../../Assets/rectangle.png";
import rectangle2 from "../../Assets/rectangle2.png";
import rectangle3 from "../../Assets/rectangle3.png";

function HomePage() {
  return (
    <div>
      <div className="hero-background">
        <TopNav />
        <Navbar />
        <div className="section-1">
          <div className="section-1-container">
            <div className="section-1-heading">
              Unlock the power of efficiency with Tesseract
            </div>
            <div className="section-1-text">
              Welcome to Tesseract - your all-inclusive solution for NDIS
              providers, Payroll, and Consultancy businesses. We offer a unified
              platform on the cloud that optimizes your daily tasks, enhances
              productivity, and stimulates team cooperation.
            </div>
            <div className="section-1-buttons">
              <button className="section-1-button">
                Start your free trial
              </button>
              <button className="section-1-outline">
                Make an enquiry{" "}
                <img src={rightIcon} alt="right-icon" className="right-icon" />
              </button>
            </div>
          </div>
          <img src={saly10} alt="" className="section-1-img" />
        </div>
        {/* <div style={{ height: "1000px" }}></div> */}
        <img src={rectangle} alt="rectangle" className="rectangle" />
        <div className="section-2-type">
          <img src={saly1} alt="" className="section-1-img" />
          <div className="section-2-container">
            <div className="section-2-heading">Empower NDIS Industry</div>
            <div className="section-2-text">
              Tesseract's dynamic platform allows NDIS users to smoothly handle
              participant registry, service tracking, costs, and invoices. Stay
              on top of problems with our inbuilt Issues Register and assure
              compliance with NDIS guidelines through our easy-to-use Auditor
              tool. All necessary documentation is readily available in our
              accessible Repository.
            </div>
            <div className="section-1-buttons">
              <button className="section-1-button">See the demo</button>
            </div>
          </div>
        </div>
        <img src={rectangle2} alt="rectangle2" className="rectangle2" />
        <img src={rectangle3} alt="rectangle3" className="rectangle3" />
        <div className="section-1-type">
          <div className="section-1-container">
            <div className="section-1-heading">Human Resources</div>
            <div className="section-1-text">
              Redefine your HR operations with Tesseract. Conveniently set up
              job roles, publicize them on numerous job sites, process
              applications, and simplify the interview process. Benefit from our
              effective onboarding, solid contract handling, and efficient
              employee management. Improve your team's skills with customized
              training programs and boost their progress with our appraisal
              system. Engage, appreciate, and incentivize your employees while
              also accessing company regulations with ease.
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
        </div>
        {/* <div style={{ height: "1000px" }}></div> */}
        <div className="section-2-type">
          <img src={chairMan} alt="" className="section-1-img" />
          <div className="section-2-container">
            <div className="section-2-heading">The power of Adaptivness</div>
            <div className="section-2-text">
              Empower NDIS users with our intuitive 'Participants' module,
              enabling efficient management of participant registries, capture
              of services provided, tracking of expenses, and invoice
              generation.
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
                  Slate helps you see how many more days you need to work to
                  reach your financial goal for the month and year.
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
                  Slate helps you see how many more days you need to work to
                  reach your financial goal for the month and year.
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
                  Slate helps you see how many more days you need to work to
                  reach your financial goal for the month and year.
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
      </div>
    </div>
  );
}

export default HomePage;
