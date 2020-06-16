import React, { Component } from "react";
import { BehaviorSubject } from "rxjs";
import { createBrowserHistory } from "history";
import { Link as RouterLink, withRouter } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import OpenInBrowserSharpIcon from '@material-ui/icons/OpenInBrowserSharp';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

const userSubject = new BehaviorSubject(
  JSON.parse(localStorage.getItem("user"))
);
const history = createBrowserHistory();

function ListItemLink(props) {
  return <ListItem button component={RouterLink} {...props} />;
}

function logout() {
  // remove user from local storage and publish null to user subject
  localStorage.removeItem("user");
  userSubject.next(null);
  history.push("/account/login");
}

class Sidebar extends Component {

  render() {
    return (
      <List>
        <ListItemLink to="/home">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemLink>
        <ListItemLink to="/profile">
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemLink>
        <ListItemLink to="/addFamily">
          <ListItemIcon>
            <PersonAddIcon />
          </ListItemIcon>
          <ListItemText primary="Add Family" />
        </ListItemLink>
        <ListItemLink to="/grievance">
          <ListItemIcon>
            <img src={process.env.PUBLIC_URL + '/Grievance.png'} width="30" opacity='0.5' height="30" alt="" />
          </ListItemIcon>
          <ListItemText primary="Grievance Potal" />
        </ListItemLink>
        <ListItemLink to="/login" onClick={logout}>
          <ListItemIcon>
            <OpenInBrowserSharpIcon transform='rotate(-90)'/>
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemLink>
      </List>
    );
  }
}

export default withRouter(Sidebar);
