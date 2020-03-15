import React from "react";
import EventItem from "./EventItem";

const EventList = ({ events, onEventSelect }) => {
  const renderedEvents = events.map(event => {
    return (
      <div key={event.id} className="ui relaxed divided list">
        <EventItem event={event} onEventSelect={onEventSelect} />
      </div>
    );
  });

  return renderedEvents;
};

export default EventList;
