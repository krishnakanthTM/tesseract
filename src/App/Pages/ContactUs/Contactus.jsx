import React from "react";
import "./Contactus.css";
// import logoIcon from "../../Assets/logo.png";
import Footer from "../../Components/Footer/Footer";
import thanks from "../../Assets/thanks.png";
// import close from "../../Assets/close-button.png";
import TopNav from "../../Components/TopNav/TopNav";
import { useLocation } from "react-router-dom";

const Contactus = () => {
  // const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="Contactus">
      {/* <div className="Contactus-navbar">
        <div className="Contactus-navbar-left" onClick={() => navigate("/")}>
          <div className="Contactus-navbar-logo">
            <img src={logoIcon} alt="logo-icon" />
          </div>
          <div className="Contactus-navbar-title">Tesseract</div>
        </div>
        <div>
          <img
            className="Contactus-navbar-close-button"
            src={close}
            alt="close-button"
            onClick={() => navigate(-1)}
          />
        </div>
      </div> */}
      <TopNav type="secondary" />
      <div className="Contactus-section">
        <div className="Contactus-section-left">
          <div className="Contactus-section-left-content">
            <div className="Contactus-section-left-title">
              {location?.state?.title || "Contact Us"}
            </div>
            <div className="Contactus-section-left-heading">
              Great, Thanks for showing <br /> interest.
            </div>
            <div className="Contactus-section-left-para">
              Please do help us with your details, <br /> one of our consultants
              will be in touch <br /> with you shortly.
            </div>
          </div>
          <div>
            <img className="Contactus-section-left-img" src={thanks} alt="" />
          </div>
        </div>
        <div className="Contactus-section-right">
          <div className="Contactus-section-form">
            <div>
              <label className="Contactus-section-form-title" htmlFor="">
                First Name
              </label>
              <br />
              <input placeholder="Enter value" type="text" />
            </div>

            <div>
              <label className="Contactus-section-form-title" htmlFor="">
                Last name*
              </label>
              <br />
              <input placeholder="Enter value" type="text" />
            </div>

            <div>
              <label className="Contactus-section-form-title" htmlFor="">
                Company name*
              </label>
              <br />
              <input placeholder="Enter value" type="text" />
            </div>

            <div>
              <label className="Contactus-section-form-title" htmlFor="">
                Work email*
              </label>
              <br />
              <input placeholder="Enter value" type="text" />
            </div>

            <div>
              <label className="Contactus-section-form-title" htmlFor="">
                Work phone*
              </label>
              <br />
              <input placeholder="Enter value" type="text" />
            </div>

            {/* <div>
              <label className="Contactus-section-form-title" htmlFor="">
                Role*
              </label>
              <br />
              <input placeholder="Enter value" type="text" />
            </div> */}

            <div>
              <label className="Contactus-section-form-title" htmlFor="">
                Number of employee*
              </label>
              <br />
              <input placeholder="Enter value" type="text" />
            </div>

            {/* <div>
              <label className="Contactus-section-form-title" htmlFor="">
                Country*
              </label>
              <br />
              <input placeholder="Enter value" type="text" />
            </div> */}
          </div>

          <div className="Contactus-termsandconditions">
            <div className="Contactus-termsandconditions-title">
              <input
                className="tesseract-checkbox"
                type="checkbox"
                name=""
                id=""
              />
              I have read and agree with the Privacy policy.
            </div>

            <div className="Contactus-termsandconditions-title">
              <input className="tesseract-checkbox" type="checkbox" />
              I consent to receiving marketing promotions/offers and content
              from the Tesseract by email, text, and <br /> social media
              channels about our products, new services and brands.
            </div>

            <button className="tesseract-button-primary">Submit</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contactus;
