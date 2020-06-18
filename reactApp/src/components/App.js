import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";

import Homepage from "./Homepage/Homepage";
import Mainpage from "./Main/Mainpage";
import CreateEvent from "./CreateEvent/CreateEvent";
import Login from "./LoginSignup/Login";
import Signup from "./LoginSignup/Signup";
import history from "../history";
import Design from "./Design/Design";
import FileUpload from "./ImageBrowser/FileUpload";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/mainpage" component={Mainpage} />
            <Route path="/design" component={Mainpage} />
            <Route path="/create" component={CreateEvent} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/designtool" component={Design} />
            <Route path="/upload" component={FileUpload} />
            <Route path="/pdf" component={FileUpload} />
          </Switch>
        </Router>
      </div>
    );
  }
}
