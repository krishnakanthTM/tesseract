import React from "react";
import "./PrivacyPolicy.css";
import Footer from "../../Components/Footer/Footer";
import TopNav from "../../Components/TopNav/TopNav";
import Privacypolicy from "../../Components/Privacypolicy/Privacypolicy";

function PrivacyPolicy() {
  return (
    <div className="WhyUS-container">
      <div className="page-header">
        <TopNav type="secondary" />
      </div>
      <Privacypolicy />
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
