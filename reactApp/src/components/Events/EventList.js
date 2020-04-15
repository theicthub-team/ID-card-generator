import React from "react";
import EventItem from "./EventItem";

const events = [1]; // Dummy

const EventList = () => {
  const renderedEvents = events.map((event) => {
    return (
      <div key={event} className="ui relaxed divided list">
        <EventItem />
      </div>
    );
  });

  return <ul className="nav flex-column">{renderedEvents}</ul>;
};

export default EventList;
