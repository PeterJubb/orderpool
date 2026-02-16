import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-left">
          <Link to="/">
            <img src="/Orderpool_logo.png" alt="OrderPool logo" className="logo" />
          </Link>
          <span className="brand">OrderPool</span>
        </div>

        <nav className="nav">
          <Link to="/mission" className="nav-link">Mission</Link>
          <Link to="/value" className="nav-link">Value</Link>
          <Link to="/team" className="nav-link">Team</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>

        <div className="header-actions">
          <Link to="/get-started" className="header-btn primary">Get Started</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;

