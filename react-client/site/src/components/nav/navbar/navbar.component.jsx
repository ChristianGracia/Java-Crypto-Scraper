import React from "react";
import { Link } from "react-router-dom";
import "./navbar.styles.scss";

const NavBar = () => (
  <div
    className="header"
    style={{ paddingTop: 10, flex: 1, flexDirection: "row" }}
  >
    <div className="options">
      <Link className="option m-auto" to="/services">
        Coin Prices
      </Link>
      <div style={{ padding: 20 }}></div>

      <Link className="option m-auto" to="/about">
        All Scrapes
      </Link>
      <div style={{ padding: 20 }}></div>

      <Link className="option m-auto" to="/contact">
        About
      </Link>
      <div style={{ padding: 20 }}></div>
      <Link className="option m-auto" to="/contact">
        Login
      </Link>
    </div>
  </div>
);

export default NavBar;
