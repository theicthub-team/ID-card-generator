import React, { Component } from "react";
import LayerSelector from "../LayersSelectors/LayerSelector";
import { connect } from "react-redux";
import CanvasLayer from "./CanvasLayer";
import DefaultLayer from "./DefaultLayer";
import history from "./../../../history";

class Tools extends Component {
  Controls = () => {
    switch (this.props.type) {
      case "Canvas":
        return <CanvasLayer />;
      case "Image":
        return <DefaultLayer />;
      case "Text":
        return <DefaultLayer />;
      default:
        console.log(this.props.type);
        return <div>Select A layer</div>;
    }
  };

  render() {
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
              <h4>{this.Controls()}</h4>
              <button onClick={() => history.push("/upload")}>
                Change cover
              </button>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    type: state.design.layers[state.design.selectedLayer].type,
  };
};

export default connect(mapStateToProps, {})(Tools);
