import React, { Component } from "react";
import Landing from "./Landing";
import Navbar from "./../template/Navbar";
import Helmet from "react-helmet";

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <Navbar />
        <Landing />
      </div>
    );
  }
}
