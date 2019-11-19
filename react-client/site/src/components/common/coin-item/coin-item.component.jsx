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
  <div style={{ textAlign: "center", paddingBottom: 20 }}>
    <p style={{ fontWeight: "bold", fontSize: 30 }}>{name} </p>
    <p>
      <span style={{ fontWeight: "bold", color: "red" }}>Price: </span>
      {price}
      <span style={{ fontWeight: "bold", color: "red" }}> Change: </span>
      {priceChange}
      <span style={{ fontWeight: "bold", color: "red" }}> %Change: </span>
      {priceChangePercent}{" "}
    </p>
    <span style={{ fontWeight: "bold", color: "red" }}> Market Cap: </span>
    {marketCap}
    <span style={{ fontWeight: "bold", color: "red" }}> Scrape Date: </span>
    {scrapeDate}
    <span style={{ fontWeight: "bold", color: "red" }}> Market Time: </span>
    {marketTime}
  </div>
);

export default CoinItem;
