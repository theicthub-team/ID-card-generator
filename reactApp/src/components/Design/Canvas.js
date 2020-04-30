import React from "react";
import Layers from "./Layers";
import { connect } from "react-redux";

class Canvas extends React.Component {
  getLayers() {
    const layers = Object.values(this.props.layers);
    return layers.map((layer, i) => (
      <Layers name={i + 1} key={i} info={layer} />
    ));
  }

  render() {
    return (
      <main role="main" className="col-md-8 ml-sm-auto col-lg-9 px-4">
        <div>{this.getLayers()}</div>
      </main>
    );
  }
}

const mapStateToPropes = (state) => {
  return { layers: state.design.layers };
};

export default connect(mapStateToPropes, {})(Canvas);
