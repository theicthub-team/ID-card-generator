import React from "react";
import { Link } from "react-router-dom";

const EventItem = () => {
  return (
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
        <Link to="/create" className="btn btn-lg btn-transparent dropdown-item" href="#" role="button">Create Event
        </Link>
        <Link to="/create" className="btn btn-lg btn-transparent dropdown-item" href="#" role="button">Create Design
        </Link>
      </div>        
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
