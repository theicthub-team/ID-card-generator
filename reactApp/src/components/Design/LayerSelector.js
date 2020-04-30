import React from "react";
import { connect } from "react-redux";
import { selectLayer } from "../../actions/";

class LayerSelector extends React.Component {
  getStyle(number) {
    if (this.props.selectedLayer === number) {
      return { borderStyle: "solid" };
    }
  }

  render() {
    return (
      <div>
        <div
          style={this.getStyle("1")}
          onClick={() => this.props.selectLayer("1")}
        >
          Layer 1
        </div>
        <div
          style={this.getStyle("2")}
          onClick={() => this.props.selectLayer("2")}
        >
          Layer 2
        </div>
        <div
          style={this.getStyle("3")}
          onClick={() => this.props.selectLayer("3")}
        >
          Layer 3
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { selectedLayer: state.design.selectedLayer };
};

export default connect(mapStateToProps, { selectLayer })(LayerSelector);

//onClick={this.layerr(1)}
