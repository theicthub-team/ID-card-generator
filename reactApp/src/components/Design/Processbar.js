import React from "react";
import { Link } from "react-router-dom";

const MainContainer = () => {

    return (
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
    );
};

export default MainContainer;