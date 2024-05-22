import saly19 from "../../Assets/Saly-19.png";
import HR from "../../Assets/HR.png";
import SmallScaleLarge from "../../Assets/SmallScaleLarge.png";
import Mission from "../../Assets/Mission.png";
import Vision from "../../Assets/Vision.png";
import MobileApp_1 from "../../Assets/MobileApp_1.png";
import rm from "../../Assets/rm.png";
import ndis from "../../Assets/NDIS_1.png";
import StaffManagementImg from "../../Assets/Staff Management_1.jpg";
import PayrollImage from "../../Assets/Payroll.png";
import ParticipantRegistryImage from "../../Assets/PR.png";
import RepositoryImg from "../../Assets/Repository.png";
import MobileApp_2 from "../../Assets/MobileApp_2.png";
import twentyFourSeven from "../../Assets/24_7.png";
import issueRegister from "../../Assets/issue-register.png";
import AssignmentsAlerts from "../../Assets/Alerts.jpg";

export const componentTypes = {
  type0: "heroComponent-bg",
  type1: "rightImageLeftContent",
  type2: "leftImageRightContent",
};
export const ProductsHero = {
  image: saly19,
  heading: "Unlock the power of efficiency with Tesseract",
  text: "Welcome to Tesseract - your all-inclusive solution for NDIS providers, Payroll, and Consultancy businesses. We offer a unified platform on the cloud that optimizes your daily tasks, enhances productivity, and stimulates team cooperation.",
  buttons: [
    { title: "Start your free trial", type: "primary" },
    { title: "Make an enquiry", type: "outline", nav: "/ContactUs" },
  ],
  type: componentTypes.type0,
};

export const EmpowerBusiness = {
  image: SmallScaleLarge,
  heading: "Empowering Small and Medium Businesses",
  text: "At Tesseract, we understand the everyday challenges faced by small and medium businesses. That's why we've crafted a workforce management application tailored to streamline your operations. Our solution boosts efficiency and simplifies daily tasks, all secured on a robust cloud-based CRM platform.",
  buttons: [{ title: "Request a demo", type: "primary" }], 
  type: componentTypes.type1,
};

export const OurMission = {
  image: Mission,
  heading: "Our Mission",
  text: "To Inspire simplicity by introducing technology that everyone can use.",
  buttons: [],
  type: componentTypes.type2,
};

export const OurVision = {
  image: Vision,
  heading: "Our Vision",
  text: "To be a business that helps businesses with care.",
  buttons: [], 
  type: componentTypes.type1,
};

export const HumanResources = {
  image: HR,
  heading: "Human Resources",
  text: "",
  bulletPoints: [
    "Applicant Tracking",
    "New Hire Onboarding",
    "Offboarding",    
    "Performance Management",
    "Leave Management",
    "Training",
    "Rewards and recognition.",
  ],
  buttons: [], 
  type: componentTypes.type2,
};

export const MobileAppPrimary = {
  image: MobileApp_1,
  heading: "Mobile App",
  text: "Access key features on-the-go with the Tesseract mobile app. Download today from the Apple App Store or Google Play Store and bring efficiency to your fingertips. Free, with unlimited user access.",
  buttons: [],
  type: componentTypes.type1,
};

export const RosterManagement = {
  image: rm,
  heading: "Roster Management",
  text: "Optimize team scheduling with our intuitive roster management tool. Effortlessly create, adjust, and share rosters while keeping labor costs in check.",
  buttons: [],
  type: componentTypes.type2,
};

export const StaffManagement = {
  image: StaffManagementImg,
  heading: "Staff Management",
  text: "Revolutionize your HR practices with Tesseract. Strategically define job responsibilities, post them on multiple recruitment platforms, review applications, and simplify the interview process. Benefit from our efficient onboarding process, robust contract management, and streamlined staff oversight. Enhance your team&'s skills with customized training programs and support their advancement with our performance evaluation mechanism. Engage, recognize, and reward your employees effortlessly while adhering to company policies.",
  bulletPoints: [
    "Manage staff registry",
    "Create and Post Job Ads",
    "Recruitment",    
    "Paperless contact Management",
    "Leave Management",
    "Training and Evaluation",
    "Rewards and recognition.",
  ],
  buttons: [],
  type: componentTypes.type1,
};

export const Payroll = {
  image: PayrollImage,
  heading: "Payroll",
  text: "Simplify payroll processes with our efficient, cloud-based system. Handle payments, superannuation, and reports with ease, all in a few clicks.",
  bulletPoints: [
    "STP Compliance",
    "Invoice Generation",
    "Expense Tracking",
    "BAS and IAS Reporting",
    "Simplified Payroll",
  ],
  buttons: [],
  type: componentTypes.type1,
};

export const ParticipantRegistry = {
  image: ParticipantRegistryImage,
  heading: "Participant Registry",
  text: "Welcome to our comprehensive participant and service management system, designed to streamline support and care in programs like the National Disability Insurance Scheme (NDIS). Our platform enables efficient participant record management, real-time funds tracking, automated invoice generation, personalized care plan creation, seamless assessments, and service agreement management. For multi- caregiver scenarios, we offer convenient shift report generation. Our user-friendly software ensures effective care delivery, financial transparency, and compliance with program guidelines. Rest assured, we prioritize data security and privacy to safeguard sensitive information.",
  buttons: [{ title: "Request a demo", type: "primary" }], 
  type: componentTypes.type2,
};

export const Repository = {
  image: RepositoryImg,
  heading: "Repository",
  text: "Secure and manage your critical documents with Tesseract Repository, enhancing collaboration and information access across your organization.",
  buttons: [],
  type: componentTypes.type1,
};

export const AssignmentsAndAlerts = {
  image: AssignmentsAlerts,
  heading: "Assignments and Alerts",
  text: "Never miss important deadlines again. Tesseract's intelligent alert system keeps you informed about your responsibilities and provides timely warnings.",
  bulletPoints: [],
  buttons: [],
  type: componentTypes.type2,
};

export const MobileAppSecondary = {
  image: MobileApp_2,
  heading: "Mobile App",
  text: "Access key features on-the-go with the Tesseract mobile app. Download today from the Apple App Store or Google Play Store and bring efficiency to your fingertips. Free, with unlimited user access.",
  buttons: [],
  type: componentTypes.type2,
};

export const Support = {
  image: twentyFourSeven,
  heading: "24/7 Support",
  text: "Our dedicated support team is available around the clock to assist you, ensuring your operations run smoothly without interruption.",
  buttons: [], 
  type: componentTypes.type2,
};

export const IssueRegister = {
  image: issueRegister,
  heading: "Issue Register",
  text: "Track and manage issues efficiently with our comprehensive Issue Register, designed to support project management through detailed tracking and updates.",
  buttons: [],
  type: componentTypes.type1,
};