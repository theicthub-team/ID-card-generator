import React from "react";
import { Link } from "react-router-dom";

const EventItem = ({ event, onEventSelect }) => {
  return (
    <div onClick={() => onEventSelect(event)}>
      <Link to='/'>{event.event_name}</Link>
    </div>
  );
};

export default EventItem;
