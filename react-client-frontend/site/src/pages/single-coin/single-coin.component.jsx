import React from "react";
import "./single-coin.styles.scss";

import CoinDropdown from "../../components/coin-dropdown/coin-dropdown.component";

const SingleCoinPage = () => (
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
      Search by Coin
    </span>
    <div style={{ padding: 20 }}></div>
    <CoinDropdown />
  </div>
);
export default SingleCoinPage;
