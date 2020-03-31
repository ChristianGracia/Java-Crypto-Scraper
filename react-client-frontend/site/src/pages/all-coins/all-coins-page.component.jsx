import React, { Component } from "react";
import "./all-coins-page.styles.scss";
import AllCoinDisplay from "../../components/all-coin-display/all-coin-display.component";
import { connect } from "react-redux";

class AllCoinsPage extends Component {
  render() {
    return (
      <div className="container">
        <span className="header">All Scrapes</span>
        <AllCoinDisplay />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoginSuccess: state.isLoginSuccess
});

export default connect(mapStateToProps)(AllCoinsPage);
