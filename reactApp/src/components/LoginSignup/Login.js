import React, { Component } from "react";
import { connect } from "react-redux";

import Navbar from "../template/Navbar";
import LoginContent from "./LoginContent";
import { signIn } from "../../actions";

class Login extends Component {
  onSubmit = (formValues) => {
    this.props.signIn(formValues);
  };

  render() {
    return (
      <div>
        <Navbar />
        <LoginContent onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { signIn })(Login);
