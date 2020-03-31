import React from "react";
import "./homepage.styles.scss";
import Login from "../../components/login/login.component";
import ParticleSmall from "../../components/common/particle/particle.component";
import Tada from "react-reveal/Tada";

export function HomePage() {
  return (
    <div className="homepage">
      <span className="header">Crypto Scraper</span>
      <div className="tada">
        <Tada>
          <div className="m-auto">
            <span style={{ color: "#7EFF00", fontWeight: "bold" }}>
              Powered by Java + React
            </span>
          </div>
        </Tada>
      </div>
      <div style={{ padding: "1vh" }}></div>
      <div className="m-auto" style={{ width: 320 }}>
        <ParticleSmall number={12} color={"#F8F141"} />
      </div>
      <p style={{ textAlign: "center", color: "white", fontWeight: "bold" }}>
        Sign in to view crypto coin data{" "}
        <i className="fab fa-bitcoin fa-spin iconColor"></i>
      </p>
      <Login />
      <div
        className="ml-auto mr-auto"
        style={{ display: "flex", flexDirection: "column", marginTop: 3 }}
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
}

export default HomePage;
