import React from "react";
import "./ImageWithContent.css";
import rightIcon from "../../Assets/righticon.png";
import { componentTypes } from "../../Pages/Home/HomePageData";
import sectionBackground from "../../Assets/sectionBackground.png";

function ImageWithContent({ data }) {
  const textColor =
    data.type === componentTypes.type2
      ? { color: "white" }
      : { color: "black" };
  return (
    <div className="ImageWithContent-container" style={textColor}>
      {data.type === componentTypes.type2 && (
        <img
          src={sectionBackground}
          alt="sectionBackgroundImage"
          className="ImageWithContent-background-image"
        />
      )}
      {data.type === componentTypes.type1 && (
        <img src={data.image} alt="" className="ImageWithContent-image" />
      )}
      <div className="ImageWithContent-content">
        <div className="ImageWithContent-heading">{data.heading}</div>
        <div className="ImageWithContent-text">{data.text}</div>
        <div className="ImageWithContent-buttons">
          {data.buttons.length > 0 &&
            data.buttons.map((item, index) => (
              <button key={index} className={`tesseract-button-${item.type}`}>
                {item.title} &nbsp;{" "}
                {item.type === "outline" ? (
                  <img
                    src={rightIcon}
                    alt="right-icon"
                    className="right-icon"
                  />
                ) : (
                  ""
                )}
              </button>
            ))}
        </div>
      </div>
      {data.type === componentTypes.type2 && (
        <img src={data.image} alt="" className="ImageWithContent-image" />
      )}
    </div>
  );
}

export default ImageWithContent;
