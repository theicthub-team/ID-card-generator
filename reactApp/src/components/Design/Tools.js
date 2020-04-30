import React, { Component } from "react";
import LayerSelector from "./LayerSelector";
import { updateTop, updateLeft, updateSize } from "../../actions";
import { connect } from "react-redux";

class Tools extends Component {
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
              <div className="w-75">
                <h5>Horizontal</h5>
                <input
                  type="range"
                  className="custom-range"
                  id="customRange11"
                  value={this.props.top}
                  min="0"
                  max="200"
                  onChange={(e) => this.props.updateTop(e.target.value)}
                ></input>
              </div>
              <div className="w-75">
                <h5>Vertical</h5>
                <input
                  type="range"
                  className="custom-range"
                  id="customRange11"
                  value={this.props.left}
                  min="0"
                  max="200"
                  onChange={(e) => this.props.updateLeft(e.target.value)}
                ></input>
              </div>
              <div className="w-75">
                <h5>Size</h5>
                <input
                  type="range"
                  className="custom-range"
                  id="customRange11"
                  value={this.props.size}
                  min="0"
                  max="200"
                  onChange={(e) => this.props.updateSize(e.target.value)}
                ></input>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    top: state.design.top,
    left: state.design.left,
    size: state.design.size,
  };
};

export default connect(mapStateToProps, { updateTop, updateLeft, updateSize })(
  Tools
);
