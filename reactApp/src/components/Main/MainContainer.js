import React from "react";
import "./MainContainer.css";
import images from "../Image";
import { Link } from "react-router-dom";

const MainContainer = () => {
  return (
    <main role="main" className="col-md-10 ml-sm-auto col-lg-9 px-4">
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li
            data-target="#myCarousel"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="first-slide"
              src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
              alt="First slide"
            />
            <div className="container">
              <div className="carousel-caption text-left">
                
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="second-slide"
              src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
              alt="Second slide"
            />
            <div className="container">
              <div className="carousel-caption">
                
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="third-slide"
              src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
              alt="Third slide"
            />
            <div className="container">
              <div className="carousel-caption text-right">
                <h1>One more for good measure.</h1>
                <p>
                  Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                  Donec id elit non mi porta gravida at eget metus. Nullam id
                  dolor id nibh ultricies vehicula ut id elit.
                </p>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#myCarousel"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#myCarousel"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div className="container projectpage-container">
        <div className="text-center">
          <h1>Create a new Project</h1>
          <p>
            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec
            id elit non mi porta gravida at eget metus. Nullam id dolor id nibh
            ultricies vehicula ut id elit.
          </p>
          <p>
            <Link to="/create" className="btn btn-lg btn-transparent" href="#" role="button">
              Add Event
            </Link>
          </p>
        </div>
      </div>
      <hr/>
      <div className="row mainpage">
        <div className="card">
          <img src={images.reactlogo} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
          </div>
        </div>
        <div className="card">
          <img src={images.reactlogo} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
          </div>
        </div>
        <div className="card">
          <img src={images.reactlogo} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
          </div>
        </div>
        <div className="card">
          <img src={images.reactlogo} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
          </div>
        </div>
        <div className="card">
          <img src={images.reactlogo} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
          </div>
        </div>
        <div className="card">
          <img src={images.reactlogo} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
          </div>
        </div>
        
      </div>
    </main>
  );
};

export default MainContainer;