import React from "react";
import "./homepage.styles.scss";
import Login from "../../components/login/login.component";
import { Button } from "react-bootstrap";
import ParticleSmall from "../../components/common/particle/particle.component";

const HomePage = () => (
  <div className="homepage" style={{ flexDirection: "column" }}>
    <h1 style={{ textAlign: "center", marginTop: 40 }}>CG SCRAPER </h1>
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
      }}
    >
      <a href="/about">About this site</a>
      <div style={{ padding: 10 }}></div>
      <a href="http://www.christiangracia.com">christiangracia.com</a>
    </div>

    <div style={{ padding: "1vh" }}></div>
    <div className="m-auto" style={{ width: 320 }}>
      <ParticleSmall />
    </div>
    <p style={{ textAlign: "center" }}>
      Sign in to view crypto coin data{" "}
      <i
        className="fab fa-bitcoin fa-spin"
        style={{
          fontSize: 20,
          color: "#F8F141",
          marginTop: 4
        }}
      ></i>
    </p>

    <Login />
    <div style={{ padding: "1vh" }}></div>
    <div
      className="ml-auto mr-auto"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div style={{ textAlign: "center" }}>
        <span>
          Don't have an account?{" "}
          <a href="/register">
            <span style={{ color: "red" }}>Click to register</span>
          </a>
        </span>
      </div>
    </div>
  </div>
);
export default HomePage;
