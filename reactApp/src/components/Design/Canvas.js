import React from "react";
import Layers from "./Scenes/Layers";
import { connect } from "react-redux";

class Canvas extends React.Component {
  getLayers() {
    const layers = Object.values(this.props.layers);
    return layers.map((layer, i) => {
      if (i > 0) {
        return <Layers name={i} key={i} info={layer} />;
      }

      return null;
    });
  }

  getCoverPhoto() {
    const diffaultPicture =
      "https://legaldbol.com/wp-content/uploads/2019/03/72-Printable-Id-Card-Background-Template-Free-Formating-by-Id-Card-Background-Template-Free.jpg";

    if (this.props.coverphoto) {
      return this.props.coverphoto;
    }

    return diffaultPicture;
  }

  render() {
    let { width, height, margin } = this.props.layers[0];
    console.log(this.getCoverPhoto());
    return (
      <main role="main" className="col-md-8 ml-sm-auto col-lg-9 px-4">
        <div
          className="Designlayer"
          style={{
            width: `${width}px`,
            height: `${height}px`,
            backgroundImage: `url(${this.getCoverPhoto()})`,
            backgroundSize: "cover",
            margin: `${margin}px`,
          }}
        >
          {this.getLayers()}
        </div>
      </main>
    );
  }
}

const mapStateToPropes = (state) => {
  return {
    layers: state.design.layers,
    coverphoto: state.design.coverphoto,
  };
};

export default connect(mapStateToPropes, {})(Canvas);
