import saly19 from "../../Assets/Saly-19.png";
import ndis from "../../Assets/NDIS_1.png";
import StaffManagementImg from "../../Assets/Staff Management_1.jpg";
import PayrollImage from "../../Assets/Payroll_1.png";
import ParticipantRegistryImage from "../../Assets/Participant Registry_1.jpg";
import AssignmentsAlerts from "../../Assets/Alerts.jpg";

export const componentTypes = {
  type0: "heroComponent-bg",
  type1: "rightImageLeftContent",
  type2: "leftImageRightContent",
};
export const ProductsHero = {
  image: saly19,
  heading: "Products",
  text: " ",
  buttons: [],
  type: componentTypes.type0,
};

export const NDISSector = {
  image: ndis,
  heading: "NDIS Sector",
  text: "Tesseract, our dynamic platform, enables NDIS users to easily manage attendee cataloging, service monitoring, tax management, and invoice management. Stay on top of issues with our integrated issue register and ensure compliance with NDIS protocols using our intuitive auditing tool. Access all the information you need in our user-friendly repository.",
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
  text: "Effortlessly run your payroll with Tesseract. Manage payment cycles, expenses, invoices, and generate critical business information from one centralized location.",
  bulletPoints: [
    "Process Pay Run",
    "Generate Payslip",
    "Capture Expenses",
    "Generate Invoices",
    "Generate and Report Activity statement",
    "Business Intelligence Reporting",
    "STP Reporting",
  ],
  buttons: [],
  type: componentTypes.type1,
};

export const ParticipantRegistry = {
  image: ParticipantRegistryImage,
  heading: "Participant Registry",
  text: "Welcome to our comprehensive participant and service management system, designed to streamline support and care in programs like the National Disability Insurance Scheme (NDIS). Our platform enables efficient participant record management, real-time funds tracking, automated invoice generation, personalized care plan creation, seamless assessments, and service agreement management. For multi- caregiver scenarios, we offer convenient shift report generation. Our user-friendly software ensures effective care delivery, financial transparency, and compliance with program guidelines. Rest assured, we prioritize data security and privacy to safeguard sensitive information.",
  bulletPoints: [
    "Manage participants",
    "Funds tracker to see how the funds are getting utilized",
    "Generate Invoices for NDIS",
    "Create Care Plan",
    "Conduct Assessments",
    "Manage service agreements",
    "Create Shift reports",
  ],
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
