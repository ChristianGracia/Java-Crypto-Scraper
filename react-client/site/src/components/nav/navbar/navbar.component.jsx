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
        Services
      </Link>
      <div style={{ padding: 20 }}></div>

      <Link className="option m-auto" to="/about">
        About
      </Link>
      <div style={{ padding: 20 }}></div>

      <Link className="option m-auto" to="/contact">
        Contact
      </Link>
    </div>
  </div>
);

export default NavBar;
