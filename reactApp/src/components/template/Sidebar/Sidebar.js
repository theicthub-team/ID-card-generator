import React, { Component } from "react";
import "./Sidebar.css";
// import Sideitem from "./Sideitem";
import EventList from "./../../Events/EventList";
// import { Link } from "react-router-dom";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <nav className="col-md-3 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
              <div className="event-div">
                <div className="bd-toc-item">
                  <EventList />
                </div>
              </div>
            </div>
          </nav>
          <nav className="col-md-3 d-mobile d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
              <button
                className="btn btn-lg btn-transparent dropdown-toggle"
                type="button"
                id="mobilemenu"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="sidebar_menu_text">Burger menu</span>
              </button>

              <div className="dropdown-menu" aria-labelledby="mobilemenu">
                <EventList />
              </div>
            </div>

          </nav>
        </div>
      </div>
    );
  }
}
