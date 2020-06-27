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
                    <br/>
                    <div className="row">
                        <div className="col-2">

                        </div>
                        <div className="col-8">
                            <div className="row">
                                <div className="col-7" style={{'border': '1px solid black'}}>
                                    <img src={images.reactlogo} className="card-img-top" alt="..." />
                                </div>
                                <div className="col-5">
                                <button className="btn btn-lg btn-transparent" style={{'float': 'right'}}> import </button>
                                    <h4>Form Tool</h4>
                                    <p>Project image dawd adwd daww dwwad dwd fefs fsefa adwfe</p>
                                    <p style={{'color': 'red'}}>Recommanded upto 4 fields</p>
                                    <button className="btn btn-lg btn-transparent design-fields"> text input</button>
                                    <button className="btn btn-lg btn-transparent design-fields"> token input</button>
                                    <button className="btn btn-lg btn-transparent design-fields"> tagline</button>
                                    <button className="btn btn-lg btn-transparent design-fields"> options</button>
                                    <button className="btn btn-lg btn-transparent design-fields"> + </button>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-2">
                          
                        </div>
                    </div>

                    <h4>Form samples</h4>
                    <div className="row">
                        <div className="col-md-2 col-lg-2 no-padding">
                            <div className="card other-events text-center">
                                <img src={images.reactlogo} className="card-img-top" alt="..." />

                            </div>
                        </div>
                        <div className="col-md-2 col-lg-2 no-padding">
                            <div className="card other-events text-center">
                                <img src={images.reactlogo} className="card-img-top" alt="..." />
                            </div>
                        </div>
                        <div className="col-md-2 col-lg-2 no-padding">
                            <div className="card other-events text-center">
                                <img src={images.reactlogo} className="card-img-top" alt="..." />
                            </div>
                        </div>
                        <div className="col-md-2 col-lg-2 no-padding">
                            <div className="card other-events">
                                <img src={images.reactlogo} className="card-img-top" alt="..." />
                            </div>
                        </div>
                        <div className="col-md-2 col-lg-2 no-padding">
                            <div className="card other-events text-center">
                                <img src={images.reactlogo} className="card-img-top" alt="..." />

                            </div>
                        </div>
                        <div className="col-md-2 col-lg-2 no-padding">
                            <div className="card other-events text-center">
                                <img src={images.reactlogo} className="card-img-top" alt="..." />

                            </div>
                        </div>
                        

                    </div>

                </div>
            </div>



        </main >
    );
};

export default MainContainer;