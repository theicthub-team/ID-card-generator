import React, { Component } from "react";
import Landing from "./Landing";
import Navbar from "./../template/Navbar";

export default class Homepage extends Component {
  componentDidMount() {
    console.log(this.props.apikey);
  }

  render() {
    return (
      <div>
        <Navbar />
        <Landing />
      </div>
    );
  }
}
