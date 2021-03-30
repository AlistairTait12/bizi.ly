import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserDataService from "./services/user.service";
import LoginForm from "./components/loginForm.component";
import SignUpForm from "./components/signUpForm.component";
import TaskBuilder from "./components/TaskBuilder";
// import "bootstrap/dist/css/bootstrap.min.css";

const LogOut = () => {
  if (localStorage.length > 0) {
    return (
      <button className="btn btn-dark" onClick={UserDataService.logout}>
        Log out
      </button>
    );
  } else {
    return null;
  }
};

const App = () => {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <Link to="/log_in">Log in</Link>
          <Link to="/sign_up">Sign Up</Link>
          <Link to="/tasks">Tasks</Link>
          <LogOut />
        </nav>
        <Switch>
          <Route path="/log_in">
            <LoginForm />
          </Route>
          <Route path="/sign_up">
            <SignUpForm />
          </Route>
          <Route path="/tasks">
            <TaskBuilder />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
