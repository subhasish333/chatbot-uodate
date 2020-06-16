/*  <--ROUTES-->
/checkuser --> for aadhar number checking
/register --> for register form
/login --> for login form
/setpassword --> setpassword page
/home --> user dashboard
*/

import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RegisterForm from "./component/registerForm";
import CheckUserForm from "./component/checkuser";
import SetPasswordForm from "./component/setPassword";
import LoginForm from "./component/login";
import Protected from "./component/protectedh";
import Home from "./component/home";
import Profile from "./component/Profile";
import AddFamily from "./component/addFamily";
import ProtectedSP from "./component/protectedsp";
import { Redirect } from "react-router-dom";
import Nav from "./component/navbar";
import "./App.css";
import grievance from "./component/grievance";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Nav />
          <Switch>
            <Route exact path="/">
              <CheckUserForm />
            </Route>
            <Route exact path="/register">
              <RegisterForm />
            </Route>
            <ProtectedSP
              exact
              path="/setpassword"
              component={SetPasswordForm}
            ></ProtectedSP>
            <Route path="/login">
              <LoginForm />
            </Route>
            <Protected exact path="/home" component={Home} />
            <Protected exact path="/profile" component={Profile} />
            <Protected exact path="/addFamily" component={AddFamily} />
            <Protected exact path="/grievance" component={grievance} />
            <Redirect from="*" to="/" />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
