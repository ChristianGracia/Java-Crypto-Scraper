import React, { Component } from "react";
import "./all-coins-page.styles.scss";
import AllCoinDisplay from "../../components/all-coin-display/all-coin-display.component";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class AllCoinsPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        <span
          style={{
            textAlign: "center",
            fontWeight: "bold",
            color: "#F8F141",
            fontSize: 30
          }}
        >
          All Scrapes
        </span>
        <AllCoinDisplay />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoginSuccess: state.isLoginSuccess
});

export default connect(mapStateToProps)(AllCoinsPage);
