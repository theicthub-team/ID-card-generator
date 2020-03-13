import React, { Component } from "react";
import MainContainer from "./../Main/MainContainer";
import Sidebar from "./../template/Sidebar/Sidebar";

class Mainpage extends Component {
  componentDidMount() {
    console.log(12345);
  }

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
