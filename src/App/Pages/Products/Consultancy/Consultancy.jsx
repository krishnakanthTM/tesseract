import React from "react";
import "./Consultancy.scss";
import Footer from "../../../Components/Footer/Footer";
import saly19 from "../../../Assets/Saly-19.png";
import rightIcon from "../../../Assets/righticon.png";
import heroBackgroundImage from "../../../Assets/BackgroundGradiant.png";
import homeServiceBackground from "../../../Assets/homeServicesBackground.png";
import Mission from "../../../Assets/Mission.png";
import SmallScaleLarge from "../../../Assets/SmallScaleLarge.png";
import Vision from "../../../Assets/Vision.png";
import HR from "../../../Assets/HR.png";
import MobileApp_1 from "../../../Assets/MobileApp_1.png";
import RoasterManagement from "../../../Assets/rm.png";
import PayrollImage from "../../../Assets/Payroll.png";
import ParticipantRegistryImage from "../../../Assets/PR.png";
import RepositoryImg from "../../../Assets/Repository.png";
import twentyFourSeven from "../../../Assets/24_7.png";
import timesheets from "../../../Assets/svg/timesheets.svg";
import companiesPayroll from "../../../Assets/svg/companiesPayroll.svg";
import payroll from "../../../Assets/svg/payroll.svg";
import repository from "../../../Assets/svg/repository.svg";
import mobileApp from "../../../Assets/svg/mobileApp.svg";
import support from "../../../Assets/svg/support.svg";
import issueRegister from "../../../Assets/svg/issueRegister.svg";
import consultancyPayroll from "../../../Assets/svg/consultancyPayroll.svg";
import TopNav from "../../../Components/TopNav/TopNav";

const Consultancy = () => {
  return (
    <div>
      <TopNav type="secondary" />
      {/* <ImageWithContent data={ProductsHero} frame="Products" framePosition=""/> */}
      <div className="ProductsConsultancyIntroduction">
        <div className="ProductsConsultancyIntroduction__container">
          <div className="ProductsConsultancyIntroduction__imageContent">
          <img src={companiesPayroll} alt="ProductsConsultancyIntroduction__image1" className="ProductsConsultancyIntroduction__image" />
          </div>
          <div className="ProductsConsultancyIntroduction__content">
            <div className="ProductsConsultancyIntroduction__heading">Consulting Agencies</div>
            <div className="ProductsConsultancyIntroduction__text">Tesseract provides consulting agencies with tools to streamline HR processes, manage payroll, and ensure efficient operations, all through a unified platform.</div>
            <div className="ProductsConsultancyIntroduction__buttons">
                  <button className="tesseract-button-products">Start your free trial
                  </button>
                  <button className="tesseract-button-outline">Make an enquiry
                    <img src={rightIcon} alt="right-icon" className="right-icon" />
                </button>
            </div>
          </div>
        </div>
      </div>
      <div className="ProductsConsultancyHR">
        <div className="ProductsConsultancyHR__container">
          <div className="ProductsConsultancyHR__content">
            <div className="ProductsConsultancyHR__heading">Staff Registry/ Human resources</div>
            <div className="ProductsConsultancyHR__text">
            Post new jobs, Conduct interviews, shortlist candidates, paperless onboarding, training and evalulations, rewards and recognitions, leave management, tracking performance ratings
            </div>
            <div className="ProductsConsultancyHR__buttons">
                <button className="tesseract-button-primary">Request a demo</button>
            </div>
          </div>
          <div className="ProductsConsultancyHR__imageContent">
          <img src={HR} alt="ProductsConsultancyHR__image1" className="ProductsConsultancyHR__image" />
          </div>
        </div>
      </div>
      <div className="ProductsConsultancyTimesheets">
        <img src={homeServiceBackground} alt="herobackgroundImage.." className="ProductsConsultancyTimesheets__backgroundImage" />
        <div className="ProductsConsultancyTimesheets__container">
          <div className="ProductsConsultancyTimesheets__imageContent">
          <img src={timesheets} alt="ProductsConsultancyTimesheets__image1" className="ProductsConsultancyTimesheets__image" />
          </div>
          <div className="ProductsConsultancyTimesheets__content">
            <div className="ProductsConsultancyTimesheets__heading">Timesheets</div>
            <div className="ProductsConsultancyTimesheets__text">Optimize team scheduling with our intuitive roster management tool. Effortlessly create, adjust, and share rosters while keeping labor costs in check.</div>
          </div>
        </div>
      </div>
      <div className="ProductsConsultancyPayroll">
        <div className="ProductsConsultancyPayroll__container">
          <div className="ProductsConsultancyPayroll__content">
            <div className="ProductsConsultancyPayroll__heading">Payroll</div>
            <div className="ProductsConsultancyPayroll__text">Generate payslips, STP reporting, Super annuation reporting, IAS and BAS, Track expenses, Generate Invoices and adhoc reporting, payments can be done via secured payment gateway system</div>
          </div>
          <div className="ProductsConsultancyPayroll__imageContent">
          <img src={consultancyPayroll} alt="ProductsConsultancyPayroll__image1" className="ProductsConsultancyPayroll__image" />
          </div>
        </div>
      </div>
      <div className="ProductsConsultancyRepository">
        <img src={homeServiceBackground} alt="herobackgroundImage.." className="ProductsConsultancyRepository__backgroundImage" />
        <div className="ProductsConsultancyRepository__container">
          <div className="ProductsConsultancyRepository__imageContent">
          <img src={repository} alt="ProductsConsultancyRepository__image1" className="ProductsConsultancyRepository__image" />
          </div>
          <div className="ProductsConsultancyRepository__content">
            <div className="ProductsConsultancyRepository__heading">Repository</div>
            <div className="ProductsConsultancyRepository__text">Store your documents securely in a cloud based location for ease of access from anywhere </div>
          </div>
        </div>
      </div>
      <div className="ProductsConsultancyMobileApp">
        <div className="ProductsConsultancyMobileApp__container">
          <div className="ProductsConsultancyMobileApp__content">
            <div className="ProductsConsultancyMobileApp__heading">Mobile App</div>
            <div className="ProductsConsultancyMobileApp__text">Access key features on-the-go with the Tesseract mobile app. Download today from the Apple App Store or Google Play Store and bring efficiency to your fingertips. Free, with unlimited user access.</div>
          </div>
          <div className="ProductsConsultancyMobileApp__imageContent">
          <img src={mobileApp} alt="ProductsConsultancyMobileApp__image1" className="ProductsConsultancyMobileApp__image" />
          </div>
        </div>
      </div>
      <div className="ProductsConsultancySupport">
        <img src={homeServiceBackground} alt="herobackgroundImage.." className="ProductsConsultancySupport__backgroundImage" />
        <div className="ProductsConsultancySupport__container">
          <div className="ProductsConsultancySupport__imageContent">
          <img src={support} alt="ProductsConsultancySupport__image1" className="ProductsConsultancySupport__image" />
          </div>
          <div className="ProductsConsultancySupport__content">
            <div className="ProductsConsultancySupport__heading">24/7 Support</div>
            <div className="ProductsConsultancySupport__text">Our dedicated support team is available around the clock to assist you, ensuring your operations run smoothly without interruption.</div>
          </div>
        </div>
      </div>
      <div className="ProductsConsultancyIssueRegister">
        <div className="ProductsConsultancyIssueRegister__container">
          <div className="ProductsConsultancyIssueRegister__content">
            <div className="ProductsConsultancyIssueRegister__heading">Issue Register</div>
            <div className="ProductsConsultancyIssueRegister__text">Track and manage issues efficiently with our comprehensive Issue Register, designed to support project management through detailed tracking and updates.</div>
          </div>
          <div className="ProductsConsultancyIssueRegister__imageContent">
          <img src={issueRegister} alt="ProductsConsultancyIssueRegister__image1" className="ProductsConsultancyIssueRegister__image" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};


export default Consultancy;