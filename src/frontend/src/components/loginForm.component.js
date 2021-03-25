import React, { Component } from "react";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.login = this.login.bind(this);
    this.state = {
      email: "",
      password: "",
    };
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  // login() { TODO
  //   var data = {
  //     email: this.state.email,
  //   };

  //   UserDataService.findByEmail(data)
  //     .then((response) => )
  // }

  render() {
    return (
      <div className="submit-form">
        <div className="m-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            required
            value={this.state.email}
            onChange={this.onChangeEmail}
            name="email"
          />
        </div>
        <div className="m-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            required
            value={this.state.password}
            onChange={this.onChangePassword}
            name="password"
          />
        </div>
        <div>
          <button onClick={this.login}>Log in</button>
        </div>
      </div>
    );
  }
}

export default LoginForm;
