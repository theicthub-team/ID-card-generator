import React from "react";
import Layers from "./Scenes/Layers";
import { connect } from "react-redux";

class Canvas extends React.Component {
  getLayers() {
    const layers = Object.values(this.props.layers);
    return layers.map((layer, i) => {
      if(i>0){
        return (
          <Layers name={i} key={i} info={layer} />
        );
      }}
    );
  }

  render() {
    let {width,height,margin} = this.props.layers[0];
    return (
      <main role="main" className="col-md-8 ml-sm-auto col-lg-9 px-4">
        <div className="Designlayer" 
        style={{
          width: `${width}px`,
          height: `${height}px`,
          backgroundImage: "url('https://legaldbol.com/wp-content/uploads/2019/03/72-Printable-Id-Card-Background-Template-Free-Formating-by-Id-Card-Background-Template-Free.jpg')",
          backgroundSize: "cover",
          margin: `${margin}px`,
        }}  
        >{this.getLayers()}
        </div>
      </main>
    );
  }
}

const mapStateToPropes = (state) => {
  return { layers: state.design.layers };
};

export default connect(mapStateToPropes, {})(Canvas);
