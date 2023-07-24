import React from "react";
import "./Carousel.css";
import star from "../../Assets/star.png";
import leftArrow from "../../Assets/leftArrow.png";
import rightArrow from "../../Assets/rightArrow.png";
import Carousel from "react-bootstrap/Carousel";

function CarouselComponent({ data }) {
  const indicatorLabels = ["btn1", "btn2", "btn3"];
  function renderMobileCarousel() {
    return (
      <div className="carousel-container">
        <Carousel
          touch={true}
          style={{ width: "255px" }}
          variant="dark"
          indicatorLabels={indicatorLabels}
          prevIcon={
            <img
              src={leftArrow}
              alt="left arrow"
              id="carousel-leftArrow"
              className="carousel-nav-button"
            />
          }
          nextIcon={
            <img
              src={rightArrow}
              alt="right arrow"
              id="carousel-rightArrow"
              className="carousel-nav-button"
            />
          }
        >
          {data.map((item, index) => {
            function renderStars() {
              let stars = [];
              for (let i = 0; i < item.stars; i++) {
                stars.push(<img src={star} alt="star" key={i} />);
              }
              return stars;
            }
            return (
              <Carousel.Item key={index}>
                <div className="section-card-item">
                  <div className="card-stars">
                    {renderStars().map((star) => star)}
                  </div>
                  <div className="card-text">{item.text}</div>
                  <div className="card-person">
                    <img src={item.personImage} alt="person" />
                    <div>
                      <div className="card-person-name">{item.personName}</div>
                      <div className="card-person-profession">
                        {item.profession}
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    );
  }
  function renderWebCarousel() {
    return (
      <div className="section-card">
        {data.map((item, index) => {
          function renderStars() {
            let stars = [];
            for (let i = 0; i < item.stars; i++) {
              stars.push(<img src={star} alt="star" key={i} />);
            }
            return stars;
          }
          return (
            <div className="section-card-item" key={index}>
              <div className="section-card-item">
                <div className="card-stars">
                  {renderStars().map((star) => star)}
                </div>
                <div className="card-text">{item.text}</div>
                <div className="card-person">
                  <img src={item.personImage} alt="person" />
                  <div>
                    <div className="card-person-name">{item.personName}</div>
                    <div className="card-person-profession">
                      {item.profession}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  const renderItem =
    window.innerWidth < 764 ? renderMobileCarousel : renderWebCarousel;
  return renderItem();
}

export default CarouselComponent;
