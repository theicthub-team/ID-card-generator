import React, { Component } from "react";
import CreateEventContainer from "./../CreateEvent/CreateEventContainer";
import Sidebar from "./../template/Sidebar/Sidebar";
import { Redirect } from "react-router-dom";

class CreateEvent extends Component {
  render() {
    // return (
    //   <div>
    //     <Sidebar />
    //     <CreateEventContainer />
    //   </div>
    // );
    if (this.props.isLoggedIn) {
      return (
        <div>
          <Sidebar />
          <CreateEventContainer />
        </div>
      );
    } else {
      return <Redirect to="/login" />;
    }
  }
}

export default CreateEvent;
