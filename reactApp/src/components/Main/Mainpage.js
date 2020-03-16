import React, { Component } from "react";
import MainContainer from "./../Main/MainContainer";
import Sidebar from "./../template/Sidebar/Sidebar";
// import { Redirect } from "react-router-dom";
import idgenerator from "./../../api/idgenerator";
import { encrypt, decrypt } from "../Security";

class Mainpage extends Component {
  state = { isLoggedIn: false, apikey: null, events: [], selectedEvent: null };

  componentDidMount() {
    if (this.props) {
      this.setState({
        isLoggedIn: this.props.isLoggedIn,
        apikey: this.props.apikey
      });
    }

    if (localStorage.getItem("state") !== null) {
      const stateObj = decrypt(localStorage.getItem("state"));
      console.log(stateObj);
      this.setState(stateObj);
    } else {
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

          // console.log(this.state.events);

          this.setState({ events: events, selectedEvent: events[0] });
          localStorage.setItem("state", encrypt(this.state));
        });
    }

    // console.log(this.state);
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
    return (
      <div>
        <Sidebar
          events={this.state.events}
          onEventSelect={this.onEventSelect}
        />
        <MainContainer selectedEvent={this.state.selectedEvent} />
      </div>
    );
    // } else {
    //   return <Redirect to="/login" />;
    // }
  }
}

export default Mainpage;
