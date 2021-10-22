import React from 'react';
import { NavLink } from 'react-router-dom';

/* Add basic styling for NavLinks */
// const linkStyles = {
//     display: "inline-block",
//     width: "50px",
//     padding: "12px",
//     margin: "0 6px 6px",
//     background: "blue",
//     textDecoration: "none",
//     color: "white",
//   };

function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        exact
      // style={linkStyles}
      // activeStyle={{
      //   background: "darkblue",
      // }}
      >
        Home
      </NavLink>
      <NavLink
        to="/search"
      // style={linkStyles}
      // activeStyle={{
      //   background: "darkblue",
      // }}
      >
        Search
      </NavLink>
      <NavLink
        to="/favorites"
      >
        My Favorites
      </NavLink>
      <NavLink
        to="/new-entry"
      >
        Manual Entry
      </NavLink>
    </div>
  );
}

export default NavBar;