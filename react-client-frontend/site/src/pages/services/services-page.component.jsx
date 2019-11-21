import React from "react";
import CoinItem from "../../components/common/coin-item/coin-item.component";
import CoinQueries from "../../components/coin-queries/coin-queries.component";
import { Button } from "react-bootstrap";

class ServicesPage extends React.Component {
  constructor() {
    super();
    this.state = {
      coinArr: [0],
      counter: 0
    };
    this.handleClick.bind(this);
  }

  componentDidMount() {
    // if (this.props.params.login != true) {
    //   this.props.history.push("/");
    // }
    // fetch("http://localhost:8080/all")
    //   .then(response => response.json())
    //   .then(jsonData => {
    //     this.setState({ coinArr: jsonData });
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
  }

  handleClick = () => {
    fetch("http://localhost:8080/scrape");
    console.log("click");
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
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
        <div style={{ padding: 30 }}>
          <Button
            onClick={() => {
              this.handleClick();
            }}
          >
            Request Scrape
          </Button>
        </div>

        <CoinQueries />

        {this.state.coinArr.map(({ ...otherProps }) => (
          <CoinItem key={this.state.counter} {...otherProps} />
        ))}
        <p style={{ paddingTop: 300 }}></p>
      </div>
    );
  }
}

export default ServicesPage;
