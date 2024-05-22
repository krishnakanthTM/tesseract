import React from "react";
import "./Products.css";
import Footer from "../../Components/Footer/Footer";
import ImageWithContent from "../../Components/ImageWithContent/ImageWithContent";
import {
  AssignmentsAndAlerts,
  EmpowerBusiness,
  NDISSector,
  ParticipantRegistry,
  Payroll,
  ProductsHero,
  StaffManagement,
  OurMission,
  OurVision,
  HumanResources,
  MobileAppPrimary,
  RosterManagement,
  Repository,
  MobileAppSecondary,
  Support,
  IssueRegister
} from "./ProductsData";
import TopNav from "../../Components/TopNav/TopNav";

const Products = () => {
  return (
    <div>
      <TopNav type="secondary" />
      <ImageWithContent data={ProductsHero} frame="Products" framePosition=""/>
      <ImageWithContent data={EmpowerBusiness} frame="Empower" framePosition=""/>
      <ImageWithContent data={OurMission} frame="Mission" framePosition=""/>
      <ImageWithContent data={OurVision} frame="Mission" framePosition=""/>
      <ImageWithContent data={HumanResources} frame="HumanResource" framePosition="ImgTxt"/>
      <ImageWithContent data={MobileAppPrimary} frame="MobileAppPrimary" framePosition="TxtImg"/>
      <ImageWithContent data={RosterManagement} frame="RosterManagement" framePosition="ImgTxt"/>
      <ImageWithContent data={Payroll} frame="Payroll" />
      <ImageWithContent data={ParticipantRegistry} frame="Participant"/> 
      <ImageWithContent data={Repository} frame="Repository" framePosition="TxtImg"/> 
      {/* <ImageWithContent data={MobileAppSecondary} frame="MobileAppSecondary" framePosition="ImgTxt"/> */}
      <ImageWithContent data={Support} frame="Support" framePosition="ImgTxt"/>
      <ImageWithContent data={IssueRegister} frame="IssueRegister" framePosition="TxtImg"/>
      {/* <ImageWithContent data={HumanResources} frame="Mission"/> */}
      {/* <ImageWithContent data={StaffManagement} frame="Staff"/> */}
      {/* <ImageWithContent data={NDISSector} frame="NDIS"/> */}
      {/* 
      <ImageWithContent data={AssignmentsAndAlerts} frame="Assignments"/>
      <ImageWithContent data={ParticipantRegistry} frame="Participant"/> */}
      <Footer />
    </div>
  );
};

export default Products;
