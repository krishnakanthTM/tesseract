import React from "react";
import "./TopNav.css";
import searchIcon from "../../Assets/search.png";
import logoIcon from "../../Assets/logo.png";
import menuham from "../../Assets/menuham.png";
import { useNavigate } from "react-router-dom";

function TopNav() {
  const navigate = useNavigate();
  return (
    <div className="page-header">
      <div className="topNav-container">
        <div className="topnav-logo" onClick={() => navigate("/")}>
          <img src={logoIcon} className="topnav-logoicon" alt="" />
          <div className="topnav-title">Tesseract</div>
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
          <button
            className="topnav-button-1 tesseract-button-primary"
            onClick={() => {
              navigate("ContactUs", { state: { title: "Request a Demo" } });
            }}
          >
            Request a Demo
          </button>
          <button
            className="topnav-button-2 tesseract-button-outline"
            onClick={() => {
              window.open("https://pinnacleit.my.site.com/");
            }}
          >
            Login
          </button>
          <img src={menuham} alt="menuham" className="topnav-hamberger" />
        </div>
      </div>
    </div>
  );
}

export default TopNav;
