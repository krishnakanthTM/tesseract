import React from "react";
import "./Products.scss";
import Footer from "../../Components/Footer/Footer";
import ImageWithContent from "../../Components/ImageWithContent/ImageWithContent";
import saly19 from "../../Assets/Saly-19.png";
import rightIcon from "../../Assets/righticon.png";
import heroBackgroundImage from "../../Assets/BackgroundGradiant.png";
import homeServiceBackground from "../../Assets/homeServicesBackground.png";
import Mission from "../../Assets/Mission.png";
import SmallScaleLarge from "../../Assets/SmallScaleLarge.png";
import Vision from "../../Assets/Vision.png";
import HR from "../../Assets/HR.png";
import MobileApp_1 from "../../Assets/MobileApp_1.png";
import RoasterManagement from "../../Assets/rm.png";
import PayrollImage from "../../Assets/Payroll.png";
import ParticipantRegistryImage from "../../Assets/PR.png";
import RepositoryImg from "../../Assets/Repository.png";
import twentyFourSeven from "../../Assets/24_7.png";
import issueRegister from "../../Assets/issue-register.png";
import {
  AssignmentsAndAlerts,
  EmpowerBusiness,
  NDISSector,
  ParticipantRegistry,
  Payroll,
  ProductsHero,
  StaffManagement,
  OurMission,
  OurVision,
  HumanResources,
  MobileAppPrimary,
  RosterManagement,
  Repository,
  MobileAppSecondary,
  Support,
  IssueRegister
} from "./ProductsData";
import TopNav from "../../Components/TopNav/TopNav";

const Products = () => {
  return (
    <div>
      <TopNav type="secondary" />
      {/* <ImageWithContent data={ProductsHero} frame="Products" framePosition=""/> */}
      <div className="ProductsIntroduction">
        <img src={heroBackgroundImage} alt="herobackgroundImage.." className="ProductsIntroduction__backgroundImage" />
        <div className="ProductsIntroduction__container">
          <div className="ProductsIntroduction__content">
            <div className="ProductsIntroduction__heading">Unlock the power of efficiency with Tesseract</div>
            <div className="ProductsIntroduction__text"> Welcome to Tesseract – your comprehensive solution for small and medium enterprises within Australia especially tailored for NDIS providers, Payroll, and Consultancy enterprises. We offer a unified cloud based platform that optimizes your daily tasks, enhances productivity, and fosters team collaboration.</div>
            <div className="ProductsIntroduction__buttons">
                  <button className="tesseract-button-primary">Start your free trial
                  </button>
                  <button className="tesseract-button-outline">Make an enquiry
                    <img src={rightIcon} alt="right-icon" className="right-icon" />
                </button>
            </div>
          </div>
          <div className="ProductsIntroduction__imageContent">
          <img src={saly19} alt="ProductsIntroduction__image1" className="ProductsIntroduction__image" />
          </div>
        </div>
      </div>
      {/* <ImageWithContent data={EmpowerBusiness} frame="Empower" framePosition=""/> */}
      <div className="ProductsIntroduction">
        <div className="ProductsIntroduction__container">
          <div className="ProductsIntroduction__imageContent">
          <img src={SmallScaleLarge} alt="ProductsIntroduction__image1" className="ProductsIntroduction__image" />
          </div>
          <div className="ProductsIntroduction__content">
            <div className="ProductsBusiness__heading">Empowering Small and Medium Businesses</div>
            <div className="ProductsBusiness__text"> At Tesseract, we understand the everyday challenges faced by small and medium businesses. That's why we've crafted a workforce management application tailored to streamline your operations. Our solution boosts efficiency and simplifies daily tasks, all secured on a robust cloud-based CRM platform.</div>
            <div className="ProductsIntroduction__buttons">
                <button className="tesseract-button-primary">Request a demo</button>
            </div>
          </div>
        </div>
      </div>
      {/* <ImageWithContent data={OurMission} frame="Mission" framePosition=""/> */}
      <div className="ProductsMission">
        <img src={homeServiceBackground} alt="herobackgroundImage.." className="ProductsMission__backgroundImage" />
        <div className="ProductsMission__container">
          <div className="ProductsIntroduction__content">
            <div className="ProductsIntroduction__heading">Our Mission</div>
            <div className="ProductsMission__text">To Inspire simplicity by introducing technology that everyone can use.</div>
          </div>
          <div className="ProductsMission__imageContent">
          <img src={Mission} alt="ProductsIntroduction__image1" className="ProductsIntroduction__image" />
          </div>
        </div>
      </div>
      {/* <ImageWithContent data={OurVision} frame="Mission" framePosition=""/> */}
      <div className="ProductsIntroduction">
        <div className="ProductsIntroduction__container">
          <div className="ProductsIntroduction__imageContent">
          <img src={Vision} alt="ProductsIntroduction__image1" className="ProductsIntroduction__image" />
          </div>
          <div className="ProductsIntroduction__content">
            <div className="ProductsBusiness__heading">Our Vision</div>
            <div className="ProductsBusiness__text"> To be a business that helps businesses with care.</div>
          </div>
        </div>
      </div>
      {/* <ImageWithContent data={HumanResources} frame="HumanResource" framePosition="ImgTxt"/> */}
      <div className="ProductsMission">
        <img src={homeServiceBackground} alt="herobackgroundImage.." className="ProductsMission__backgroundImage" />
        <div className="ProductsMission__container">
          <div className="ProductsIntroduction__content">
            <div className="ProductsIntroduction__heading">Human Resources</div>
            <div className="ProductsHumanResources__text">
              <ul>
                <li>Applicant Tracking</li>
                <li>New Hire Onboarding</li>
                <li>Offboarding</li>
                <li>Performance Management</li>
                <li>Leave Management</li>
                <li>Training</li>
                <li>Rewards and recognition.</li>
              </ul>
            </div>
          </div>
          <div className="ProductsMission__imageContent">
          <img src={HR} alt="ProductsIntroduction__image1" className="ProductsIntroduction__image" />
          </div>
        </div>
      </div>
      {/* <ImageWithContent data={MobileAppPrimary} frame="MobileAppPrimary" framePosition="TxtImg"/> */}
      <div className="ProductsIntroduction">
        <div className="ProductsIntroduction__container">
          <div className="ProductsIntroduction__imageContent">
          <img src={MobileApp_1} alt="ProductsIntroduction__image1" className="ProductsIntroduction__image" />
          </div>
          <div className="ProductsIntroduction__content">
            <div className="ProductsBusiness__heading">Mobile App</div>
            <div className="ProductsBusiness__text">Access key features on-the-go with the Tesseract mobile app. Download today from the Apple App Store or Google Play Store and bring efficiency to your fingertips. Free, with unlimited user access.</div>
          </div>
        </div>
      </div>
      {/* <ImageWithContent data={RosterManagement} frame="RosterManagement" framePosition="ImgTxt"/> */}
      <div className="ProductsMission">
        <img src={homeServiceBackground} alt="herobackgroundImage.." className="ProductsMission__backgroundImage" />
        <div className="ProductsMission__container">
          <div className="ProductsIntroduction__content">
            <div className="ProductsIntroduction__heading">Roster Management</div>
            <div className="ProductsRoasterManagement__text">Optimize team scheduling with our intuitive roster management tool. Effortlessly create, adjust, and share rosters while keeping labor costs in check.</div>
          </div>
          <div className="ProductsMission__imageContent">
          <img src={RoasterManagement} alt="ProductsIntroduction__image1" className="ProductsIntroduction__image" />
          </div>
        </div>
      </div>
      {/* <ImageWithContent data={Payroll} frame="Payroll" /> */}
      <div className="ProductsIntroduction">
        <div className="ProductsIntroduction__container">
          <div className="ProductsIntroduction__imageContent">
          <img src={PayrollImage} alt="ProductsIntroduction__image1" className="ProductsIntroduction__image" />
          </div>
          <div className="ProductsIntroduction__content">
            <div className="ProductsBusiness__heading">Payroll</div>
            <div className="ProductsBusiness__text">Simplify payroll processes with our efficient, cloud-based system. Handle payments, superannuation, and reports with ease, all in a few clicks.</div>
            <div className="ProductsPayRoll__text">
              <ul>
                <li>STP Compliance</li>
                <li>Invoice Generation</li>
                <li>Expense Tracking</li>
                <li>BAS and IAS Reporting</li>
                <li>Simplified Payroll</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <ImageWithContent data={ParticipantRegistry} frame="Participant"/>  */}
      <div className="ProductsMission">
        <img src={homeServiceBackground} alt="herobackgroundImage.." className="ProductsMission__backgroundImage" />
        <div className="ProductsMission__container">
          <div className="ProductsIntroduction__content">
            <div className="ProductsIntroduction__heading">Participant Registry</div>
            <div className="ProductsRoasterManagement__text">Welcome to our comprehensive participant and service management system, designed to streamline support and care in programs like the National Disability Insurance Scheme (NDIS). Our platform enables efficient participant record management, real-time funds tracking, automated invoice generation, personalized care plan creation, seamless assessments, and service agreement management. For multi- caregiver scenarios, we offer convenient shift report generation. Our user-friendly software ensures effective care delivery, financial transparency, and compliance with program guidelines. Rest assured, we prioritize data security and privacy to safeguard sensitive information.</div>
          <div className="ProductsIntroduction__buttons">
            <button className="tesseract-button-primary">Request a demo</button>
          </div>
          </div>
          <div className="ProductsMission__imageContent">
          <img src={ParticipantRegistryImage} alt="ProductsIntroduction__image1" className="ProductsIntroduction__image" />
          </div>
        </div>
      </div>
      {/* <ImageWithContent data={Repository} frame="Repository" framePosition="TxtImg"/> */}
      <div className="ProductsIntroduction">
        <div className="ProductsIntroduction__container">
          <div className="ProductsIntroduction__imageContent">
          <img src={RepositoryImg} alt="ProductsIntroduction__image1" className="ProductsIntroduction__image" />
          </div>
          <div className="ProductsIntroduction__content">
            <div className="ProductsBusiness__heading">Repository</div>
            <div className="ProductsBusiness__text">Secure and manage your critical documents with Tesseract Repository, enhancing collaboration and information access across your organization.</div>
          </div>
        </div>
      </div>
      {/* <ImageWithContent data={MobileAppSecondary} frame="MobileAppSecondary" framePosition="ImgTxt"/> */}
      {/* <ImageWithContent data={Support} frame="Support" framePosition="ImgTxt"/> */}
      <div className="ProductsMission">
        <img src={homeServiceBackground} alt="herobackgroundImage.." className="ProductsMission__backgroundImage" />
        <div className="ProductsMission__container">
          <div className="ProductsIntroduction__content">
            <div className="ProductsIntroduction__heading">24/7 Support</div>
            <div className="ProductsRoasterManagement__text">Our dedicated support team is available around the clock to assist you, ensuring your operations run smoothly without interruption.</div>
          </div>
          <div className="ProductsMission__imageContent">
          <img src={twentyFourSeven} alt="ProductsIntroduction__image1" className="ProductsIntroduction__image" />
          </div>
        </div>
      </div>
      {/* <ImageWithContent data={IssueRegister} frame="IssueRegister" framePosition="TxtImg"/> */}
      <div className="ProductsIntroduction">
        <div className="ProductsIntroduction__container">
          <div className="ProductsIntroduction__imageContent">
          <img src={issueRegister} alt="ProductsIntroduction__image1" className="ProductsIntroduction__image" />
          </div>
          <div className="ProductsIntroduction__content">
            <div className="ProductsBusiness__heading">Issue Register</div>
            <div className="ProductsBusiness__text">Track and manage issues efficiently with our comprehensive Issue Register, designed to support project management through detailed tracking and updates.</div>
          </div>
        </div>
      </div>
      {/* <ImageWithContent data={HumanResources} frame="Mission"/> */}
      {/* <ImageWithContent data={StaffManagement} frame="Staff"/> */}
      {/* <ImageWithContent data={NDISSector} frame="NDIS"/> */}
      {/* 
      <ImageWithContent data={AssignmentsAndAlerts} frame="Assignments"/>
      <ImageWithContent data={ParticipantRegistry} frame="Participant"/> */}
      <Footer />
    </div>
  );
};

export default Products;
