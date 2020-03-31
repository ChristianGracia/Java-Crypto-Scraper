import React from "react";
import CoinQueries from "../../components/coin-queries/coin-queries.component";
import { Button } from "react-bootstrap";

class ServicesPage extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.handleClick.bind(this);
  }

  handleClick = () => {
    fetch("http://localhost:8080/scrape");
    console.log("click");
  };

  render() {
    return (
      <div className="container">
        <p className="header">
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
      </div>
    );
  }
}

export default ServicesPage;
