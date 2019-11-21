import React from "react";
import TextInput from "../common/text-input/text-input.component";

import { Button } from "react-bootstrap";
class RegisterField extends React.Component {
  constructor() {
    super();

    this.state = {
      user: "",
      password: "",
      password2: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    if (this.state.password === this.state.password2) {
      var url = new URL("http://localhost:8080/create");

      const options = {
        method: "post",
        accepts: new Headers({ "content-type": "application/json" })
      };

      options.body = [this.state.user, this.state.password];

      (async () => {
        const rawResponse = await fetch(url, options);

        const content = await rawResponse.json();
        console.log(content);
      })();
    } else {
      alert("passwords don't match");
    }
  }
  render() {
    return (
      <div>
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
          <TextInput
            placeholder="Confirm password"
            name="password2"
            type="password"
            value={this.state.password2}
            onChange={this.onChange}
          />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button type="submit" variant="primary">
              Submit
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterField;
