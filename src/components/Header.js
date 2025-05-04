import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => (
  <header className="header">
    <Link to="/" className="logo">
      <i className="fas fa-home"></i>
      SarbReal
    </Link>
    <nav>
      <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About Me</NavLink>
      <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact Me</NavLink>
    </nav>
  </header>
);

export default Header; 