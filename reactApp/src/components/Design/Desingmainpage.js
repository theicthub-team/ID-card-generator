import React from "react";
import "../Main/MainContainer.css";
import images from "../Image";
import { Link } from "react-router-dom";

const MainContainer = () => {
    return (
        <main role="main" className="col-md-10 ml-sm-auto col-lg-9 px-4">
            <div className="row">
                <div className="col-md-10 ml-sm-auto col-lg-9">
                    <div className="container projectpage-container">
                        <div>
                            <h1>Create Your Design</h1>
                            <p>
                                Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec
                                id elit non mi porta gravida at eget metus.<br /> Nullam id dolor id nibh
                                ultricies vehicula ut id elit.
                            </p>
                        </div>
                    </div>
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
                    <hr />
                    <div className="row designmainpage">
                        <div className="card">
                            <div className="card-body">
                                <img src={images.reactlogo} className="card-img-top" alt="..."></img>
                                <h5 className="card-title">Card title</h5>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <img src={images.reactlogo} className="card-img-top" alt="..."></img>
                                <h5 className="card-title">Card title</h5>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <img src={images.reactlogo} className="card-img-top" alt="..."></img>
                                <h5 className="card-title">Card title</h5>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <img src={images.reactlogo} className="card-img-top" alt="..."></img>
                                <h5 className="card-title">Card title</h5>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-md-2 ml-sm-auto col-lg-3">
                    <div className="container projectpage-container">
                        <div className="card">
                            <div className="card-body text-center">
                                <img src={images.reactlogo} className="card-img-top" alt="..."></img>
                                <h5 className="card-title">Card title</h5>
                                <p>lorem ipdadaw kandwk andmaklw alkdnaklw akndkla alkdmna dawkldm dakwmd</p>
                            </div>
                        </div>
                       
                    </div>
                </div>

            </div>



        </main>
    );
};

export default MainContainer;