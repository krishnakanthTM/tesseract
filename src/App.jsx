import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./App/Pages/Home/HomePage";
import Products from "./App/Pages/Products/Products";
import NDISIndustry from "./App/Pages/Products/NDIS_Industry/NDIS_Industry";
import Payroll from "./App/Pages/Products/Payroll/Payroll";
import Consultancy from "./App/Pages/Products/Consultancy/Consultancy";
import Solutions from "./App/Pages/Solutions/Solutions";
import Pricing from "./App/Pages/Pricing/Pricing";
import WhyUs from "./App/Pages/WhyUS/WhyUs";
import Contactus from "./App/Pages/ContactUs/Contactus";
import PrivacyPolicy from "./App/Pages/PrivacyPolicy/PrivacyPolicy";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Products/NDISIndustry" element={<NDISIndustry />} />
          <Route path="/Products/Payroll" element={<Payroll />} />
          <Route path="/Products/Consultancy" element={<Consultancy />} />
          <Route path="/Solutions" element={<Solutions />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/WhyUs" element={<WhyUs />} />
          <Route path="/ContactUs" element={<Contactus />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
