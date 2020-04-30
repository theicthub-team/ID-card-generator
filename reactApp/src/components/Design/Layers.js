import React from "react";

class Layers extends React.Component {
  render() {
    return (
      <div
        className="Designlayer"
        id="l1"
        style={{
          top: `${this.props.info.top}px`,
          left: `${this.props.info.left}px`,
          padding: `${this.props.info.size}px`,
        }}
      >
        {`Layer ${this.props.name}`}
      </div>
    );
  }
}
export default Layers;
