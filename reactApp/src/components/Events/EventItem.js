import React from "react";
import { Link } from "react-router-dom";

const EventItem = ({ event }) => {
  return (
    <li>
      <Link to="/">{event.event_name}</Link>
    </li>
  );
};

export default EventItem;
