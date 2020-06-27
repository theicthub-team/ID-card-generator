import React from "react";
import "../Dashboard/DashboardContainer.css";
import images from "../Image";
// import { Link } from "react-router-dom";

const MainContainer = () => {
  return (
    <main role="main" className="col-md-10 ml-sm-auto col-lg-9 px-4">
      <div className="row">
        <div className="col-md-10 ml-sm-auto col-lg-9">
          <div className="container projectpage-container">
            <div>
              <h1>Create Your Design</h1>
              <p>
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Donec id elit non mi porta gravida at eget metus.
                <br /> Nullam id dolor id nibh ultricies vehicula ut id elit.
              </p>
            </div>
          </div>
          <div className="row mainpage">
            <div className="card">
              <img
                src={images.reactlogo}
                className="card-img-top"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
              </div>
            </div>
            <div className="card">
              <img
                src={images.reactlogo}
                className="card-img-top"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
              </div>
            </div>
            <div className="card">
              <img
                src={images.reactlogo}
                className="card-img-top"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
              </div>
            </div>
            <div className="card">
              <img
                src={images.reactlogo}
                className="card-img-top"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
              </div>
            </div>
            <div className="card">
              <img
                src={images.reactlogo}
                className="card-img-top"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
              </div>
            </div>
            <div className="card">
              <img
                src={images.reactlogo}
                className="card-img-top"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
              </div>
            </div>
          </div>
          <hr />
          <div className="row designmainpage">
            <div className="card">
              <div className="card-body">
                <img
                  src="https://i.pinimg.com/originals/d4/ce/a3/d4cea3f6e238da34e98fb565f04b735f.jpg"
                  className="card-img-top"
                  alt="..."
                ></img>
                <h5 className="card-title">Card title</h5>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <img
                  src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/128069413/original/9cb1236516e4f58b301be06e2fb9b108ccd6dee4/design-a-professional-flyer-or-poster.png"
                  className="card-img-top"
                  alt="..."
                ></img>
                <h5 className="card-title">Card title</h5>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <img
                  src="https://s3.us-west-2.amazonaws.com/images.herecomestheguide.com/images/articles/VirtualWedding-AevitasWeddings.jpg"
                  className="card-img-top"
                  alt="..."
                ></img>
                <h5 className="card-title">Card title</h5>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <img
                  src="https://www.socialtables.com/wp-content/uploads/2019/07/WeddingPlanning.png"
                  className="card-img-top"
                  alt="..."
                ></img>
                <h5 className="card-title">Card title</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2 ml-sm-auto col-lg-3">
          <div className="container projectpage-container">
            <div className="card">
              <div className="card-body text-center">
                <img
                  src="https://img.freepik.com/free-vector/modern-music-event-poster-template_1361-1292.jpg?size=626&ext=jpg"
                  className="card-img-top"
                  alt="..."
                ></img>
                <h5 className="card-title">Card title</h5>
                <p>
                  lorem ipdadaw kandwk andmaklw alkdnaklw akndkla alkdmna
                  dawkldm dakwmd
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContainer;
