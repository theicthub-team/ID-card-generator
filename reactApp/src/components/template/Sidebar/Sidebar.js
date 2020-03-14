import React, { Component } from "react";
import "./Sidebar.css";
import Sideitem from "./Sideitem";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <nav className="col-md-3 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
              <ul className="nav flex-column">
                <Sideitem
                  name="Dashboard"
                  active={true}
                  href=""
                  dataFeather="home"
                />
                <Sideitem
                  name="Orders"
                  active={false}
                  href=""
                  dataFeather="file"
                />
                <Sideitem
                  name="Products"
                  active={false}
                  href=""
                  dataFeather="shopping-cart"
                />
                <Sideitem
                  name="Customers"
                  active={false}
                  href=""
                  dataFeather="users"
                />
                <Sideitem
                  name="Reports"
                  active={false}
                  href=""
                  dataFeather="bar-chart-2"
                />
                <Sideitem
                  name="Integrations"
                  active={false}
                  href=""
                  dataFeather="layers"
                />
                <Sideitem
                  name="Current month"
                  active={false}
                  href=""
                  dataFeather="file-text"
                />
                <Sideitem
                  name="Last quarter"
                  active={false}
                  href=""
                  dataFeather="file-text"
                />
                <Sideitem
                  name="Social engagement"
                  active={false}
                  href=""
                  dataFeather="file-text"
                />
                <Sideitem
                  name="Year-end sale"
                  active={false}
                  href=""
                  dataFeather="file-text"
                />
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
