import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUpForm from "./components/signUpForm.component";
import LoginForm from "./components/loginForm.component";

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">ROCK THE NAVBARRR</nav>
        <LoginForm />
      </div>
    );
  }
}

export default App;
