import React from "react";
import "./BusinessPartners.css";
import carelogo from "../../Assets/24carelogo.jpeg"
import infosyslogo from "../../Assets/infosyslogo.png"
import sslogo from "../../Assets/sslogo.png"
function BusinessPartners() {
  return (
    <div className="bussines">
      <div className="bussiness-heading">Business Partners</div>
      <div className="bussiness-cards">
        <div className="business-card-item">
          <img id="business-card-img" className="business-card-image" src={carelogo} alt="" />
        </div>
        <div className="business-card-item">
          <img className="business-card-image" src={infosyslogo} alt="" />
        </div>
        <div className="business-card-item">
          <img className="business-card-image" src={sslogo} alt="" />
        </div>
        {/* <div className="business-card-item"></div> */}
      </div>
    </div>
  );
}

export default BusinessPartners;
