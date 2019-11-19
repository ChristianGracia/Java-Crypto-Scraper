import React from "react";
import { Link } from "react-router-dom";
import "./home-header.styles.scss";
import logo from "../../../assets/logo.png";

const HomeHeader = () => (
  <div className="home-header" style={{ alignItems: "center" }}>
    <Link className="option" to="/">
      <img className="logo" alt="logo" src={logo} />
    </Link>
  </div>
);
export default HomeHeader;
