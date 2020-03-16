import React, { Component } from "react";
import LoginContent from "./LoginContent";
import { Redirect } from "react-router-dom";
import Navbar from "./../template/Navbar";
import idgenerator from "../../api/idgenerator";

class Login extends Component {
  onLogin = ({ username, password }) => {
    idgenerator
      .post("user/login", {
        username,
        password
      })

      .then(result => {
        this.props.changeAPIkey(result.data.token);
        this.props.enableLogin();
      })
      .catch(error => {
        // console.clear();
        this.setState({ err: error.response.data });
        console.log(this.state.err);
      });
  };

  render() {
    if (this.props.isLoggedIn) {
      return <Redirect to="/mainpage" />;
    }

    return (
      <div>
        <Navbar />
        <LoginContent onLogin={this.onLogin} />
      </div>
    );
  }
}

export default Login;
