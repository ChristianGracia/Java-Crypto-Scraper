import React, { Component } from "react";
import CoinCard from "../common/coin-card/coin-card.component";
import "./coin-queries.styles.scss";

class CoinQueries extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "Search by Coin",
          imageUrl:
            "https://www.stratfor.com/sites/default/files/styles/article_large/public/cryptocurrency-gulf-display-shutterstock-1028639176.png?itok=7ZpbB1s0",
          id: 3,
          linkUrl: "/single-coin"
        },
        {
          title: "All Scrapes",
          imageUrl:
            "https://miro.medium.com/max/1024/1*TY0eUcLT6us5Jz1VT1Tymg.jpeg",
          id: 1,
          linkUrl: "/all-scrapes"
        }
      ]
    };
  }
  render() {
    return (
      <div className="options">
        {this.state.sections.map(({ id, ...otherProps }) => (
          <CoinCard key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default CoinQueries;
