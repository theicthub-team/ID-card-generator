import React, { Component } from "react";
import "./design.css";
import Tools from './Tools/Tools';
import Canvas from './Canvas';
import { connect } from "react-redux";

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

const mapStateToPropes = (state) => {
  return { layers: state.design.layers };
};

export default connect(mapStateToPropes, {})(Mainpage);
