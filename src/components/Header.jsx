import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";

const Header = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/budgeting">Budgeting</Link>
          </li>
          <li>
            <Link to="/Events">Events</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
