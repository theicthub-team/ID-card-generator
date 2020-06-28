import React from "react";
import { connect } from "react-redux";
import { selectLayer } from "../../../actions/designAction";

class LayerSelector extends React.Component {
  getStyle(number) {
    if (this.props.state.selectedLayer === number) {
      return { borderStyle: "solid" };
    }
  }
  render() {
    const layers = Object.values(this.props.state.design.layers);
    return layers.map((layer, i) => {
        return (
          <div style={this.getStyle(i)} key={i} onClick={() => this.props.selectLayer(i)}>
            {layer.name}
          </div>
        );
      }
    );
  }
}
const mapStateToProps = (state) => {
  return { state};
};

export default connect(mapStateToProps, { selectLayer })(LayerSelector);

