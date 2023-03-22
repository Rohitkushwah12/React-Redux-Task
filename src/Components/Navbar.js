import React from "react";
import { Link } from "react-router-dom";
import "./bootstrap/css/bootstrap.css";
const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link className="nav-link active" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link active" to="tasks">
            List of Tasks
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
