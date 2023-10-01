import React from "react";
import "./Pricing.css";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import TopNav from "../../Components/TopNav/TopNav";
import Cards from "../../Components/cards/Cards";
import {
  HumanResourcesCardData,
  PayrollCardData,
  RosterManagementCardData,
  DisabilityProvidersCardData,
} from "./PricingData";

const Pricing = () => {
  return (
    <div>
      <TopNav />
      <Navbar />
      {/* Section-1 */}
      <div className="Pricing-Section-1">
        <div className="pricingHeading">
          "The best price is not always the lowest price. It's the price
          accompanied by the best value, service, and quality."
        </div>
        <div className="pricingText">
          At Tesseract, we believe in transparent and competitive pricing. Our
          goal is to offer cost- effective solutions that meet your needs while
          ensuring the highest quality of service. We understand that every
          participant's requirements are unique, and our flexible pricing
          options are designed to accommodate those individual needs. You can
          trust us to provide fair and clear pricing that aligns with the value
          we deliver. For detailed pricing information, please contact our team,
          and we'll be happy to assist you.
        </div>
      </div>

      {/* Section-2 */}
      <div className="Pricing-Section-2">
        <Cards data={HumanResourcesCardData} />
        <Cards data={PayrollCardData} />
        <Cards data={RosterManagementCardData} />
        <Cards data={DisabilityProvidersCardData} />
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
