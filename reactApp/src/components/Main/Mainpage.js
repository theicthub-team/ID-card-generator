import React, { Component } from "react";
import MainContainer from "./../Main/MainContainer";
import Sidebar from "./../template/Sidebar/Sidebar";

class Mainpage extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <MainContainer />
      </div>
    );
  }
}

export default Mainpage;
