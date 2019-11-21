import React, { Component } from "react";
import TextInput from "../../components/common/text-input/text-input.component";
import { Button } from "react-bootstrap";

class Login extends Component {
  constructor() {
    super();
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

    var url = new URL("http://localhost:8080/login");

    const options = {
      method: "post",
      accepts: new Headers({ "content-type": "application/json" })
    };

    if (user && password != "") {
      options.body = [user, password];

      (async () => {
        const response = await fetch(url, options);

        const content = await response.json();
        console.log(content);
        if (content == true) {
          this.setState({ loggedIn: true });
          window.location.href = "/services";
        } else {
          alert("Incorrect username or password");
        }
      })();
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
export default Login;
