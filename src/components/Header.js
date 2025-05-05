import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header-container">
        {/* Left: Logo */}
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src="/logo.png" alt="SarbReal Logo" className="logo-image" />
          <span className="logo-text">SarbReal</span>
        </Link>

        {/* Right: Burger + Nav */}
        <div className="nav-right">
          <button
            className={`burger ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
            <NavLink to="/" end onClick={closeMenu}>
              Home
            </NavLink>
            <NavLink to="/about" onClick={closeMenu}>
              About Me
            </NavLink>
            <NavLink to="/contact" onClick={closeMenu}>
              Contact Me
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
