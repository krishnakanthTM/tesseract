import React from "react";
import "./WhyUs.css";
import Footer from "../../Components/Footer/Footer";
import TopNav from "../../Components/TopNav/TopNav";
import Whyus from "../../Components/Whyus/Whyus";

function WhyUs() {
  return (
    <div className="WhyUS-container">
      <div className="page-header">
        <TopNav type="secondary" />
      </div>
      <Whyus />
      <Footer />
    </div>
  );
}

export default WhyUs;
