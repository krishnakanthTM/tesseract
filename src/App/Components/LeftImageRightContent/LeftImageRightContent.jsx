import React from "react";
import "./LeftImageRightContent.css";
import saly1 from "../../Assets/Saly-1.png";
import rightIcon from "../../Assets/righticon.png";

function LeftImageRightContent({ data }) {
  return (
    <div className="LeftImageRightContent-container">
      <img src={saly1} alt="" className="LeftImageRightContent-image" />
      <div className="LeftImageRightContent-content">
        <div className="LeftImageRightContent-heading">{data.heading}</div>
        <div className="LeftImageRightContent-text">{data.text}</div>
        <div className="LeftImageRightContent-buttons">
          {data.buttons.length > 0 &&
            data.buttons.map((item) => (
              <button className={`tesseract-button-${item.type}`}>
                {item.title} &nbsp; {item.type === "outline" ? rightIcon : ""}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
}

export default LeftImageRightContent;
