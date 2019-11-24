import React from "react";

const CoinItem = ({
  name,
  price,
  priceChange,
  priceChangePercent,
  marketCap,
  marketTime,
  volume,
  scrapeDate
}) => (
  <div style={{ textAlign: "center", padding: 10 }}>
    <p>
      <span style={{ fontWeight: "bold", color: "#F8F141" }}>{name}</span>{" "}
      <span style={{ backgroundColor: "white", padding: 5, borderRadius: 16 }}>
        Scrape Date: {scrapeDate} Market Time: {marketTime}{" "}
      </span>
    </p>
    <span>
      {"\n\n"}{" "}
      <span style={{ fontWeight: "bold", color: "white" }}> Price: </span>{" "}
      {price}{" "}
      <span style={{ fontWeight: "bold", color: "white" }}> Change: </span>
      {priceChange.slice(0, 1) === "-" ? (
        <span style={{ fontWeight: "bold", color: "red" }}>{priceChange} </span>
      ) : (
        <span style={{ fontWeight: "bold", color: "green" }}>
          {priceChange}
        </span>
      )}
      <span style={{ fontWeight: "bold", color: "white" }}> Change%: </span>{" "}
      {priceChangePercent.slice(0, 1) === "-" ? (
        <span style={{ fontWeight: "bold", color: "red" }}>
          {priceChangePercent}
        </span>
      ) : (
        <span style={{ fontWeight: "bold", color: "green" }}>
          {priceChangePercent}
        </span>
      )}
    </span>
    <span>
      <span style={{ fontWeight: "bold", color: "white" }}> Market Cap: </span>
      {marketCap}{" "}
      <span style={{ fontWeight: "bold", color: "white" }}> Volume: </span>
      {volume}
    </span>
  </div>
);

export default CoinItem;
