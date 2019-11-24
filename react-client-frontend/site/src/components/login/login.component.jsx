import React, { Component } from "react";
import TextInput from "../../components/common/text-input/text-input.component";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { login } from "../../reducers/reducer";
import { withRouter } from "react-router";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      password: "",
      isLoginSuccess: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    let user = this.state.user;
    let password = this.state.password;

    if (user === "") {
      alert("You have not entered a username");
    } else if (password === "") {
      alert("You have not entered a password");
    }
    this.props.login(user, password);
    this.setState({ user: "", password: "" });
  }
  componentDidUpdate(prevProps) {
    if (this.props.isLoginSuccess !== prevProps.isLoginSuccess) {
      this.props.history.push({
        pathname: "/coins",
        state: { isLoginSuccess: true }
      });
    }
  }

  render() {
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-xs m-auto">
              {this.props.loginError && (
                <div
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    textAlign: "center",
                    marginBottom: 5
                  }}
                >
                  {this.props.loginError.message}
                </div>
              )}
              <form onSubmit={this.onSubmit}>
                <TextInput
                  placeholder="Username"
                  name="user"
                  type="user"
                  value={this.state.user}
                  onChange={this.onChange}
                />

                <TextInput
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.onChange}
                />

                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button type="submit" variant="primary">
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isLoginPending: state.isLoginPending,
    isLoginSuccess: state.isLoginSuccess,
    loginError: state.loginError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (user, password) => dispatch(login(user, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
