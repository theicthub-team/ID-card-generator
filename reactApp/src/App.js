import React, { Component } from "react";
import Landing from "./components/Landing";
import Navbar from "./components/template/Navbar";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Landing />
      </div>
    );
  }
}
