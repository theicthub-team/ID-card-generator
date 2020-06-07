import React from "react";
import Layers from "./Scenes/Layers";
import { connect } from "react-redux";
import html2canvas from "html2canvas";

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

  saveCanvas() {
    html2canvas(document.getElementById("capture"), {
      allowTaint: false,
      useCORS: true,
    }).then((canvas) => {
      var image = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");

      var a = document.createElement("a"); //Create <a>
      a.href = image; //Image Base64 Goes here
      a.download = "Image.png"; //File name Here
      a.click(); //Downloaded file
    });
  }

  render() {
    let { width, height, margin } = this.props.layers[0];
    console.log(this.getCoverPhoto());
    return (
      <main role="main" className="col-md-8 ml-sm-auto col-lg-9 px-4">
        <div
          className="Designlayer"
          id="capture"
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
        <button onClick={() => this.saveCanvas()}>Download</button>
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
