import React, { Component } from "react";
import "./Sidebar.css";
// import Sideitem from "./Sideitem";
import EventList from "./../../Events/EventList";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <nav className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
              <div className="dropdown mt-5">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenu2"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  New Project
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                  <button className="dropdown-item" type="button">
                    Create Event
                  </button>
                  <button className="dropdown-item" type="button">
                    Create Design
                  </button>
                </div>
              </div>
              <div className="event-div">
                <div className="bd-toc-item">
                  <h5>Events</h5>
                  <EventList />
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
