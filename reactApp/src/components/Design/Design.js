import React, { Component } from "react";
import "./design.css";
import Sidebar from "./../template/Sidebar/Sidebar";
import Canvas from './Canvas';

class Mainpage extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <Canvas />
      </div>
    );
  }
}
export default Mainpage;
