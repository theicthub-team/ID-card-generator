import React, { Component } from "react";
import "./design.css";
import Tools from './Tools/Tools';
import Canvas from './Canvas';

class Mainpage extends Component {
  render() {
    return (
      <div>
        <Tools />
        <Canvas />
      </div>
    );
  }
}
export default Mainpage;
