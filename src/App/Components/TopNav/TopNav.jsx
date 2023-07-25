import React from "react";
import "./TopNav.css";
import searchIcon from "../../Assets/search.png";
import logoIcon from "../../Assets/logo.png";

function TopNav() {
  return (
    <div className="topNav-container">
      <div className="topnav-logo">
        <img src={logoIcon} className="topnav-logoicon" alt="" />
        <div>Tesseract</div>
      </div>
      <div className="buttons">
        <div className="searchbox">
          <input
            id="topnav-search"
            type="text"
            placeholder="Type your search here..."
          />
          <img
            src={searchIcon}
            className="topnav-searchicon"
            alt="topnav-search-icon"
          />
        </div>
        <button className="topnav-button-1 tesseract-button-primary">Request a Demo</button>
        <button
          className="topnav-button-2"
          onClick={() => {
            window.open("https://pinnacleit.my.salesforce.com/");
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default TopNav;
