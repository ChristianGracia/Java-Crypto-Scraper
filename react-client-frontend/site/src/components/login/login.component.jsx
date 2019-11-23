import React, { Component } from "react";
import TextInput from "../../components/common/text-input/text-input.component";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { login } from "../../reducers/reducer";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      password: "",
      loggedIn: false
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

    if (user == "") {
      alert("You have not entered a username");
    }

    if (password == "") {
      alert("You have not entered a password");
    }

    if (this.props.login(user, password)) {
      window.location.href = "/coins";
    }

    // var url = new URL("http://localhost:8080/login");

    // const options = {
    //   method: "post",
    //   accepts: new Headers({ "content-type": "application/json" })
    // };

    // if (user && password != "") {
    //   options.body = [user, password];

    //   (async () => {
    //     const response = await fetch(url, options);

    //     const content = await response.json();
    //     console.log(content);
    //     if (content == true) {
    //       this.setState({ loggedIn: true });
    //       this.props.login(user, password);
    //       // window.location.href = "/coins";
    //     } else {
    //       alert("Incorrect username or password");
    //     }
    //   })();
    // }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      alert(prevProps.value);
    }
  }
  render() {
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-xs m-auto">
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
