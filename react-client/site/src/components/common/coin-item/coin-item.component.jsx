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
  <div style={{ textAlign: "center" }}>
    <p>{name} </p>
    <p>
      <span style={{ fontWeight: "bold", color: "red" }}>Price: </span>
      {price}
      <span style={{ fontWeight: "bold", color: "red" }}> Change: </span>
      {priceChange}
      <span style={{ fontWeight: "bold", color: "red" }}> %Change: </span>
      {priceChangePercent}{" "}
      <span style={{ fontWeight: "bold", color: "red" }}> Market Cap: </span>
      {marketCap}
      <span> Scrape Date; </span>
      {scrapeDate}
    </p>
  </div>
);

export default CoinItem;
