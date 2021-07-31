import React from "react";

const HomeRightContent = ({ images, title, route }) => {
  return (
    <div className="home-right-menu" onClick={() => route && route()}>
      <img src={images[0]} srcSet={`${images[1]} 866w, ${images[2]} 1314w`} />
      <div className="home-right-txt">{title}</div>
    </div>
  );
};

export default HomeRightContent;
