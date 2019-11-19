import React from "react";

class ServicePage extends React.Component {
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
        <p>services</p>
      </div>
    );
  }
}

export default ServicePage;
