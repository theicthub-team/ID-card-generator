import React, { Component } from "react";
import LoginContent from "./LoginContent";
import Navbar from "./../template/Navbar";
import idgenerator from "../../api/idgenerator";

export class Login extends Component {
  onLogin = ({ username, password }) => {
    idgenerator
      .post("user/login", {
        username,
        password
      })

      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.clear();
        this.setState({ err: error.response.statusText });
        console.log(error.response);
      });
  };

  render() {
    return (
      <div>
        <Navbar />
        <LoginContent onLogin={this.onLogin} />
      </div>
    );
  }
}

export default Login;
