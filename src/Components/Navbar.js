import React from "react";
import { Link } from "react-router-dom";
import "./bootstrap/css/bootstrap.css";
const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <ul className="nav">
        <li>
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
