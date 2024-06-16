import React from "react";
import "./NDIS_Industry.scss";
import Footer from "../../../Components/Footer/Footer";
import saly19 from "../../../Assets/Saly-19.png";
import rightIcon from "../../../Assets/righticon.png";
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
import TopNav from "../../../Components/TopNav/TopNav";
import signIn from "../../../Assets/svg/signIn.svg";
import shiftReports from "../../../Assets/svg/shiftReports.svg";
import timesheets from "../../../Assets/svg/timesheets.svg";
import payroll from "../../../Assets/svg/payroll.svg";
import repository from "../../../Assets/svg/repository.svg";
import mobileApp from "../../../Assets/svg/mobileApp.svg";
import support from "../../../Assets/svg/support.svg";
import issueRegister from "../../../Assets/svg/issueRegister.svg";

const NDISIndustry = () => {
  return (
    <div>
      <TopNav type="secondary" />
      {/* <ImageWithContent data={ProductsHero} frame="Products" framePosition=""/> */}
      <div className="ProductsNDISIntroduction">
        <div className="ProductsNDISIntroduction__container">
          <div className="ProductsNDISIntroduction__imageContent">
                <img src={saly19} alt="ProductsNDISIntroduction__image1" className="ProductsNDISIntroduction__image" />
          </div>
          <div className="ProductsNDISIntroduction__content">
            <div className="ProductsNDISIntroduction__heading">Unlock the power of efficiency with Tesseract</div>
            <div className="ProductsNDISIntroduction__text"> Welcome to Tesseract – your comprehensive solution for small and medium enterprises within Australia especially tailored for NDIS providers, Payroll, and Consultancy enterprises. We offer a unified cloud based platform that optimizes your daily tasks, enhances productivity, and fosters team collaboration.</div>
            <div className="ProductsNDISIntroduction__buttons">
                  <button className="tesseract-button-products">Start your free trial
                  </button>
                  <button className="tesseract-button-outline">Make an enquiry
                    <img src={rightIcon} alt="right-icon" className="right-icon" />
                </button>
            </div>
          </div>
        </div>
      </div>
      <div className="ProductsNDISMission">
        <div className="ProductsNDISMission__container">
          <div className="ProductsNDISMission__content">
            <div className="ProductsNDISMission__heading">Staff Registry/ Human resources</div>
            <div className="ProductsNDISMission__text">
            Post new jobs, Conduct interviews, shortlist candidates, paperless onboarding, training and evalulations, rewards and recognitions, leave management, tracking performance ratings
            </div>
            <div className="ProductsIntroduction__buttons">
                <button className="tesseract-button-primary">Request a demo</button>
            </div>
          </div>
          <div className="ProductsNDISMission__imageContent">
          <img src={HR} alt="ProductsIntroduction__image1" className="ProductsIntroduction__image" />
          </div>
        </div>
      </div>
      <div className="ProductsNDISRoasterManagement">
        <img src={homeServiceBackground} alt="herobackgroundImage.." className="ProductsNDISRoasterManagement__backgroundImage" />
        <div className="ProductsNDISRoasterManagement__container">
          <div className="ProductsNDISRoasterManagement__imageContent">
          <img src={RoasterManagement} alt="ProductsIntroduction__image1" className="ProductsNDISRoasterManagement__image" />
          </div>
          <div className="ProductsNDISRoasterManagement__content">
            <div className="ProductsNDISRoasterManagement__heading">Roster Management</div>
            <div className="ProductsNDISRoasterManagement__text">Create 1000+ shifts, manage rosters with casual and full time employees, generate expression of interests on rosters, publish, and send notifications</div>
          </div>
        </div>
      </div>
      <div className="ProductsNDISParticipantRegistry">
        <div className="ProductsNDISParticipantRegistry__container">
          <div className="ProductsNDISParticipantRegistry__content">
            <div className="ProductsNDISParticipantRegistry__heading">Participant registry</div>
            <div className="ProductsNDISParticipantRegistry__text">Create service agreements, capture shift notes, progress notes, and care notes for the participants, Track funds spent, generate invoices</div>
          <div className="ProductsNDISParticipantRegistry__buttons">
            <button className="tesseract-button-primary">Request a demo</button>
          </div>
          </div>
          <div className="ProductsMission__imageContent">
          <img src={ParticipantRegistryImage} alt="ProductsNDISParticipantRegistry__image1" className="ProductsNDISParticipantRegistry__image" />
          </div>
        </div>
      </div>
      <div className="ProductsNDISSignIn">
        <img src={homeServiceBackground} alt="herobackgroundImage.." className="ProductsNDISSignIn__backgroundImage" />
        <div className="ProductsNDISSignIn__container">
          <div className="ProductsNDISSignIn__imageContent">
          <img src={signIn} alt="ProductsNDISSignIn__image1" className="ProductsNDISSignIn__image" />
          </div>
          <div className="ProductsNDISSignIn__content">
            <div className="ProductsNDISSignIn__heading">Sign-in/out</div>
            <div className="ProductsNDISSignIn__text">Allows staff to sign in and sign on from the mobile application</div>
          </div>
        </div>
      </div>
      <div className="ProductsNDISShiftReports">
        <div className="ProductsNDISShiftReports__container">
          <div className="ProductsNDISShiftReports__content">
            <div className="ProductsNDISShiftReports__heading">Shift reports</div>
            <div className="ProductsNDISShiftReports__text">Access key features on-the-go with the Tesseract mobile app. Download today from the Apple App Store or Google Play Store and bring efficiency to your fingertips. Free, with unlimited user access.</div>
          </div>
          <div className="ProductsNDISShiftReports__imageContent">
          <img src={shiftReports} alt="ProductsNDISShiftReportsn__image1" className="ProductsNDISShiftReports__image" />
          </div>
        </div>
      </div>
      <div className="ProductsNDISTimesheet">
        <img src={homeServiceBackground} alt="herobackgroundImage.." className="ProductsNDISTimesheet__backgroundImage" />
        <div className="ProductsNDISTimesheet__container">
          <div className="ProductsNDISTimesheet__imageContent">
          <img src={timesheets} alt="ProductsIntroduction__image1" className="ProductsNDISTimesheet__image" />
          </div>
          <div className="ProductsNDISTimesheet__content">
            <div className="ProductsNDISTimesheet__heading">Timesheets</div>
            <div className="ProductsNDISTimesheet__text">Optimize team scheduling with our intuitive roster management tool. Effortlessly create, adjust, and share rosters while keeping labor costs in check.</div>
          </div>
        </div>
      </div>
      <div className="ProductsNDISPayroll">
        <div className="ProductsNDISPayroll__container">
          <div className="ProductsNDISPayroll__content">
            <div className="ProductsNDISPayroll__heading">Payroll</div>
            <div className="ProductsNDISPayroll__text">Generate payslips, STP reporting, Super annuation reporting, IAS and BAS, Track expenses, Generate Invoices and adhoc reporting, payments can be done via secured payment gateway system</div>
          </div>
          <div className="ProductsNDISPayroll__imageContent">
          <img src={payroll} alt="ProductsIntroduction__image1" className="ProductsNDISPayroll__image" />
          </div>
        </div>
      </div>
      <div className="ProductsNDISRepository">
        <img src={homeServiceBackground} alt="herobackgroundImage.." className="ProductsNDISRepository__backgroundImage" />
        <div className="ProductsNDISRepository__container">
          <div className="ProductsNDISRepository__imageContent">
          <img src={repository} alt="ProductsNDISRepository__image1" className="ProductsNDISRepository__image" />
          </div>
          <div className="ProductsNDISRepository__content">
            <div className="ProductsNDISRepository__heading">Repository</div>
            <div className="ProductsNDISRepository__text">Store your documents securely in a cloud based location for ease of access from anywhere </div>
          </div>
        </div>
      </div>
      <div className="ProductsNDISMobileApp">
        <div className="ProductsNDISMobileApp__container">
          <div className="ProductsNDISMobileApp__content">
            <div className="ProductsNDISMobileApp__heading">Mobile App</div>
            <div className="ProductsNDISMobileApp__text">Access key features on-the-go with the Tesseract mobile app. Download today from the Apple App Store or Google Play Store and bring efficiency to your fingertips. Free, with unlimited user access.</div>
          </div>
          <div className="ProductsNDISMobileApp__imageContent">
          <img src={mobileApp} alt="ProductsNDISMobileApp__image1" className="ProductsNDISMobileApp__image" />
          </div>
        </div>
      </div>
      <div className="ProductsNDISSupport">
        <img src={homeServiceBackground} alt="herobackgroundImage.." className="ProductsNDISSupport__backgroundImage" />
        <div className="ProductsNDISSupport__container">
          <div className="ProductsNDISSupport__imageContent">
          <img src={support} alt="ProductsNDISSupport__image1" className="ProductsNDISSupport__image" />
          </div>
          <div className="ProductsNDISSupport__content">
            <div className="ProductsNDISSupport__heading">24/7 Support</div>
            <div className="ProductsNDISSupport__text">Our dedicated support team is available around the clock to assist you, ensuring your operations run smoothly without interruption.</div>
          </div>
        </div>
      </div>
      <div className="ProductsNDISIssueRegister">
        <div className="ProductsNDISIssueRegister__container">
          <div className="ProductsNDISIssueRegister__content">
            <div className="ProductsNDISIssueRegister__heading">Issue Register</div>
            <div className="ProductsNDISIssueRegister__text">Track and manage issues efficiently with our comprehensive Issue Register, designed to support project management through detailed tracking and updates.</div>
          </div>
          <div className="ProductsNDISIssueRegister__imageContent">
          <img src={issueRegister} alt="ProductsNDISIssueRegister__image1" className="ProductsNDISIssueRegister__image" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};


export default NDISIndustry;