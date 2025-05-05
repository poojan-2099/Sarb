import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => (
  <header className="header">
    <div className="header-inner">
      <Link to="/" className="logo" aria-label="SarbReal Home">
        <img
          src="/logo.png"
          alt="SarbReal Logo"
          className="logo-image"
          width={60}
          height={60}
          loading="lazy"
        />
        <span className="logo-text">SarbReal</span>
      </Link>

      <nav className="nav-links">
        <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
          About Me
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
          Contact Me
        </NavLink>
      </nav>
    </div>
  </header>
);

export default Header;
