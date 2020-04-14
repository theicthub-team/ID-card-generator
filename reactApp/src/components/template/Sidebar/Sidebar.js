import React, { Component } from "react";
import "./Sidebar.css";
// import Sideitem from "./Sideitem";
import EventList from "./../../Events/EventList";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <nav className="col-md-3 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
              <ul className="nav flex-column">
                <EventList />
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
