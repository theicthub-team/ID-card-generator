import React from "react";
import { connect } from "react-redux";
import { selectLayer } from "../../actions/designAction";

class LayerSelector extends React.Component {
  render() {
    return (
      <div>
        <div onClick={() => this.props.selectLayer("1")}>Layer 1</div>
        <div onClick={() => this.props.selectLayer("2")}>Layer 2</div>
        <div onClick={() => this.props.selectLayer("3")}>Layer 3</div>
        <p>
          Selected layer: <b>{this.props.selectedLayer || "Not Selected"}</b>
        </p>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { selectedLayer: state.design.selectedLayer };
};

export default connect(mapStateToProps, { selectLayer })(LayerSelector);

//onClick={this.layerr(1)}
