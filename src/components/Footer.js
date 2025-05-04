import React from "react";
import "./Footer.css";

const Footer = () => (
    <footer className="footer">
    <div className="social-icons">
      <a href="https://www.facebook.com/sarbreal" target="_blank" rel="noopener noreferrer" className="social-icon">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="https://www.instagram.com/sarbreal" target="_blank" rel="noopener noreferrer" className="social-icon">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://www.linkedin.com/in/sarbreal" target="_blank" rel="noopener noreferrer" className="social-icon">
        <i className="fab fa-linkedin-in"></i>
      </a>
      <a href="https://www.youtube.com/sarbreal" target="_blank" rel="noopener noreferrer" className="social-icon">
        <i className="fab fa-youtube"></i>
      </a>
      <a href="https://twitter.com/sarbreal" target="_blank" rel="noopener noreferrer" className="social-icon">
        <i className="fab fa-twitter"></i>
      </a>
    </div>
    <div className="footer-info">
          <p>© {new Date().getFullYear()} SarbReal. All rights reserved.</p>
          <p>DRE #02070444 | Partnered with Sunrise Star Realty, Chatsworth</p>
    </div>
  </footer>
);

export default Footer; 