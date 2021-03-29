import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginForm from "./components/loginForm.component";
import SignUpForm from "./components/signUpForm.component";
import UserDataService from "./services/user.service";

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <button className="btn btn-dark" onClick={UserDataService.logout}>
            Log out
          </button>
        </nav>
        <SignUpForm />
      </div>
    );
  }
}

export default App;
