import React, { Component } from "react";
import Homepage from "./components/Homepage/Homepage";
import Mainpage from "./components/Main/Mainpage";
import Login from "./components/LoginSignup/Login";
import Signup from "./components/LoginSignup/Signup";
import { BrowserRouter, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/" exact component={Homepage} />
          <Route path="/mainpage" exact component={Mainpage} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
        </BrowserRouter>
      </div>
    );
  }
}
