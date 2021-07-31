import React from "react";
import { Col } from "react-bootstrap";

//Assets
import NewsImg from "../assets/images/rectangle-copy-4.png";
import NewsImg2 from "../assets/images/rectangle-copy-4@2x.png";
import NewsImg3 from "../assets/images/rectangle-copy-4@3x.png";

const HomeCard = ({ left, right }) => {
  return (
    <Col
      sm={6}
      className={`homecard-container ${left && "pr-2"} ${right && "pl-2"}`}
    >
      <div className="homecard-img-container">
        <img
          src={NewsImg}
          alt="news-img"
          srcSet={`${NewsImg2} 866w, ${NewsImg3} 1314w`}
        />
      </div>

      <div className="homecard-title">
        Kenali lebih jauh Siap Investasi dan Dana!
      </div>
    </Col>
  );
};

export default HomeCard;
