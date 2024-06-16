import React, {useState} from "react";
import "./Contactus.css";
// import logoIcon from "../../Assets/logo.png";
import Footer from "../../Components/Footer/Footer";
import thanks from "../../Assets/thanks.png";
// import close from "../../Assets/close-button.png";
import TopNav from "../../Components/TopNav/TopNav";
import { useLocation } from "react-router-dom";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";

const Contactus = () => {
  // const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    phone: '',
    noOfEmployees: '',
    privacy:false,
    promotion:false
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const {name} = e.target;
    if(e.target.name === 'promotion' || e.target.name === 'privacy') {
      const value = e.target.checked;
      console.log(name, value)
      setFormData({
        ...formData,
        [name]: value,
      });
    }else{
      const {value} = e.target;
      console.log(name, value)
      setFormData({
        ...formData,
        [name]: value,
      });
    }
    
  };

  const validate = () => {
    let errors = {};

    if (!formData.lastName) {
      errors.lastName = 'Last name is required';
    }

    if (!formData.companyName) {
      errors.companyName = 'Company name is required';
    }

    if (!formData.email) {
      errors.email = 'Work email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Work email address is invalid';
    }
    if (!formData.phone) {
      errors.phone = 'Work Phone is required';
    } else if (!/^(\+61|0)[2-478]\d{8}$|^(\+61|0)[2-478]\d{1}\s\d{4}\s\d{4}$|^\(0[2-478]\)\s\d{4}\s\d{4}$/.test(formData.phone)) {
      errors.phone = 'Phone number is invalid. Expected formats: 0412345678, 0212345678, (02) 1234 5678';
    }
    if (!formData.noOfEmployees) {
      errors.noOfEmployees = 'Number of employees is required';
    }
    if (!formData.privacy) {
      errors.privacyError = 'Please accept our privacy policy agreement before you continue.';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("aaa")
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Submit form data
      console.log('Form submitted successfully', formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="Contactus">
      <ScrollToTop />
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
          <form onSubmit={handleSubmit}> 
          <div className="Contactus-section-form">
            <div>
              <label className="Contactus-section-form-title" htmlFor="">
                First Name
              </label>
              <br />
              <input placeholder="Enter value" type="text" name="firstName" onChange={handleChange} />
              
            </div>

            <div>
              <label className="Contactus-section-form-title" htmlFor="">
                Last name*
              </label>
              <br />
              <input placeholder="Enter value" type="text" name="lastName" onChange={handleChange}/>
              {errors.lastName && <p className="error-message">{errors.lastName}</p>}
            </div>

            <div>
              <label className="Contactus-section-form-title" htmlFor="">
                Company name*
              </label>
              <br />
              <input placeholder="Enter value" type="text" name="companyName"  onChange={handleChange} />
              {errors.companyName && <p className="error-message">{errors.companyName}</p>}
            </div>

            <div>
              <label className="Contactus-section-form-title" htmlFor="">
                Work email*
              </label>
              <br />
              <input placeholder="Enter value" type="text" name="email"  onChange={handleChange}/>
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>

            <div>
              <label className="Contactus-section-form-title" htmlFor="">
                Work phone*
              </label>
              <br />
              <input placeholder="Enter value" type="text" name="phone"  onChange={handleChange}/>
              {errors.phone && <p className="error-message">{errors.phone}</p>}
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
              <input placeholder="Enter value" type="text" name="noOfEmployees" onChange={handleChange}/>
              {errors.noOfEmployees && <p className="error-message">{errors.noOfEmployees}</p>}
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
                name="privacy"
                id=""
                onChange={handleChange}
              />
              I have read and agree with the Privacy policy.
            </div>

            <div className="Contactus-termsandconditions-title">
              <input className="tesseract-checkbox" type="checkbox" name="promotion" onChange={handleChange}/>
              I consent to receiving marketing promotions/offers and content
              from the Tesseract by email, text, and <br /> social media
              channels about our products, new services and brands.
            </div>
            {!errors.privacy && <p className="error-message">{errors.privacyError}</p>}
            <button className="tesseract-button-primary" type="submit">Submit</button>
          </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contactus;
