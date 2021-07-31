import React from "react";
import { Col } from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";
import { useHistory } from "react-router-dom";

//CSS
import "../App.scss";

//Assets
import Logo from "../assets/icons/logo-color.svg";
import Home from "../assets/icons/iconly-home-active.svg";
import Lock from "../assets/icons/iconly-two-tone-key.svg";
import Search from "../assets/icons/iconly-two-tone-search.svg";

const LeftNavbar = () => {
  const router = useHistory();
  return (
    <Col sm={2} className="left-navbar-container">
      <img
        src={Logo}
        alt="logo-siap"
        className="left-navbar-logo"
        onClick={() => router.push("/")}
      />
      <div className="left-navbar-type">
        <div>
          <div className="account-type-txt">Jenis Akun</div>
          <div className="account-active-txt">Borower</div>
        </div>
        <IoIosArrowDown className="arrow-down" />
      </div>

      <div className="left-navbar-menu">
        <div className="left-menu left-menu-active">
          <img src={Home} alt="home-icon" />
          Home
        </div>
        <div className="left-menu">
          <img src={Lock} alt="key-icon" />
          Pengajuan
        </div>
        <div className="left-menu">
          <img src={Search} alt="search-icon" />
          Bantuan
        </div>
      </div>

      <div className="left-navbar-signup">Daftar Jadi Lender</div>

      <div className="left-navbar-policy">Syarat & Ketentuan</div>

      <div className="left-navbar-policy">Kebijakan Privasi</div>
    </Col>
  );
};

export default LeftNavbar;
