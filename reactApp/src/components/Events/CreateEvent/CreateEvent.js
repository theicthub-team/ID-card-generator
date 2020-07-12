import React, { Component } from "react";
import CreateEventContainer from "./CreateEventContainer";
import Sidebar from "../../template/Sidebar/Sidebar";
// import { Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import { createEvent } from "../../../actions/eventAction";
import { connect } from "react-redux";

class CreateEvent extends Component {
  onSubmit = (eventInfo) => {
    this.props.createEvent(eventInfo);
  };

  render() {
    return (
      <div>
        <Helmet>
          <title>Create Event</title>
        </Helmet>
        <Sidebar />
        <CreateEventContainer onSubmit={this.onSubmit} />
      </div>
    );
    // if (this.props.isLoggedIn) {
    //   return (
    //     <div>
    //       <Sidebar />
    //       <CreateEventContainer />
    //     </div>
    //   );
    // } else {
    //   return <Redirect to="/login" />;
    // }
  }
}

export default connect(null, { createEvent })(CreateEvent);
