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
      <div className="ProductsIntroduction">
        <div className="ProductsIntroduction__container">
          <div className="ProductsIntroduction__imageContent">
          <img src={companiesPayroll} alt="ProductsIntroduction__image1" className="ProductsIntroduction__image" />
          </div>
          <div className="ProductsIntroduction__content">
            <div className="ProductsIntroduction__heading">Payroll Companies</div>
            <div className="ProductsIntroduction__text"> Tesseract simplifies payroll management with features designed to handle all aspects of payroll processing and reporting, ensuring compliance and efficiency.</div>
            <div className="ProductsIntroduction__buttons">
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
          <div className="ProductPayroll__content">
            <div className="ProductsParticipantRegistry__heading">Payroll</div>
            <div className="ProductsParticipantRegistry__text">Generate payslips, STP reporting, Super annuation reporting, IAS and BAS, Track expenses, Generate Invoices and adhoc reporting, payments can be done via secured payment gateway system</div>
          </div>
          <div className="ProductsMission__imageContent">
          <img src={payroll} alt="ProductsIntroduction__image1" className="ProductsIntroduction__image" />
          </div>
        </div>
      </div>
      <div className="ProductsRoasterManagement">
        <img src={homeServiceBackground} alt="herobackgroundImage.." className="ProductsMission__backgroundImage" />
        <div className="ProductPayrollRepository__container">
          <div className="ProductsRoasterManagement__imageContent">
            <img src={repository} alt="ProductsIntroduction__image1" className="ProductsIntroduction__image" />
          </div>
          <div className="ProductsIntroduction__content">
            <div className="ProductsIntroduction__heading">Repository</div>
            <div className="ProductsRoasterManagement__text">Store your documents securely in a cloud based location for ease of access from anywhere </div>
          </div>
        </div>
      </div>
      <div className="ProductsMobileApp">
        <div className="ProductsMission__container">
          <div className="ProductPayrollMobileApp__content">
            <div className="ProductsParticipantRegistry__heading">Mobile App</div>
            <div className="ProductsParticipantRegistry__text">Access key features on-the-go with the Tesseract mobile app. Download today from the Apple App Store or Google Play Store and bring efficiency to your fingertips. Free, with unlimited user access.</div>
          </div>
            <div className="ProductsMission__imageContent">
                <img src={mobileApp} alt="ProductsIntroduction__image1" className="ProductsIntroduction__image" />
            </div>
        </div>
      </div>
      <div className="ProductsRoasterManagement">
        <img src={homeServiceBackground} alt="herobackgroundImage.." className="ProductsMission__backgroundImage" />
        <div className="ProductsSupport__container">
          <div className="ProductsRoasterManagement__imageContent">
            <img src={support} alt="ProductsIntroduction__image1" className="ProductsIntroduction__image" />
          </div>
          <div className="ProductsPayrollSupport__content">
            <div className="ProductsIntroduction__heading">24/7 Support</div>
            <div className="ProductsRoasterManagement__text">Our dedicated support team is available around the clock to assist you, ensuring your operations run smoothly without interruption.</div>
          </div>
        </div>
      </div>
      <div className="ProductsIssueRegister">
        <div className="ProductsMission__container">
          <div className="ProductsIntroduction__content">
            <div className="ProductsParticipantRegistry__heading">Issue Register</div>
            <div className="ProductsParticipantRegistry__text">Track and manage issues efficiently with our comprehensive Issue Register, designed to support project management through detailed tracking and updates.</div>
          </div>
          <div className="ProductsIssueRegister__imageContent">
            <img src={issueRegister} alt="ProductsIntroduction__image1" className="ProductsIntroduction__image" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};


export default Payroll;