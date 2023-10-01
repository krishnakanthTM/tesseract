import React from "react";
import "./WhyUs.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import TopNav from "../../Components/TopNav/TopNav";
import Whyus from "../../Components/Whyus/Whyus";

function WhyUs() {
  return (
    <div className="WhyUS-container">
      <div className="page-header">
        <TopNav />
      </div>
      <Navbar />
      <Whyus />
      <Footer />
    </div>
  );
}

export default WhyUs;
