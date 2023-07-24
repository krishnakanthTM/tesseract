import React from "react";
import "./HomePage.css";
import Navbar from "../../Components/Navbar/Navbar";
import TopNav from "../../Components/TopNav/TopNav";
import Footer from "../../Components/Footer/Footer";
import rectangle from "../../Assets/rectangle.png";
import rectangle2 from "../../Assets/rectangle2.png";
import rectangle3 from "../../Assets/rectangle3.png";
import HeroComponent from "../../Components/HeroComponent/HeroComponent";
import ImageWithContent from "../../Components/ImageWithContent/ImageWithContent";
import {
  empowerNDISIndustry,
  thePowerOfAdaptiveness,
  humanResources,
} from "./HomePageData";
import Whyus from "../../Components/Whyus/Whyus";
import BusinessPartners from "../../Components/BusinessPartners/BusinessPartners";

function HomePage() {
  return (
    <>
      <TopNav />
      <Navbar />
      <HeroComponent />
      <img src={rectangle} alt="rectangle" className="rectangle" />
      <ImageWithContent data={empowerNDISIndustry} />
      <img src={rectangle2} alt="rectangle2" className="rectangle2" />
      <img src={rectangle3} alt="rectangle3" className="rectangle3" />
      <ImageWithContent data={humanResources} />
      <ImageWithContent data={thePowerOfAdaptiveness} />
      <Whyus />
      <BusinessPartners />
      <Footer />
    </>
  );
}

export default HomePage;
