import React, { Component } from "react";
import "./design.css";
import Sidebar from "./../template/Sidebar/Sidebar";
import Canvas from './Canvas';
import Designmainpage from "./Desingmainpage"

class Mainpage extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        {/*<Canvas />*/}
        <Designmainpage />
      </div>
    );
  }
}
export default Mainpage;
