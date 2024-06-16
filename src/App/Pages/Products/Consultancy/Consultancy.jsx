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
import consultancyCompanies from "../../../Assets/svg/consultancyCompanies.svg";
import payroll from "../../../Assets/svg/payroll.svg";
import repository from "../../../Assets/svg/repository.svg";
import mobileApp from "../../../Assets/svg/mobileApp.svg";
import support from "../../../Assets/svg/support.svg";
import issueRegister from "../../../Assets/svg/issueRegister.svg";
import consultancyPayroll from "../../../Assets/svg/consultancyPayroll.svg";
import TopNav from "../../../Components/TopNav/TopNav";
import ScrollToTop from "../../../Components/ScrollToTop/ScrollToTop";

const Consultancy = () => {
  return (
    <div>
      <ScrollToTop />
      <TopNav type="secondary" />
      {/* <ImageWithContent data={ProductsHero} frame="Products" framePosition=""/> */}
      <div className="ProductsConsultancyIntroduction">
        <div className="ProductsConsultancyIntroduction__container">
          <div className="ProductsConsultancyIntroduction__imageContent">
          <img src={consultancyCompanies} alt="ProductsConsultancyIntroduction__image1" className="ProductsConsultancyIntroduction__image" />
          </div>
          <div className="ProductsConsultancyIntroduction__content">
            <div className="ProductsConsultancyIntroduction__heading">Consulting Agencies</div>
            <div className="ProductsConsultancyIntroduction__text">Tesseract provides consulting agencies with a comprehensive platform that enhances HR and payroll processes, driving operational efficiency and team collaboration. Our solution helps consulting firms manage their workforce effectively, from recruitment to payroll, all within a unified system. Tesseract ensures that consulting agencies can focus on delivering value to their clients while we handle the administrative tasks.</div>
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
            <div className="ProductsConsultancyHR__heading">Staff Registry/ Human Resources</div>
            <div className="ProductsConsultancyHR__text">Post job openings, conduct interviews, shortlist candidates, and manage onboarding. Facilitate ongoing training, performance evaluations, rewards, and recognitions, as well as leave management. 
            </div>
            {/* <div className="ProductsConsultancyHR__buttons">
                <button className="tesseract-button-primary">Request a demo</button>
            </div> */}
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
            <div className="ProductsConsultancyTimesheets__text">Ensure precise time tracking and efficient timesheet management to support accurate payroll processing. </div>
          </div>
        </div>
      </div>
      <div className="ProductsConsultancyPayroll">
        <div className="ProductsConsultancyPayroll__container">
          <div className="ProductsConsultancyPayroll__content">
            <div className="ProductsConsultancyPayroll__heading">Payroll</div>
            <div className="ProductsConsultancyPayroll__text">Generate payslips, handle STP reporting, manage superannuation, IAS, and BAS. Track expenses and process payments securely through an integrated system. </div>
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
            <div className="ProductsConsultancyRepository__text">Keep all HR and payroll documents securely stored and easily accessible in the cloud.</div>
          </div>
        </div>
      </div>
      <div className="ProductsConsultancyMobileApp">
        <div className="ProductsConsultancyMobileApp__container">
          <div className="ProductsConsultancyMobileApp__content">
            <div className="ProductsConsultancyMobileApp__heading">Mobile App</div>
            <div className="ProductsConsultancyMobileApp__text">Leverage geotagging features to monitor staff locations and activities efficiently. </div>
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
            <div className="ProductsConsultancySupport__text">Access continuous support to resolve any HR or payroll issues promptly and maintain smooth operations.</div>
          </div>
        </div>
      </div>
      <div className="ProductsConsultancyIssueRegister">
        <div className="ProductsConsultancyIssueRegister__container">
          <div className="ProductsConsultancyIssueRegister__content">
            <div className="ProductsConsultancyIssueRegister__heading">Issue Register</div>
            <div className="ProductsConsultancyIssueRegister__text">Manage and resolve any operational issues effectively to ensure continuous improvement and client satisfaction. </div>
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