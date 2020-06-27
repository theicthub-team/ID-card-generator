import React from "react";
import "../Main/MainContainer.css";
import images from "../Image";
import { Link } from "react-router-dom";
import "./Processbar.css";

const MainContainer = () => {
    
    return (
        <main role="main" className="col-md-10 ml-sm-auto col-lg-9 px-4">
            <div className="row">
                <div className="col-md-12 ml-sm-auto col-lg-12">
                    <div className="container projectpage-container text-center">
                        <div>
                            <p>
                                Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec
                                id elit non mi porta gravida at eget metus.<br /> Nullam id dolor id nibh
                                ultricies vehicula ut id elit.
                            </p>
                        </div>
                    </div>


                    <hr />
                    <section className="design-process-section" id="process-tab">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <ul className="nav nav-tabs process-model more-icon-preocess" role="tablist">
                                        <li role="presentation" className="active"><a href="#discover" data-toggle="tab"><i className="fa fa-search" aria-hidden="true"></i>
                                            <p>Discover</p>
                                        </a></li>
                                        <li role="presentation"><a href="#strategy" data-toggle="tab"><i className="fa fa-send-o" aria-hidden="true"></i>
                                            <p>Strategy</p>
                                        </a></li>
                                        <li role="presentation"><a href="#optimization" data-toggle="tab"><i className="fa fa-qrcode" aria-hidden="true"></i>
                                            <p>Optimization</p>
                                        </a></li>
                                        <li role="presentation"><a href="#content" data-toggle="tab"><i className="fa fa-newspaper-o" aria-hidden="true"></i>
                                            <p>Content</p>
                                        </a></li>
                                        <li role="presentation"><a href="#reporting" data-toggle="tab"><i className="fa fa-clipboard" aria-hidden="true"></i>
                                            <p>Reporting</p>
                                        </a></li>
                                    </ul>    
                                </div>
                            </div>
                        </div>
                     </section>




                <div className="row">
                    <div className="col-md-3 col-lg-3 no-padding">
                        <div className="card other-events text-center">
                            <img src={images.reactlogo} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-3 no-padding">
                        <div className="card other-events text-center">
                            <img src={images.reactlogo} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-3 no-padding">
                        <div className="card other-events text-center">
                            <img src={images.reactlogo} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-3 no-padding">
                        <div className="card other-events">
                            <img src={images.reactlogo} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
            </div>



        </main >
    );
};

export default MainContainer;