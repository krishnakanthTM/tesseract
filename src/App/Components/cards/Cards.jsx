import React, { useState } from "react";
import "./Cards.css";
import PriceBgCircle from "../../Assets/Ellipse 17.png";
function Cards({ data }) {
  const [expanded, setExpanded] = useState(true);
  const length = expanded ? 5 : parseInt(data?.bulletPoints?.length);
  const cardState = expanded
    ? {
        height: "50%",
        oveflowY: "hidden",
      }
    : {};
  return (
    <div className={`card-container ${data?.theme} `}>
      <div className="card-title">{data?.title}</div>
      <div className="card-price">
        <div className="card--price"> {data?.price}</div>
        <img src={PriceBgCircle} alt="price-bg-circle" id="price-Bg-Circle" />
      </div>
      <div className="card-points" style={{ cardState }}>
        {data?.bulletPoints.slice(0, length).map((item, index) => {
          return (
            <li key={index} style={{ listStyle: "none" }} id="card-list">
              <img src={data?.tick} alt="tick" id="price-Tick" />
              <div className="list-item">{item}</div>
            </li>
          );
        })}
      </div>
      <button
        className={`card-close`}
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        {expanded ? "see more" : "close"}
      </button>
    </div>
  );
}

export default Cards;
