import React from "react";
import EventItem from "./EventItem";

const events = [1]; // Dummy

const EventList = () => {
  const renderedEvents = events.map(event => {
    return (
      <div className="ui relaxed divided list">
        <EventItem />
      </div>
    );
  });

  return renderedEvents;
};

export default EventList;
