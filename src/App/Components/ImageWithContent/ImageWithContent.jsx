import React from "react";
import "./ImageWithContent.css";
import rightIcon from "../../Assets/righticon.png";
import { componentTypes } from "../../Pages/Home/HomePageData";
import sectionBackground from "../../Assets/sectionBackground.png";
import heroBackgroundImage from "../../Assets/BackgroundGradiant.png";
import { useNavigate } from "react-router-dom";

function ImageWithContent({ data }) {
  const navigate = useNavigate();
  // console.log(data?.bulletPoints?.length);
  const hrImageStyles =
    data.heading === "Human Resources"
      ? "ImageWithContent-image-hr"
      : `ImageWithContent-image ${data?.heading?.split(" ")[0] + "-img"}`;

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
        ` ImageWithContent-Container-${data?.heading?.split(" ")[0]}`
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
            data?.heading?.split(" ")[0]
          }`}
        />
      )}
      <div className="ImageWithContent-contents" style={mediaQuery}>
        {data.type === componentTypes.type1 && (
          <img src={data.image} alt="" className={hrImageStyles} />
        )}
        <div
          className={`ImageWithContent-content ImageWithContent-content-${
            data?.heading?.split(" ")[0]
          }`}
        >
          <div className="ImageWithContent-heading">{data.heading}</div>
          <div className="ImageWithContent-text">{data.text}</div>
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
        {data.type !== componentTypes.type1 && (
          <img src={data.image} alt="" className={hrImageStyles} />
        )}
      </div>
    </div>
  );
}

export default ImageWithContent;
