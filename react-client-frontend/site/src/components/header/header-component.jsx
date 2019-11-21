import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";

export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <div style={{ display: "flex" }}>
            <Nav.Link href="/" style={{ color: "white" }}>
              Home
            </Nav.Link>
            <Nav.Link href="/about" style={{ color: "white" }}>
              About
            </Nav.Link>
          </div>
          <div style={{ width: "70%" }}></div>

          <Nav.Link
            href="http://www.christiangracia.com"
            style={{ color: "white" }}
          >
            christiangracia.com
          </Nav.Link>
        </Navbar>
      </div>
    );
  }
}
