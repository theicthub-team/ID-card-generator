import React, { Component } from "react";
import MainContainer from "./../Main/MainContainer";
import Sidebar from "./../template/Sidebar/Sidebar";
import { Helmet } from "react-helmet";

class Mainpage extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Create Event</title>
        </Helmet>
        <Sidebar />
        <MainContainer />
      </div>
    );
  }
}

export default Mainpage;
