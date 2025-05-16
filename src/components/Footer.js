import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-column footer-logo-wrap">
        <Link to="/">
          <img
            src="/logo.png"
            alt="SarbReal Logo"
            className="footer-logo round-logo"
          />
        </Link>
      </div>

      <div className="footer-column social-column">
        <div className="social-icons">
          <a href="https://www.facebook.com/sarbreal" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/sarbrealtor" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/sarbreal" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://www.tiktok.com/@sarbreal" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-tiktok"></i>
          </a>
        </div>
      </div>


      <div className="footer-column footer-link-wrap">
        <Link to="/contact" className="footer-contact-link">
          Contact Me
        </Link>
      </div>
    </div>

    <div className="footer-info">
      <p>© {new Date().getFullYear()} SarbReal. All rights reserved.</p>
      <p>DRE #02070444 | Partnered with <a href="https://maps.app.goo.gl/Pm7aW6HTphWxyjEP8" target="_blank" rel="noopener noreferrer">Sunrise Star Realty, Chatsworth</a></p>

    </div>
  </footer>
);

export default Footer;
