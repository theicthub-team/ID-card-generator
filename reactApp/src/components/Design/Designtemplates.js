import React from "react";
import "../Dashboard/DashboardContainer.css";
import images from "../Image";
import { Link } from "react-router-dom";
import "./Processbar.css";
import Processbar from "./Processbar";

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

                    <Processbar />


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