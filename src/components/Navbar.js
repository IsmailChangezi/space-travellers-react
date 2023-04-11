import React from "react";
import { Link } from "react-router-dom";
import Missions from "./Missions";
import Profile from "./Profile";
import Rockets from "./Rockets";
export default function Navbar() {
  return (
    <header>
      <Link to="/">
        <h1>BookStore CMS</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">Rockets</Link>
          </li>
          <li>
            <Link to="/Profile">Profiles</Link>
          </li>
          <li>
            <Link to="/Missions">Missions</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
