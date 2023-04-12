import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from '../assests/icons_files/planet.png';

export default function Navbar() {
  return (
    <header>
      <nav className="nav--bar">
        <img src={planet} alt="planet" id="planet-icon" />
        <h2 id="nav-header">Space travelers&apos; Hub</h2>
        <ul className="nav--list">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'link')}>Rockets</NavLink>
          </li>
          <li>
            <NavLink to="/Missions" className={({ isActive }) => (isActive ? 'active' : 'link')}>Missions</NavLink>
          </li>
          <li>
            <NavLink to="/Profile" className={({ isActive }) => (isActive ? 'active' : 'link')}>Profiles</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
