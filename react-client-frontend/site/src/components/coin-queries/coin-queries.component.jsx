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
          imageUrl: "https://i.redd.it/kxfcoubfc2gz.jpg",
          id: 3,
          linkUrl: "/single-coin"
        },
        {
          title: "All Scrapes",
          imageUrl:
            "https://www.kangol.com/media/wysiwyg/kangol/homepage/blocks/ss19/SS19_MOBILE_MEN.jpg",
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
