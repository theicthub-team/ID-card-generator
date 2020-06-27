import React, { Component } from "react";
import DashboardContainer from "./DashboardContainer";
import Sidebar from "../template/Sidebar/Sidebar";
import { Helmet } from "react-helmet";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Dashboard</title>
        </Helmet>
        <Sidebar />
        <DashboardContainer />
      </div>
    );
  }
}

export default Dashboard;
