import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import downicon from "../../Assets/downicon.png";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="page-header-nav">
      <div className="navbar-container">
        <div class="productsContainer">
        <div className="nav-items" onClick={() => {navigate("/Products/NDISIndustry");}}> Products
          <img className="nav-downArrow" src={downicon} alt="downarrow" />
        </div>
        {/* <div class="nav-hidden">
          <div class="row">
              <div class="nav-hidden-column1 col-4">
                  <p className="title">About Products </p>
                  <hr />
                  <p>Get back to growing your business</p>
                  <p>Manage HR, payroll, performance, learning, recognition and benefits easily with our integrated platform.</p>
              <hr className="line" />
              </div>
              <div class="nav-hidden-column2 col-4">
                <p className="title">Products</p>
                <hr />
                <p>Payroll Products</p>
              <hr className="line" />
                </div>
              <div class="nav-hidden-column3 col-4">
                <p className="title">Products</p>
                <hr />
                <p>Payroll Products</p>
                <p>Payroll Products</p>
                <p>Payroll Products</p>
                <p>Payroll Products</p>
                <p>Payroll Products</p>
                <p>Payroll Products</p>
              </div>
          </div>
          </div> */}
        </div>
        {/* <div
          onClick={() => {
            // navigate("/Solutions");
          }}
          className="nav-items"
        >
          Solutions
          <img className="nav-downArrow" src={downicon} alt="downarrow" />
        </div> */}

        <div
          onClick={() => {
            navigate("/Pricing");
          }}
          className="nav-items"
        >
          Pricing
          <img className="nav-downArrow" src={downicon} alt="downarrow" />
        </div>

        <div
          onClick={() => {
            navigate("/WhyUs");
          }}
          className="nav-items"
        >
          {/* Why us */}
          About us
        </div>
        <div
          onClick={() => {
            navigate("/Contactus", { state: { title: "Contact Us" } });
          }}
          className="nav-items"
        >
          Contact us
        </div>
      </div>
    </div>
  );
}

export default Navbar;
