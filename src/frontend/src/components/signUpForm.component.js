import React, { Component } from "react";
import UserDataService from "../services/user.service";

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.state = {
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      submitted: false,
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

  onChangeFirstName(e) {
    this.setState({
      firstname: e.target.value,
    });
  }

  onChangeLastName(e) {
    this.setState({
      lastname: e.target.value,
    });
  }

  saveUser() {
    var data = {
      email: this.state.email,
      password: this.state.password,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
    };

    UserDataService.create(data)
      .then((response) => {
        this.setState({
          id: response.data.id,
          email: response.data.email,
          password: response.data.password,
          firstname: response.data.firstname,
          lastname: response.data.lastname,

          submitted: true,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>Successfully registered!</h4>
            <button className="btn btn-dark" onClick={this.newUser}>
              OK
            </button>
          </div>
        ) : (
          <div>
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

            <div className="m-2">
              <label htmlFor="firstname">First Name</label>
              <input
                type="firstname"
                className="form-control"
                id="firstname"
                required
                value={this.state.firstname}
                onChange={this.onChangeFirstName}
                name="firstname"
              />
            </div>

            <div className="m-2">
              <label htmlFor="lastname">Last Name</label>
              <input
                type="lastname"
                className="form-control"
                id="lastname"
                required
                value={this.state.lastname}
                onChange={this.onChangeLastName}
                name="lastname"
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default SignUpForm;
