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
        {/* Logo - Left */}
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src="/logo.png" alt="SarbReal Logo" className="logo-image" />
          <span className="logo-text">SarbReal</span>
        </Link>

        {/* Desktop nav */}
        <nav className="nav-links-desktop">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About Me</NavLink>
          <NavLink to="/contact">Contact Me</NavLink>
        </nav>

        {/* Mobile burger */}
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
        </div>
      </div>

      {/* Mobile dropdown nav */}
      <nav className={`nav-links-mobile ${menuOpen ? "active" : ""}`}>
        <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
        <NavLink to="/about" onClick={closeMenu}>About Me</NavLink>
        <NavLink to="/contact" onClick={closeMenu}>Contact Me</NavLink>
      </nav>
    </header>
  );
};

export default Header;
