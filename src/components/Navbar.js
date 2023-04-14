import React from 'react';
import { Link } from 'react-router-dom';
import planet from '../assests/icons_files/planet.png';

export default function Navbar() {
  return (
    <>
      <header>
        <Link to="/" className="logo-container">
          <img src={planet} alt="img" className="logo" />
          <h3>Space Traveller&#39;s Hub</h3>
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/">Rockets</Link>
            </li>
            <li>
              <Link to="/Missions">Missions</Link>
            </li>
            <li>
              <Link to="/Profile">Profiles</Link>
            </li>
          </ul>
        </nav>
      </header>
      <hr />
    </>
  );
}
