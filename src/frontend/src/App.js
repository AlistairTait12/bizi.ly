import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserDataService from "./services/user.service";
import LoginForm from "./components/loginForm.component";
import SignUpForm from "./components/signUpForm.component";
import TaskBuilder from "./components/TaskBuilder";
import { AppBar, Button, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import "bootstrap/dist/css/bootstrap.min.css";

const LogOut = () => {
  if (localStorage.length > 0) {
    return <Button onClick={UserDataService.logout}>Log out</Button>;
  } else {
    return null;
  }
};

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    fontFamily: "arial",
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <Router>
      <div>
        <AppBar className={classes.root} position="fixed" position="sticky">
          <Toolbar>
            <Link to="/log_in">Log in</Link>
            <Link to="/sign_up">Sign Up</Link>
            <Link to="/tasks">Tasks</Link>
            <LogOut />
          </Toolbar>
        </AppBar>
      </div>
      <div>
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
