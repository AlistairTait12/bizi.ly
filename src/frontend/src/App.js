import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUpForm from "./components/signUpForm.component";

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">ROCK THE NAVBARRR</nav>
        <SignUpForm />
      </div>
    );
  }
}

export default App;
