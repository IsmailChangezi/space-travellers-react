import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <header>
        <Link to="/">
          <h3>Space Traveller&#39;s Hub</h3>
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
      <hr />
    </>

  );
}
