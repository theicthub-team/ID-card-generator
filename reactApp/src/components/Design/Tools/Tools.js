import React, { Component } from "react";
import LayerSelector from "../LayerSelector";
import { connect } from "react-redux";
import CanvasLayer from "./CanvasLayer";
import DefaultLayer from "./DefaultLayer";

class Tools extends Component {
  
  Controls = () => {
    switch (this.props.layerid) {
      case '0':
        return (
          <CanvasLayer />
        );
      case '1':
        return (
          <DefaultLayer />
        );
        case '2':
          return (
            <DefaultLayer />
          );
          case '3':
            return (
              <DefaultLayer />
            );
      default:
        return(
          <div>Select A layer</div>
        );
    }
  }

  render() {
    let Maxwidth = this.props.width-(this.props.size*2);
    let Maxheight = this.props.height-(this.props.size*2);
    console.log("W-"+Maxwidth);
    console.log("h-"+Maxheight);
    return (
      <div className="container-fluid">
        <div className="row">
          <nav className="col-md-3 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
              <div>
                <h3>Layers</h3>
                <LayerSelector />
              </div>
              <h3>Controls</h3>
              <h4>
              {this.Controls()}
              </h4>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    layerid: state.design.selectedLayer,
  };
};

export default connect(mapStateToProps, { })(Tools);
