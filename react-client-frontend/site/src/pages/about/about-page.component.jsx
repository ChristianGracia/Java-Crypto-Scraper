import React from "react";
import "./about-page.styles.scss";

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

      <p style={{ color: "white" }}>
        This website is a cryptocurrency price data scraper with a Java backend
        api and React Js frontend
      </p>
      <p style={{ color: "white" }}>
        The scraper pulls price data every 24 hours or when a user requests a
        new scrape and stores all values in a sql database
      </p>
      <p style={{ color: "white" }}>Make an account to see all scraped data!</p>
    </div>
  </div>
);
export default AboutPage;
