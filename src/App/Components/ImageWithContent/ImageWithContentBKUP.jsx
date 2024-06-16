import React from "react";
import "./ImageWithContent.css";
import rightIcon from "../../Assets/righticon.png";
import { componentTypes } from "../../Pages/Home/HomePageData";
import sectionBackground from "../../Assets/sectionBackground.png";
import heroBackgroundImage from "../../Assets/BackgroundGradiant.png";
import { useNavigate } from "react-router-dom";

function ImageWithContent({ data, frame }) {

  const navigate = useNavigate();
  // console.log(data?.bulletPoints?.length);
  const hrImageStyles =
    data.heading === "Human Resources" && data.text != ''
      ? "ImageWithContent-image-hr"
      : `ImageWithContent-image ${frame + "-img"}`;

  const mediaQuery =
    data.type !== componentTypes.type1
      ? { color: "white", flexWrap: "wrap-reverse" }
      : { flexWrap: "wrap" };
  // const heroBackgroundStyle = data.type == componentTypes.type0 ?{height: "300px"} : {};
  // const textColor =
  //   data.type !== componentTypes.type1
  //     ? { color: "white" }
  //     : { color: "black" };
  return (
    <div
      className={
        "ImageWithContent-container" +
        ` ImageWithContent-Container-${frame}`
      }
    >
      {data.type === componentTypes.type0 && (
        <img
          style={{ top: 0, minHeight: "880px", height: "880px" }}
          src={heroBackgroundImage}
          alt="herobackgroundImage.."
          className={`ImageWithContent-background-image `}
        />
      )}
      
      {data.type === componentTypes.type2 && (
        <img
          src={sectionBackground}
          alt="sectionBackgroundImage"
          className={`ImageWithContent-background-image ImageWithContent-background-image-${
            frame
          }`}
        />
      )}
      <div className="ImageWithContent-contents" style={mediaQuery}>
        {data.type === componentTypes.type1 && (
          <img src={data.image} alt="" className={hrImageStyles} />
        )}
        {data.type !== componentTypes.type2 && data.type !== componentTypes.type1 && (
          <img src={data.image} alt="" className={hrImageStyles}
          style={{  height: "492px", width: "489px",     margin: "0 60px" }}
          />
        )}
        <div
          className={`ImageWithContent-content ImageWithContent-content-${
            frame
          }`}
        >
          <div className="ImageWithContent-heading">{data.heading}</div>
          {data.type !== '' && (
          <div className={`ImageWithContent-text ImageWithContent-text-${
            frame
          }`}>{data.text}</div>
          )}
          {data?.bulletPoints?.length > 0 && (
            <div className="ImageWithContent-bulletPoints">
              {data?.bulletPoints?.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </div>
          )}
          <div className="ImageWithContent-buttons">
            {data.buttons.length > 0 &&
              data.buttons.map((item, index) => (
                <button
                  key={index}
                  className={`tesseract-button-${item.type}`}
                  onClick={() =>
                    !!item?.nav &&
                    navigate(item?.nav, { state: { title: item?.title } })
                  }
                >
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
          <img
            src={data.image}
            alt=""
            className={`${hrImageStyles} ImageWithContent-${
              frame
            }`}
          />
        )}
      </div>
    </div>
  );
}

export default ImageWithContent;
