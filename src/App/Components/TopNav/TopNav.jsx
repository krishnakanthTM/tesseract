import React from "react";
import "./TopNav.css";
import searchIcon from "../../Assets/search.png";
import logoIcon from "../../Assets/logo.png";
import menuham from "../../Assets/menuham.png";
import { useNavigate } from "react-router-dom";
import downicon from "../../Assets/downicon.png";

function TopNav({ type }) {
  const navigate = useNavigate();
  return (
    <div className="page-header">
      <div
        className={`topNav-container ${
          type === "secondary" ? "topNav-Secondary" : ""
        }`}
      >
        <div className="topnav-logo" onClick={() => navigate("/")}>
          <img src={logoIcon} className="topnav-logoicon" alt="" />
          <div className="topnav-title">Tesseract</div>
        </div>
        {type === "secondary" && (
          <div className="topNavLinks">
            <div className="navbar-container-top">
              <div
                onClick={() => {
                  navigate("/Products/NDISIndustry");
                }}
                className="nav-items"
              >
                Products
                <img className="nav-downArrow" src={downicon} alt="downarrow" />
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
        )}
        <div className="buttons">
          {/* <div className="searchbox">
            {type !== "secondary" && (
              <input
                id="topnav-search"
                type="text"
                placeholder="Type your search here..."
              />
            )}
            <img
              src={searchIcon}
              className={
                type !== "secondary"
                  ? "topnav-searchicon"
                  : "topNav-searchicon-secondary"
              }
              alt="topnav-search-icon"
            />
          </div> */}
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
