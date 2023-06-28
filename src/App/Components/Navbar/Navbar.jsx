import React from "react";
import "./Navbar.css";
import downicon from "../../Assets/downicon.png";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="nav-items">
        Products
        <img className="nav-downArrow" src={downicon} alt="downarrow" />
      </div>
      <div className="nav-items">
        Solutions
        <img className="nav-downArrow" src={downicon} alt="downarrow" />
      </div>
      <div className="nav-items">
        Pricing
        <img className="nav-downArrow" src={downicon} alt="downarrow" />
      </div>
      <div className="nav-items">Why us</div>
      <div className="nav-items">Contact us</div>
    </div>
  );
}

export default Navbar;
