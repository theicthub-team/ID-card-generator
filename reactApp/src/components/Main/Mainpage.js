import React, { Component } from "react";
import MainContainer from "./../Main/MainContainer";
import Sidebar from "./../template/Sidebar/Sidebar";
import { Redirect } from "react-router-dom";
import idgenerator from "./../../api/idgenerator";

class Mainpage extends Component {
  state = { events: [], selectedEvent: null };

  componentDidMount() {
    idgenerator
      .get("user/event", {
        headers: {
          Authorization: `Token ${this.props.apikey}`
        },
        params: {
          request_type: "All"
        }
      })
      .then(response => {
        const events = response.data.all_event_details;

        this.setState({ events: events, selectedEvent: events[0] });

        console.log(this.state.events);
      });
  }

  onEventSelect = event => {
    this.setState({ selectedEvent: event });
  };

  render() {
    // return (
    //   <div>
    //     <Sidebar />
    //     <MainContainer />
    //   </div>
    // );
    if (this.props.isLoggedIn) {
      return (
        <div>
          <Sidebar
            events={this.state.events}
            onEventSelect={this.onEventSelect}
          />
          <MainContainer selectedEvent={this.state.selectedEvent} />
        </div>
      );
    } else {
      return <Redirect to="/login" />;
    }
  }
}

export default Mainpage;
