import React, { Component } from "react";
import TextInput from "../../components/common/text-input/text-input.component";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
      password: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const userData = {
      user: this.state.user,
      password: this.state.password
    };
  }
  render() {
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-lg m-auto">
              <p className="lead text-center">
                Sign in to view crypto coin data
              </p>
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

                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
