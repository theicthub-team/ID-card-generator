import React, { Component } from "react";
import Homepage from "./components/Homepage/Homepage";
import Mainpage from "./components/Main/Mainpage";
import Login from "./components/LoginSignup/Login";
import Signup from "./components/LoginSignup/Signup";
import { BrowserRouter, Route } from "react-router-dom";

export default class App extends Component {
  state = { apikey: "" };

  changeAPIkey = apikey => {
    this.setState({ apikey });
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <Route
            path="/"
            exact
            render={props => <Homepage {...props} apikey={this.state.apikey} />}
          />
          <Route
            path="/mainpage"
            exact
            render={props => <Mainpage {...props} apikey={this.state.apikey} />}
          />
          <Route
            path="/login"
            exact
            render={props => (
              <Login
                {...props}
                changeAPIkey={this.changeAPIkey}
                apikey={this.state.apikey}
              />
            )}
          />
          <Route
            path="/signup"
            exact
            render={props => <Signup {...props} apikey={this.state.apikey} />}
          />
        </BrowserRouter>
      </div>
    );
  }
}
