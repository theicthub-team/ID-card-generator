import React from "react";
import { Link } from "react-router-dom";

const EventItem = () => {
  return (
    <div className="sidebar-menu">
      <Link to="/create" className="btn btn-lg btn-transparent" href="#" role="button">
              New Project
            </Link>
      <ul>
        <li><Link to='/'>Project 1</Link></li>
        <li><Link to='/'>Project 2</Link></li>
        <li><Link to='/'>Project 3</Link></li>
        <li><Link to='/'>Project 4</Link></li>
        <li><Link to='/'>Project 5</Link></li>
      </ul>
    </div>
  );
};

export default EventItem;
