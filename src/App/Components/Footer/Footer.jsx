import React from "react";
import "./Footer.css";
import logoIcon from "../../Assets/logo.png";
import facebook from "../../Assets/facbook.png";
import twitter from "../../Assets/twitter.png";
import instagram from "../../Assets/instagram.png";
import linkedin from "../../Assets/linkedin.png";
import youtube from "../../Assets/youtube.png";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <div className="footer-container">
      <div className="footer-top">
        <img src={logoIcon} className="footer-logoicon" alt="" />
        <div>Tesseract</div>
      </div>
      <div className="footer-mid">
        <div>
          <div className="footer-mid-text">
            Subscribe to our news letter for updates
          </div>
          <div className="footer-mid-textbox">
            <input type="text" id="footer-mid-input" placeholder="Enter your email address" />
            <button className="footer-mid-button">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-companyfooter">
          <div className="footer-heading">About</div>
          <div className="footer-items" onClick={() => navigate("/WhyUs")}>
            About us
          </div>
          {/* <div className="footer-items">Careers</div> */}
          <div className="footer-items">Become a partner</div>
          {/* <div className="footer-items" onClick={() => navigate("/PrivacyPolicy")}>
           Privacy Policy
          </div> */}
        </div>
        <div className="footer-getintouch">
          <div className="footer-heading">Get in Touch</div>
          <div
            className="footer-items"
            onClick={() =>
              navigate("/ContactUS", { state: { title: "Contact Us" } })
            }
          >
            Contact us
          </div>
          <div className="footer-items">Sales</div>
          <div className="footer-items">Report a bug</div>
        </div>
        <div className="footer-product">
          <div className="footer-heading">Products</div>
          <div className="footer-items" onClick={() => navigate("/Products/NDISIndustry")}>
          NDIS Industry
          </div>
          <div className="footer-items" onClick={() => navigate("/Products/Payroll")}>Payroll Companies</div>
          <div className="footer-items" onClick={() => navigate("/Products/Consultancy")}>Consulting Services</div>
          <div className="footer-items">Our Services</div>
        </div>
        <div className="footer-connect">
          <div className="footer-heading">Connect</div>
          <div className="footer-heading pointer">
            <img src={facebook} alt="facbookicon" className="footer-icons" />
            Facebook
          </div>
          <div className="footer-heading pointer">
            <img src={twitter} alt="twittericon" className="footer-icons" />
            Twitter
          </div>
          <div className="footer-heading pointer">
            <img src={instagram} alt="instagramicon" className="footer-icons" />
            Instagram
          </div>
          <div className="footer-heading pointer">
            <img src={linkedin} alt="linkedinicon" className="footer-icons " />
            Linkedin
          </div>
          <div className="footer-heading pointer">
            <img src={youtube} alt="youtubeicon" className="footer-icons" />
            Youtube
          </div>
        </div>
      </div>
      <div className="footer-copyrights">
        <p>Copy right @Tesseractapps 2024</p>
      </div>
    </div>
  );
}

export default Footer;
