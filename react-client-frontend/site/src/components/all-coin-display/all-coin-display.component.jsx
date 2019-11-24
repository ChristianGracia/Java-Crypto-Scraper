import React from "react";
import CoinItem from "../common/coin-item/coin-item.component";

class AllCoinDisplay extends React.Component {
  constructor() {
    super();
    this.state = {
      coinArr: []
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
          if (i % 10 === 0) {
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
          justifyContent: "center",
          marginTop: 40
        }}
      >
        {this.state.coinArr
          .reverse()
          .map(element =>
            element
              .reverse()
              .map(({ pullId, ...otherProps }) => (
                <CoinItem key={pullId} id={pullId} {...otherProps} />
              ))
          )}
      </div>
    );
  }
}
export default AllCoinDisplay;
