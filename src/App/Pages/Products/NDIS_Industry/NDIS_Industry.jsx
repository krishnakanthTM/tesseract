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
import ScrollToTop from "../../../Components/ScrollToTop/ScrollToTop";

const NDISIndustry = () => {
  return (
    <div>
        <ScrollToTop />
      <TopNav type="secondary" />
      {/* <ImageWithContent data={ProductsHero} frame="Products" framePosition=""/> */}
      <div className="ProductsNDISIntroduction">
        <div className="ProductsNDISIntroduction__container">
          <div className="ProductsNDISIntroduction__imageContent">
                <img src={saly19} alt="ProductsNDISIntroduction__image1" className="ProductsNDISIntroduction__image" />
          </div>
          <div className="ProductsNDISIntroduction__content">
            <div className="ProductsNDISIntroduction__heading">NDIS Providers</div>
            <div className="ProductsNDISIntroduction__text"> Tesseract’s platform is designed to empower NDIS providers by offering tools that simplify the management of participant data, service tracking, cost management, and invoicing. Our solution ensures compliance with NDIS guidelines, making documentation easy to manage and access. With Tesseract, NDIS providers can focus on delivering quality care while we handle the administrative complexities.</div>
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
            <div className="ProductsNDISMission__heading">Staff Registry/ Human Resources</div>
            <div className="ProductsNDISMission__text">Efficiently post new jobs, conduct interviews, shortlist candidates, and manage paperless onboarding. Facilitate training and evaluations, recognize achievements, and handle leave management and performance tracking.
            </div>
            {/* <div className="ProductsNDISIntroduction__buttons">
                <button className="tesseract-button-primary">Request a demo</button>
            </div> */}
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
            <div className="ProductsNDISRoasterManagement__text">Seamlessly create over 1000 shifts, manage rosters with both casual and full-time employees, generate expressions of interest, and send notifications. </div>
          </div>
        </div>
      </div>
      <div className="ProductsNDISParticipantRegistry">
        <div className="ProductsNDISParticipantRegistry__container">
          <div className="ProductsNDISParticipantRegistry__content">
            {/* <div className="ProductsNDISParticipantRegistry__heading">Participant Registry</div> */}
            <div className="ProductsNDISShiftReports__heading">Participant Registry</div>
            <div className="ProductsNDISParticipantRegistry__text">Create comprehensive service agreements, capture detailed shift, progress, and care notes, track funds spent, and generate accurate invoices.</div>
          {/* <div className="ProductsNDISParticipantRegistry__buttons">
            <button className="tesseract-button-primary">Request a demo</button>
          </div> */}
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
            <div className="ProductsNDISSignIn__heading">Sign-in/Out</div>
            <div className="ProductsNDISSignIn__text">Enable staff to sign in and out directly from the mobile application, ensuring accurate attendance records. </div>
          </div>
        </div>
      </div>
      <div className="ProductsNDISShiftReports">
        <div className="ProductsNDISShiftReports__container">
          <div className="ProductsNDISShiftReports__content">
            <div className="ProductsNDISShiftReports__heading">Shift Reports</div>
            <div className="ProductsNDISShiftReports__text">Generate detailed and comprehensive shift reports to keep track of all activities and changes.</div>
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
            <div className="ProductsNDISTimesheet__text">Manage timesheets efficiently and ensure accurate time tracking for all employees.</div>
          </div>
        </div>
      </div>
      <div className="ProductsNDISPayroll">
        <div className="ProductsNDISPayroll__container">
          <div className="ProductsNDISPayroll__content">
            <div className="ProductsNDISPayroll__heading">Payroll</div>
            <div className="ProductsNDISPayroll__text">Generate payslips, handle STP reporting, manage superannuation, IAS, and BAS. Track expenses and generate invoices with the capability of secure payment processing.</div>
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
            <div className="ProductsNDISRepository__text">Store and access documents securely in a cloud-based location, ensuring they are available whenever needed. </div>
          </div>
        </div>
      </div>
      <div className="ProductsNDISMobileApp">
        <div className="ProductsNDISMobileApp__container">
          <div className="ProductsNDISMobileApp__content">
            <div className="ProductsNDISMobileApp__heading">Mobile App</div>
            <div className="ProductsNDISMobileApp__text">Use geotagging capabilities to track staff locations and activities effectively.</div>
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
            <div className="ProductsNDISSupport__text">Access dedicated support around the clock to resolve any issues promptly. </div>
          </div>
        </div>
      </div>
      <div className="ProductsNDISIssueRegister">
        <div className="ProductsNDISIssueRegister__container">
          <div className="ProductsNDISIssueRegister__content">
            <div className="ProductsNDISIssueRegister__heading">Issue Register</div>
            <div className="ProductsNDISIssueRegister__text">Track and manage issues efficiently to ensure quick resolution and continuous improvement. </div>
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