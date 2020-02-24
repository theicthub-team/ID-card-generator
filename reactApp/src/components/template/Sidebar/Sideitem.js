import React from "react";

const Sideitem = ({ name, active, href, datafeather }) => {
  if (active) {
    return (
      <li className="nav-item">
        <a className="nav-link active" href={href}>
          <span data-feather={datafeather}></span>
          {name} <span className="sr-only">(current)</span>
        </a>
      </li>
    );
  }

  return (
    <li className="nav-item">
      <a className="nav-link" href={href}>
        <span data-feather={datafeather}></span>
        {name}
      </a>
    </li>
  );
};

export default Sideitem;
