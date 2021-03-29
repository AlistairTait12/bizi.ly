import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginForm from "./components/loginForm2.component";
import SignUpForm from "./components/signUpForm.component";
import UserDataService from "./services/user.service";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
{
  /* <nav className="navbar navbar-dark bg-dark"> */
}

const App = () => {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <Link to="/log_in">Log in</Link>
          <Link to="/sign_up">Sign Up</Link>
        </nav>
        <Switch>
          <Route path="/log_in">
            <LoginForm />
          </Route>
          <Route path="/sign_up">
            <SignUpForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
