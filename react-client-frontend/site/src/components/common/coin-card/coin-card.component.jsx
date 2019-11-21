import React from "react";
import { withRouter } from "react-router-dom";
import "./coin-card.styles.scss";

const CoinCard = ({ title, imageUrl, history, linkUrl, match }) => (
  <div className="menu-item" onClick={() => history.push(`${linkUrl}`)}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">View Now</span>
    </div>
  </div>
);

export default withRouter(CoinCard);
