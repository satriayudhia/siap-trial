import React from "react";
import { Row, Col } from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";

//Assets
import Search from "../assets/icons/iconly-two-tone-search.svg";
import Notif from "../assets/icons/iconly-two-tone-notification.svg";
import Flag from "../assets/icons/icon-language.svg";
import NoImg from "../assets/images/no-img.png";

const TopNavbar = () => {
  return (
    <Row className="top-navbar-all-container">
      <Col
        sm={6}
        className="top-navbar-container"
        style={{ paddingRight: "5%" }}
      >
        <div className="top-navbar-input-container">
          <img src={Search} alt="search-icon" />
          <input
            type="text"
            className="top-navbar-input"
            placeholder="Search"
          />
        </div>
      </Col>
      <Col sm={6} className="top-navbar-right-container">
        <img src={Notif} alt="notif-icon" className="top-nav-icon" />
        <img src={Flag} alt="notif-icon" className="top-nav-icon" />
        <div className="top-nav-account-container">
          <div className="top-nav-info">
            <img src={NoImg} alt="avatar" className="top-nav-avatar" />
            <div>
              <div className="top-nav-name">Reynaldi Gozali</div>
              <div className="top-nav-phone">+6289304***</div>
            </div>
          </div>

          <IoIosArrowDown />
        </div>
      </Col>
    </Row>
  );
};

export default TopNavbar;
