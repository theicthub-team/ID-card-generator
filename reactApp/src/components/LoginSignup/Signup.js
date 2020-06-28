import React, { Component } from "react";
import Navbar from "./../template/Navbar";
import SignupContent from "./SignupContent";
import { signUp } from "../../actions/authAction";
import { connect } from "react-redux";

export class Signup extends Component {
  onSubmit = (formValues) => {
    this.props.signUp(formValues);
  };

  render() {
    return (
      <div>
        <Navbar />
        <SignupContent onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { signUp })(Signup);
