import saly1 from "../../Assets/Saly-1.png";
import saly38 from "../../Assets/Saly-38.png";
import person1 from "../../Assets/person1.png";
import chairMan from "../../Assets/chair.png";
export const componentTypes = {
  type1: "rightImageLeftContent",
  type2: "leftImageRightContent",
};

export const empowerNDISIndustry = {
  image: saly1,
  heading: "Empower NDIS Industry",
  text: "Tesseract's dynamic platform allows NDIS users to smoothly handle participant registry, service tracking, costs, and invoices. Stay on top of problems with our inbuilt Issues Register and assure compliance with NDIS guidelines through our easy-to-use Auditor tool. All necessary documentation is readily available in our accessible Repository.",
  buttons: [{ title: "See the demo", type: "primary" }],
  type: componentTypes.type1,
};

export const thePowerOfAdaptiveness = {
  image: chairMan,
  heading: "The power of Adaptiveness",
  text:
    "Empower NDIS users with our intuitive 'Participants' module, enabling efficient management of participant registries, capture of services provided, tracking of expenses, and invoice generation. " +
    <br /> +
    "Issues Register - Our user-friendly platform enables staff to quickly report and track issues, ensuring timely resolutions and enhancing collaboration and problem-solving efficiency for a productive workflow.",
  buttons: [{ title: "Request a Demo", type: "primary" }],
  type: componentTypes.type1,
};

export const humanResources = {
  image: saly38,
  heading: "Human Resources",
  text: "Redefine your HR operations with Tesseract. Conveniently set up job roles, publicize them on numerous job sites, process applications, and simplify the interview process. Benefit from our effective onboarding, solid contract handling, and efficient employee management. Improve your team's skills with customized training programs and boost their progress with our appraisal system. Engage, appreciate, and incentivize your employees while also accessing company regulations with ease.",
  buttons: [
    { title: "See the demo", type: "primary" },
    { title: "Make an enquiry", type: "outline" },
  ],
  type: componentTypes.type2,
};

export const whyUsCarousalData = [
  {
    stars: 5,
    text: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
    personImage: person1,
    personName: "Regina Miles",
    profession: "Designer",
  },
  {
    stars: 4,
    text: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
    personImage: person1,
    personName: "Regina Miles",
    profession: "Designer",
  },
  {
    stars: 3,
    text: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
    personImage: person1,
    personName: "Regina Miles",
    profession: "Designer",
  },
];
