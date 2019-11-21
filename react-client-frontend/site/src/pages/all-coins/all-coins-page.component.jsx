import React from "react";
import "./all-coins-page.styles.scss";
import AllCoinDisplay from "../../components/all-coin-display/all-coin-display.component";

const AllCoinsPage = () => (
  <div
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
      All Scrapes
    </span>
    <AllCoinDisplay />
  </div>
);
export default AllCoinsPage;
