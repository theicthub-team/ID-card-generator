import React from "react";
import { Link } from "react-router-dom";

const Sideitem = ({ name, active, href, datafeather }) => {
  if (active) {
    return (
      <li className="nav-item">
        <Link className="nav-link active" to={`/${href}`}>
          {name} <span className="sr-only">(current)</span>
        </Link>
      </li>
    );
  }

  return (
    <li className="nav-item">
      <Link className="nav-link" to={`/${href}`}>
        {name}
      </Link>
    </li>
  );
};

export default Sideitem;
