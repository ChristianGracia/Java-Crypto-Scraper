import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import CoinItem from "../common/coin-item/coin-item.component";

class CoinDropdown extends React.Component {
  constructor() {
    super();

    this.state = { coin: "", coinArr: [], singleCoinArr: [] };
    this.onSelect = this.onSelect.bind(this);
  }
  componentDidMount() {
    var url = new URL("http://localhost:8080/all/");

    (async () => {
      const response = await fetch(url);

      const content = await response.json();

      let temp = [];
      let scrapeArray = [];

      for (let i = 1; i <= content.length; i++) {
        temp.push(content[i - 1]);
        if (i % 10 === 0) {
          scrapeArray.push(temp);
          temp = [];
        }
      }

      this.setState({
        coinArr: scrapeArray
      });
    })();
  }

  onSelect(e) {
    let index = parseInt(e.target.name);
    let arr = [];

    this.state.coinArr.forEach(x => arr.push(x[index]));
    this.setState({
      singleCoinArr: arr
    });
  }
  render() {
    return (
      <div
        className="m-auto"
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <div>
          <DropdownButton id="dropdown-basic-button" title="Coin Select">
            <Dropdown.Item name="9" onClick={this.onSelect}>
              Bitcoin
            </Dropdown.Item>
            <Dropdown.Item name="5" onClick={this.onSelect}>
              Litecoin
            </Dropdown.Item>
            <Dropdown.Item name="8" onClick={this.onSelect}>
              Ethereum
            </Dropdown.Item>
            <Dropdown.Item name="0" onClick={this.onSelect}>
              Basic Attention Token
            </Dropdown.Item>
            <Dropdown.Item name="2" onClick={this.onSelect}>
              Miota
            </Dropdown.Item>
            <Dropdown.Item name="1" onClick={this.onSelect}>
              Doge
            </Dropdown.Item>
            <Dropdown.Item name="3" onClick={this.onSelect}>
              Binance Coin
            </Dropdown.Item>
            <Dropdown.Item name="6" onClick={this.onSelect}>
              Bitcoin Cash
            </Dropdown.Item>
            <Dropdown.Item name="4" onClick={this.onSelect}>
              TRX
            </Dropdown.Item>
            <Dropdown.Item name="7" onClick={this.onSelect}>
              XRP
            </Dropdown.Item>
          </DropdownButton>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              marginTop: 40
            }}
          >
            {this.state.singleCoinArr
              .reverse()
              .map(({ pullId, ...otherProps }) => (
                <CoinItem key={pullId} id={pullId} {...otherProps} />
              ))}
          </div>
        </div>
      </div>
    );
  }
}
export default CoinDropdown;
