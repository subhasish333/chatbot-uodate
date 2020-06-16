import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import UserWrapper from "./UserWrapper";
import AddFamily from './addFamily';

class Home extends Component {
  render() {
    return (
      <UserWrapper>
        <AddFamily />
      </UserWrapper>
    );
  }
}

export default withRouter(Home);
