import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginForm from "./components/loginForm.component";
import SignupForm from "./components/signUpForm2.component";

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">ROCK THE NAVBARRR</nav>
        <SignupForm />
        {/* <LoginForm />
        <SignUpForm /> */}
      </div>
    );
  }
}

export default App;
