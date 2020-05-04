import React, { Component } from "react";
import { updateTop, updateLeft, updateSize, updateWidth,updateHeight } from "../../../actions";
import { connect } from "react-redux";

class DefaultLayer extends Component {  
  render() {
    let Maxwidth = this.props.width-(this.props.size*2);
    let Maxheight = this.props.height-(this.props.size*2);
    console.log("W-"+Maxwidth);
    console.log("h-"+Maxheight);
    return (
            <div>
              <div>
                <h5>Horizontal</h5>
                <input
                  type="range" className="custom-range"
                  value={this.props.top}
                  min="0"
                  max={Maxheight}
                  onChange={(e) => this.props.updateTop(e.target.value)}
                ></input>
              </div>
              <div >
                <h5>Vertical</h5>
                <input
                  type="range" className="custom-range"
                  value={this.props.left}
                  min="0"
                  max={Maxwidth}
                  onChange={(e) => this.props.updateLeft(e.target.value)}
                ></input>
              </div>
              <div>
                <h5>Size</h5>
                <input
                  type="range" className="custom-range"
                  value={this.props.size}
                  min="0"
                  max={Maxwidth-10}
                  onChange={(e) => this.props.updateSize(e.target.value)}
                ></input>
              </div>
              <div>
                <h5>Size</h5>
                <div className="row">
                    <input type="text" className="form-control col" placeholder="Width"
                    value={this.props.width}
                    onChange={(e) => this.props.updateWidth(e.target.value)}
                    ></input>

                    <input type="text" className="form-control col" placeholder="Height"
                    value={this.props.height}
                    onChange={(e) => this.props.updateHeight(e.target.value)}
                    ></input>
                </div>
              </div>
            </div>
            );
        }
    }


const mapStateToProps = (state) => {
  let selected = state.design.layers[state.design.selectedLayer];
  let {width,height} = state.design.layers[0];
  return {
    top: selected.top,
    left: selected.left,
    size: selected.size,
    width: width,
    height: height,
  };
};

export default connect(mapStateToProps, { updateTop, updateLeft, updateSize, updateHeight, updateWidth })(
    DefaultLayer
);
