import React, { Component } from "react";
import "./Sidebar.css";
// import Sideitem from "./Sideitem";
import EventList from "./../../Events/EventList";
import { Link } from "react-router-dom";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <nav className="col-md-3 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
              <EventList />
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
