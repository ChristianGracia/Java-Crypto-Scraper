import React from "react";
import CoinItem from "../../components/common/coin-item/coin-item.component";
import { Button } from "react-bootstrap";

class ServicePage extends React.Component {
  constructor() {
    super();
    this.state = {
      coinArr: [],
      counter: 0
    };
  }

  componentDidMount() {
    // if (this.props.params.login != true) {
    //   this.props.history.push("/");
    // }
    fetch("http://localhost:8080/all")
      .then(response => response.json())
      .then(jsonData => {
        this.setState({ coinArr: jsonData });
      })
      .catch(error => {
        console.error(error);
      });
  }

  handleClick = () => {
    fetch("http://localhost:8080/scrape");
    console.log("click");
  };

  render() {
    return (
      <div>
        <p
          style={{
            fontWeight: "bold",
            textAlign: "center",
            fontSize: 40,
            color: "#D4AF37"
          }}
        >
          Coin Data <i className="fab fa-bitcoin"></i>
        </p>
        <Button onClick={this.handleClick}>Request Scrape</Button>

        {this.state.coinArr.map(({ ...otherProps }) => (
          <CoinItem key={this.state.counter++} {...otherProps} />
        ))}
        <p style={{ paddingTop: 300 }}></p>
      </div>
    );
  }
}

export default ServicePage;
