import React, { Component } from "react";
import idgenerator from "../../api/idgenerator";
import Navbar from "./../template/Navbar";
import SignupContent from "./SignupContent";
export class Signup extends Component {
  onSignup = (username, email, first_name, last_name, password) => {
    idgenerator
      .post("user/signup", {
        username: username,
        email: email,
        first_name: first_name,
        last_name: last_name,
        password: password
      })

      .then(result => {
        // if (result.data.token) {
        //   this.setState({ token: result.data.token });
        // }
        console.log(result);
      })
      .catch(error => {
        console.log(error.response);
      });
  };

  render() {
    return (
      <div>
        <Navbar />
        <SignupContent onSignup={this.onSignup} />
      </div>
    );
  }
}

export default Signup;
