import React, { Component } from "react";
import UserDataService from "../services/user.service";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.login = this.login.bind(this);
    this.state = {
      username: "",
      password: "",
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  login() {
    var data = {
      username: this.state.username,
      password: this.state.password,
    };

    UserDataService.login(data)
      .then((response) => {
        console.log(response.data)
        // we needd to store the user in local storage here?
        // we can use the stored users token if one exists for future requests
        // also the user data includes their id, this should help displaying tasks
        // when we join the tables
      })
      .catch((e) => {
        console.log(e);
      });
  }

  getUser(){
    UserDataService.test();
  }

  render() {
    return (
      <div className="submit-form">
        <div className="m-2">
          <label htmlFor="username">Username/Email</label>
          <input
            type="email"
            className="form-control"
            id="username"
            required
            value={this.state.username}
            onChange={this.onChangeUsername}
            name="username"
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
        <div>
          <button onClick={this.getUser}>Should only work if authed</button>
        </div>
      </div>
    );
  }
}

export default LoginForm;
