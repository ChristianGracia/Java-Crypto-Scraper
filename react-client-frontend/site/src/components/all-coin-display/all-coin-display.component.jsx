import React from "react";
import CoinItem from "../common/coin-item/coin-item.component";

class AllCoinDisplay extends React.Component {
  constructor() {
    super();
    this.state = {
      coinArr: [],
      counter: 0
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/all")
      .then(response => response.json())
      .then(jsonData => {
        this.setState({ coinArr: jsonData });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <div>
        {this.state.coinArr.map(({ ...otherProps }) => (
          <CoinItem key={this.state.counter++} {...otherProps} />
        ))}
      </div>
    );
  }
}
export default AllCoinDisplay;
