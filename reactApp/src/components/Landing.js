import React from "react";
import images from "./Image";
import "./Landing.css";

const Landing = () => {
  return (
    <div>
      <main role="main">
        <div className="row featurette cover">
          <div className="col-md-5 banner-text">
            <h2 className="featurette-heading">
              First featurette heading.{" "}
              <span className="text-muted">It’ll blow your mind.</span>
            </h2>
            <p className="lead">
              Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
              ligula porta felis euismod semper. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
              commodo.
            </p>
          </div>
          <div className="col-md-7">
            <img src={images.group266} alt="cover" width="100%" />
          </div>
        </div>
        <div className="row featurette blue cover bg-blue">
          <div className="col-md-6 banner-text">
            <h2 className="featurette-heading">
              First featurette heading.{" "}
              <span className="text-muted">It’ll blow your mind.</span>
            </h2>
            <p className="lead">
              Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
              ligula porta felis euismod semper. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
              commodo.
            </p>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-4">
            <img src={images.group228} alt="cover" width="100%" />
          </div>
          <div className="col-md-1"></div>
        </div>
        <div className="row cover">
          <div className="col-lg-3 text-center">
            <img width={100} height={100} src={images.group110} alt="Pattern" />
            <h2>Heading</h2>
            <p>
              Donec sed odio dui. Etiam porta sem malesuada magna mollis
              euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.
              Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              Praesent commodo cursus magna.
            </p>
          </div>
          <div className="col-lg-3 text-center">
            <img width={100} height={100} src={images.group128} alt="Pattern" />
            <h2>Heading</h2>
            <p>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
              eget lacinia odio sem nec elit. Cras mattis consectetur purus sit
              amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor
              mauris condimentum nibh.
            </p>
          </div>
          <div className="col-lg-3 text-center">
            <img width={100} height={100} src={images.group119} alt="Pattern" />
            <h2>Heading</h2>
            <p>
              Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
              egestas eget quam. Vestibulum id ligula porta felis euismod
              semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris
              condimentum nibh, ut fermentum massa justo sit amet risus.
            </p>
          </div>
          <div className="col-lg-3 text-center">
            <img width={100} height={100} src={images.group101} alt="Pattern" />
            <h2>Heading</h2>
            <p>
              Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
              egestas eget quam. Vestibulum id ligula porta felis euismod
              semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris
              condimentum nibh, ut fermentum massa justo sit amet risus.
            </p>
          </div>
          <p
            className="text-center"
            style={{ width: "100%", marginTop: "2rem" }}
          >
            <a className="btn btn-secondary" href="#" role="button">
              View details »
            </a>
          </p>
        </div>
        <img
          className="text-center"
          style={{ paddingLeft: "20%", paddingRight: "20%" }}
          width="100%"
          src={images.map}
          alt=""
        />
        <div className="row cover" style={{ display: "flex" }}>
          <div className="col-lg-4 text-center pricing">
            <h4>Heading</h4>
            <h1>1000</h1>
          </div>
          <div className="col-lg-4 text-center pricing">
            <h4>Heading</h4>
            <h1>1000</h1>
          </div>
          <div className="col-lg-4 text-center pricing">
            <h4>Heading</h4>
            <h1>1000</h1>
          </div>
        </div>
        <div className="row featurette cover bg-gray">
          <div className="col-md-6 banner-text">
            <h2 className="featurette-heading">
              First featurette heading.{" "}
              <span className="text-muted">It’ll blow your mind.</span>
            </h2>
            <p className="lead">
              Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
              ligula porta felis euismod semper. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
              commodo.
            </p>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-4">
            <img src={images.group228} alt="cover" width="100%" />
          </div>
          <div className="col-md-1"></div>
        </div>
      </main>
    </div>
  );
};

export default Landing;
