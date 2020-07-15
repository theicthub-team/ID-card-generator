import React, { Component } from "react";
import Sidebar from "../../template/Sidebar/Sidebar";
// import { Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import EventfeedContainer from "./EventfeedContainer";

class Eventfeed extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Event feed</title>
        </Helmet>
        <Sidebar />
        <EventfeedContainer event_id={this.props.match.params.id} />
      </div>
    );
  }
}

export default Eventfeed;
