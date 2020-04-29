import React from "react";

class Layers extends React.Component {
  render() {
    return (
      <div
        className="Designlayer"
        id="l1"
        key={this.props.keyy}
        style={{
          top: `${this.props.info.top}px`,
          left: `${this.props.info.left}px`,
          padding: `${this.props.info.size}px`,
        }}
        onClick={() => this.changeLayer("l1")}
      >
        Layer
      </div>
    );
  }
}
export default Layers;
