import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/fruits">Fruits</NavLink>
        <NavLink to="/about">Sobre</NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
