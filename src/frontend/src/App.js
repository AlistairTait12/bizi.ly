import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserDataService from "./services/user.service";
import LoginForm from "./components/loginForm.component";
import SignUpForm from "./components/signUpForm.component";
import TaskBuilder from "./components/TaskBuilder";
import { AppBar, Button, Toolbar, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ProtectedRoute from "./components/ProtectedRoute";
import { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    fontFamily: "arial",
    verticalAlign: "center"
  },
  toolbar: {
    paddingBottom: 10
  },
  button: {
    color: 'white',
  }
});

const App = () => {
  const classes = useStyles();
  const [user, setUser] = useState(false);

  useEffect(() => {
    localStorage.length > 0 ? handleLogin() : handleLogout();
  })
  const handleLogin = () => {
    // e.preventDefault();
    setUser(true);
  };

  const handleLogout = () => {
    // e.preventDefault();
    setUser(false);
  };

  return (
    <Router>
      <div>

          <AppBar className={classes.root} position="fixed" position="sticky">

          <Toolbar className={classes.toolbar}>

            <Button className={classes.button}  ><Link color="white" to="/log_in">Log in</Link></Button>
            <Button><Link  to="/sign_up">Sign Up</Link></Button>
            <Button><Link to="/tasks">Tasks</Link></Button>
            <Button className={classes.button}
              onClick={() => {
                UserDataService.logout();
                handleLogout();
              }}
            >
              Log out
            </Button>
          </Toolbar>
        </AppBar>

      </div>
      <div>
        <Switch>
          <Route path="/log_in">
            <Container maxWidth="sm">
              <LoginForm user={user} handleLogin={handleLogin} />
            </Container>
          </Route>
          <Route path="/sign_up">
            <Container maxWidth="sm">
              <SignUpForm />
            </Container>
          </Route>
          <Route path="/tasks">
            <Container maxWidth="sm">
            <ProtectedRoute
              user={user}
              handleLogout={handleLogout}
              component={TaskBuilder}
            />
            </Container>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
