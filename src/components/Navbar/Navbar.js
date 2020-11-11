import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// This module controls the Navbar at the top of the page


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link className="navbar-brand" to="/">
        Chris Asmar
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/portfolio"
              className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
            >
              Portfolio
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;