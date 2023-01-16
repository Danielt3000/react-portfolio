import React from "react";
import "./miniopen.css";

function MiniOpen() {
  return (
    <div className="animate__animated animate__zoomIn">
      <ul className="mini">
        <li className="mini--lis">
          <a className="mini--links" href="#">
            Home
          </a>
        </li>
        <li className="mini--lis">
          <a className="mini--links" href="#">
            Figma
          </a>
        </li>
        <li className="mini--lis">
          <a className="mini--links" href="#">
            About
          </a>
        </li>
      </ul>
    </div>
  );
}

export default MiniOpen;
