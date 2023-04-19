import React from 'react';
import { NavLink } from 'react-router-dom';



function Header() {
  return (
    <header>
      {/* <nav> */}
        <div className="nav-brand">
          <h2>
            <span>i</span>BukunDev
          </h2>
        </div>
        <div className="nav-menu">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">Task</NavLink>
          <NavLink to="/">Login</NavLink>
        </div>
      {/* </nav> */}
    </header>
  );
}

export default Header;