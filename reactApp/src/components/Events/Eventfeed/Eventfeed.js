import React, { Component } from "react";
import Sidebar from "../../template/Sidebar/Sidebar";
// import { Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import EventfeedContainer from "./EventfeedContainer";

class CreateEvent extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Event feed</title>
        </Helmet>
        <Sidebar />
        <EventfeedContainer />
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

export default CreateEvent;
