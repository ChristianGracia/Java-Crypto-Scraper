import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import CoinItem from "../common/coin-item/coin-item.component";

class CoinDropdown extends React.Component {
  constructor() {
    super();

    this.state = { coin: "", counter: 0, coinArr: [] };
    this.onSelect = this.onSelect.bind(this);
  }
  onSelect(e) {
    let name = e.target.value;

    var url = new URL("http://localhost:8080/all/");

    (async () => {
      const response = await fetch(url);

      const content = await response.json();
      this.setState({ coinArr: content });
      console.log(this.state.coinArr);
    })();
  }
  render() {
    return (
      <div className="m-auto">
        <div>
          <DropdownButton id="dropdown-basic-button" title="Coin Select">
            <Dropdown.Item name="1" onClick={this.onSelect}>
              Bitcoin
            </Dropdown.Item>
            <Dropdown.Item name="2" onClick={this.onSelect}>
              Litecoin
            </Dropdown.Item>
            <Dropdown.Item name="3" onClick={this.onSelect}>
              Ethereum
            </Dropdown.Item>
            <Dropdown.Item name="4" onClick={this.onSelect}>
              Basic Attention Token
            </Dropdown.Item>
            <Dropdown.Item name="5" onClick={this.onSelect}>
              Miota
            </Dropdown.Item>
            <Dropdown.Item name="6" onClick={this.onSelect}>
              Doge
            </Dropdown.Item>
            <Dropdown.Item name="7" onClick={this.onSelect}>
              Binance Coin
            </Dropdown.Item>
            <Dropdown.Item name="8" onClick={this.onSelect}>
              Bitcoin Cash
            </Dropdown.Item>
            <Dropdown.Item name="9" onClick={this.onSelect}>
              TRX
            </Dropdown.Item>
            <Dropdown.Item name="10" onClick={this.onSelect}>
              XRP
            </Dropdown.Item>
          </DropdownButton>
        </div>
        <div>
          {this.state.coinArr.map(({ ...otherProps }) => (
            <CoinItem key={this.state.counter++} {...otherProps} />
          ))}
        </div>
      </div>
    );
  }
}
export default CoinDropdown;
