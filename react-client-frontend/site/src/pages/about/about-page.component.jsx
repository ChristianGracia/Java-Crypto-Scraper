import React from "react";
import "./about-page.styles.scss";
import ParticleSmall from "../../components/common/particle/particle.component";

const AboutPage = () => (
  <div>
    <div
      className="about-header"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
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
        About
      </span>
      <div style={{ padding: 30 }}></div>

      <div className="m-auto" style={{ width: 320 }}>
        <ParticleSmall number={25} color={"#40F31B"} />
      </div>

      <p style={{ color: "white" }}>
        This website is a cryptocurrency price data scraper with a{" "}
        <span style={{ color: "#5F4332", fontWeight: "bold" }}>Java</span>{" "}
        backend api and{" "}
        <span style={{ color: "#0082BE", fontWeight: "bold" }}>
          React/Redux{"  "}
        </span>
        frontend.
      </p>
      <p style={{ color: "white" }}>
        The scraper pulls price data every 24 hours or when a user requests a
        new scrape and stores all values in a sql database.
      </p>
      <p style={{ color: "#F8F141", fontWeight: "bold" }}>
        Code for this site:{" "}
        <a
          style={{ color: "white" }}
          href="https://github.com/ChristianGracia/Java-Financial-Web-Scraper"
        >
          Here
        </a>
      </p>
      <p style={{ color: "#F8F141", fontWeight: "bold" }}>
        Solo Agile Trello board:{" "}
        <a
          style={{ color: "white" }}
          href="https://trello.com/b/4OX3sqsV/scraper-java"
        >
          Here
        </a>
      </p>

      <p style={{ color: "red", fontWeight: "bold" }}>
        Make an account to see all scraped data!
      </p>
    </div>
  </div>
);
export default AboutPage;
