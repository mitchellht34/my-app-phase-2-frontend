import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {

  return (
    <div>
      <NavLink
        to="/"
        exact
        style={{ marginRight: "10px" }}
      >
        Home
      </NavLink>
      <NavLink
        to="/search"
        style={{ marginRight: "10px" }}
      >
        Search
      </NavLink>
      <NavLink
        to="/favorites"
        style={{ marginRight: "10px" }}
      >
        My Favorites
      </NavLink>
      <NavLink
        to="/new-entry"
        style={{ marginRight: "10px" }}
      >
        Manual Entry
      </NavLink>
    </div>
  );
}

export default NavBar;