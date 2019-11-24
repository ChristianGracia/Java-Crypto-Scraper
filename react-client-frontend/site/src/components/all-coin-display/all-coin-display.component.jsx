import React from "react";
import CoinFullScrape from "../common/coin-full-scrape/coin-full-scrape.component";
import CoinItem from "../common/coin-item/coin-item.component";

class AllCoinDisplay extends React.Component {
  constructor() {
    super();
    this.state = {
      coinArr: [],
      counter: 0,
      scrapes: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/all")
      .then(response => response.json())
      .then(jsonData => {
        let temp = [];
        let scrapeArray = [];

        for (let i = 1; i <= jsonData.length; i++) {
          temp.push(jsonData[i - 1]);
          if (i % 10 == 0) {
            scrapeArray.push(temp);
            temp = [];
          }
        }

        this.setState({ coinArr: scrapeArray });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center"
        }}
      >
        {this.state.coinArr.map(element =>
          element.map(({ pullId, ...otherProps }) => (
            <CoinItem key={pullId} {...otherProps} />
          ))
        )}
        <CoinFullScrape />
      </div>
    );
  }
}
export default AllCoinDisplay;
