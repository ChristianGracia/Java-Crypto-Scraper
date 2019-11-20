import React from "react";
import "./homepage.styles.scss";
import Login from "../../components/login/login.component";
import ParticleSmall from "../../components/common/particle/particle.component";

const HomePage = () => (
  <div
    className="homepage"
    style={{
      flexDirection: "column"
    }}
  >
    <span
      style={{
        textAlign: "center",
        fontWeight: "bold",
        color: "#F8F141",
        fontSize: 30
      }}
    >
      Crypto Scraper
    </span>
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
      }}
    >
      <div className="m-auto">
        <span style={{ color: "#7EFF00" }}>Powered by Java + React</span>
      </div>
    </div>

    <div style={{ padding: "1vh" }}></div>
    <div className="m-auto" style={{ width: 320 }}>
      <ParticleSmall />
    </div>
    <p style={{ textAlign: "center", color: "white", fontWeight: "bold" }}>
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
        <span style={{ color: "white", fontWeight: "bold" }}>
          Don't have an account?{" "}
        </span>
      </div>
      <div style={{ textAlign: "center" }}>
        <a href="/register">
          <span style={{ color: "red", fontWeight: "bold" }}>
            Click to register
          </span>
        </a>
      </div>
    </div>
  </div>
);
export default HomePage;
