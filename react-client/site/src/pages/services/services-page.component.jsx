import React from "react";
import CoinItem from "../../components/common/coin-item/coin-item.component";

class ServicePage extends React.Component {
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
        // console.log(jsonData);
        this.setState({ coinArr: jsonData });
        console.log(this.state.coinArr);
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <div>
        <p style={{ fontWeight: "bold", textAlign: "center", fontSize: 40 }}>
          All scrapes <i class="fab fa-bitcoin"></i>
        </p>

        {this.state.coinArr.map(({ pullId, ...otherProps }) => (
          <CoinItem key={pullId} {...otherProps} />
        ))}
        <p style={{ paddingTop: 300 }}></p>
      </div>
    );
  }
}

export default ServicePage;
