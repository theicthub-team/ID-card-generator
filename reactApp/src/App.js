import React, { Component } from "react";
import Homepage from "./components/Homepage/Homepage";
import Mainpage from "./components/Main/Mainpage";
import CreateEvent from "./components/CreateEvent/CreateEvent";
import Login from "./components/LoginSignup/Login";
import Signup from "./components/LoginSignup/Signup";
import { BrowserRouter, Route } from "react-router-dom";

export default class App extends Component {
  state = { isLoggedIn: false, apikey: "" };

  changeAPIkey = apikey => {
    this.setState({ apikey });
  };

  enableLogin = () => {
    this.setState({ isLoggedIn: true });
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
            render={props => (
              <Mainpage
                isLoggedIn={this.state.isLoggedIn}
                {...props}
                apikey={this.state.apikey}
              />
            )}
          />
          <Route
            path="/create"
            exact
            render={props => (
              <CreateEvent
                isLoggedIn={this.state.isLoggedIn}
                {...props}
                apikey={this.state.apikey}
              />
            )}
          />
          <Route
            path="/login"
            exact
            render={props => (
              <Login
                {...props}
                isLoggedIn={this.state.isLoggedIn}
                changeAPIkey={this.changeAPIkey}
                apikey={this.state.apikey}
                enableLogin={this.enableLogin}
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
