import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";

import Homepage from "./Homepage/Homepage";
import Mainpage from "./Main/Mainpage";
import CreateEvent from "./CreateEvent/CreateEvent";
import Login from "./LoginSignup/Login";
import Signup from "./LoginSignup/Signup";
import history from "../history";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/mainpage" component={Mainpage} />
            <Route path="/create" component={CreateEvent} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </Router>
      </div>
    );
  }
}
