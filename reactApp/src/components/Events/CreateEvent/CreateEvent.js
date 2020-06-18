import React, { Component } from "react";
import CreateEventContainer from "./CreateEventContainer";
import Sidebar from "../../template/Sidebar/Sidebar";
import { Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";

class CreateEvent extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Create Event</title>
        </Helmet>
        <Sidebar />
        <CreateEventContainer />
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
