import React, { Component } from "react";
import MainContainer from "./../Main/MainContainer";
import Sidebar from "./../template/Sidebar/Sidebar";
import { Redirect } from "react-router-dom";

class Mainpage extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <MainContainer />
      </div>
    );
    if (this.props.isLoggedIn) {
      return (
        <div>
          <Sidebar />
          <MainContainer />
        </div>
      );
    } else {
      return <Redirect to="/login" />;
    }
  }
}

export default Mainpage;
