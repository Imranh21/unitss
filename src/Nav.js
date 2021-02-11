import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <NavLink className="navlink" to="/">
        <p>
          unit<span>ss.</span>
        </p>
      </NavLink>
    </div>
  );
};

export default Nav;
