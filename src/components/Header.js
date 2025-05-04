import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => (
  <header className="header">
    <Link to="/" className="logo">
      <i className="fas fa-home"></i>
      SarbReal
    </Link>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About Me</Link>
      <Link to="/contact">Contact Me</Link>
    </nav>
  </header>
);

export default Header; 