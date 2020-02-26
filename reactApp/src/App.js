import React, { Component } from "react";
import Homepage from "./components/Homepage/Homepage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/" exact component={Homepage} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
        </BrowserRouter>
      </div>
    );
  }
}
