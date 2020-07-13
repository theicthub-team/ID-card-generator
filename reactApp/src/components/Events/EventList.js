import React from "react";
import EventItem from "./EventItem";
import { Link } from "react-router-dom";
import { getOwnEvent } from "../../actions/eventAction";
import { connect } from "react-redux";
class EventList extends React.Component {
  componentDidMount() {
    this.props.getOwnEvent();
  }

  renderedEvents = () => {
    if (this.props.ownEvents) {
      return this.props.ownEvents.map((event) => {
        return <EventItem key={event.id} event={event} />;
      });
    }
  };

  render() {
    return (
      <div className="ui relaxed divided list">
        <ul className="nav flex-column">
          <div className="sidebar-menu">
            <button
              className="btn btn-lg btn-transparent dropdown-toggle"
              type="button"
              id="dropdownMenu2"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="sidebar_menu_text">New Project</span>
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
              <Link
                to="/event/create"
                className="btn btn-lg btn-transparent dropdown-item"
                href="#"
                role="button"
              >
                Create Event
              </Link>
              <Link
                to="/design"
                className="btn btn-lg btn-transparent dropdown-item"
                href="#"
                role="button"
              >
                Create Design
              </Link>
            </div>
            <ul>{this.renderedEvents()}</ul>
          </div>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ownEvents: state.event.event_data,
  };
};

export default connect(mapStateToProps, { getOwnEvent })(EventList);
