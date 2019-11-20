import React from "react";
import { Link } from "react-router-dom";
import "./navbar.styles.scss";
import { Nav, Navbar } from "react-bootstrap";

const NavBar = () => (
  <div>
    <Navbar style={{ backgroundColor: "transparent" }}>
      <Navbar.Brand href="/" style={{ color: "#F8F141" }}>
        Home{" "}
        <i
          className="fab fa-bitcoin fa-spin"
          style={{
            fontSize: 20,
            color: "#F8F141",
            marginTop: 4,
            positon: "absolute",
            float: "top"
          }}
        ></i>
      </Navbar.Brand>

      <Nav className="ml-auto">
        <Nav.Link href="/work" style={{ color: "white" }}>
          Login
        </Nav.Link>
        <Nav.Link href="/about" style={{ color: "white" }}>
          About
        </Nav.Link>
      </Nav>
    </Navbar>
  </div>
);

export default NavBar;
