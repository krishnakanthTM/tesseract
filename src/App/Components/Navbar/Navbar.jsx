import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import downicon from "../../Assets/downicon.png";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="page-header-nav">
      <div className="navbar-container">
        <div
          onClick={() => {
            navigate("/Products");
          }}
          className="nav-items"
        >
          Products
          <img className="nav-downArrow" src={downicon} alt="downarrow" />
        </div>

        <div
          onClick={() => {
            // navigate("/Solutions");
          }}
          className="nav-items"
        >
          Solutions
          <img className="nav-downArrow" src={downicon} alt="downarrow" />
        </div>

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
          Why us
        </div>

        <div className="nav-items">Contact us</div>
      </div>
    </div>
  );
}

export default Navbar;
