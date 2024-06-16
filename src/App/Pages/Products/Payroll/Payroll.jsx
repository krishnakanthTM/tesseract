import React from "react";
import "./Payroll.scss";
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
import companiesPayroll from "../../../Assets/svg/companiesPayroll.svg";
import payroll from "../../../Assets/svg/payroll.svg";
import repository from "../../../Assets/svg/repository.svg";
import mobileApp from "../../../Assets/svg/mobileApp.svg";
import support from "../../../Assets/svg/support.svg";
import issueRegister from "../../../Assets/svg/issueRegister.svg";
import TopNav from "../../../Components/TopNav/TopNav";

const Payroll = () => {
  return (
    <div>
      <TopNav type="secondary" />
      {/* <ImageWithContent data={ProductsHero} frame="Products" framePosition=""/> */}
      <div className="ProductsPayrollIntroduction">
        <div className="ProductsPayrollIntroduction__container">
          <div className="ProductsPayrollIntroduction__imageContent">
          <img src={companiesPayroll} alt="ProductsPayrollIntroduction__image1" className="ProductsPayrollIntroduction__image" />
          </div>
          <div className="ProductsPayrollIntroduction__content">
            <div className="ProductsPayrollIntroduction__heading">Payroll Companies</div>
            <div className="ProductsPayrollIntroduction__text"> Tesseract simplifies payroll management with features designed to handle all aspects of payroll processing and reporting, ensuring compliance and efficiency.</div>
            <div className="ProductsPayrollIntroduction__buttons">
                  <button className="tesseract-button-products">Start your free trial
                  </button>
                  <button className="tesseract-button-outline">Make an enquiry
                    <img src={rightIcon} alt="right-icon" className="right-icon" />
                </button>
            </div>
          </div>
        </div>
      </div>
      <div className="ProductsPayrollShiftReports">
        <div className="ProductsPayrollShiftReports__container">
          <div className="ProductsPayrollShiftReports__content">
            <div className="ProductsPayrollShiftReports__heading">Payroll</div>
            <div className="ProductsPayrollShiftReports__text">Generate payslips, STP reporting, Super annuation reporting, IAS and BAS, Track expenses, Generate Invoices and adhoc reporting, payments can be done via secured payment gateway system</div>
          </div>
          <div className="ProductsPayrollShiftReports__imageContent">
          <img src={payroll} alt="ProductsIntroduction__image1" className="ProductsPayrollShiftReports__image" />
          </div>
        </div>
      </div>
      <div className="ProductsPayrollRepository">
        <img src={homeServiceBackground} alt="herobackgroundImage.." className="ProductsPayrollRepository__backgroundImage" />
        <div className="ProductsPayrollRepository__container">
          <div className="ProductsPayrollRepository__imageContent">
            <img src={repository} alt="ProductsPayrollRepository__image1" className="ProductsPayrollRepository__image" />
          </div>
          <div className="ProductsPayrollRepository__content">
            <div className="ProductsPayrollRepository__heading">Repository</div>
            <div className="ProductsPayrollRepository__text">Store your documents securely in a cloud based location for ease of access from anywhere </div>
          </div>
        </div>
      </div>
      <div className="ProductsPayrollMobileApp">
        <div className="ProductsPayrollMobileApp__container">
          <div className="ProductsPayrollMobileApp__content">
            <div className="ProductsPayrollMobileApp__heading">Mobile App</div>
            <div className="ProductsPayrollMobileApp__text">Access key features on-the-go with the Tesseract mobile app. Download today from the Apple App Store or Google Play Store and bring efficiency to your fingertips. Free, with unlimited user access.</div>
          </div>
            <div className="ProductsPayrollMobileApp__imageContent">
                <img src={mobileApp} alt="ProductsPayrollMobileApp__image1" className="ProductsPayrollMobileApp__image" />
            </div>
        </div>
      </div>
      <div className="ProductsPayrollSupport">
        <img src={homeServiceBackground} alt="herobackgroundImage.." className="ProductsMission__backgroundImage" />
        <div className="ProductsPayrollSupport__container">
          <div className="ProductsPayrollSupport__imageContent">
            <img src={support} alt="ProductsPayrollSupport__image1" className="ProductsPayrollSupport__image" />
          </div>
          <div className="ProductsPayrollSupport__content">
            <div className="ProductsPayrollSupport__heading">24/7 Support</div>
            <div className="ProductsPayrollSupport__text">Our dedicated support team is available around the clock to assist you, ensuring your operations run smoothly without interruption.</div>
          </div>
        </div>
      </div>
      <div className="ProductsPayrollIssueRegister">
        <div className="ProductsPayrollIssueRegister__container">
          <div className="ProductsPayrollIssueRegister__content">
            <div className="ProductsPayrollIssueRegister__heading">Issue Register</div>
            <div className="ProductsPayrollIssueRegister__text">Track and manage issues efficiently with our comprehensive Issue Register, designed to support project management through detailed tracking and updates.</div>
          </div>
          <div className="ProductsPayrollIssueRegister__imageContent">
            <img src={issueRegister} alt="ProductsPayrollIssueRegister__image1" className="ProductsPayrollIssueRegister__image" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};


export default Payroll;