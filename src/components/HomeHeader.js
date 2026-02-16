import React from 'react';
import { Link } from 'react-router-dom';

function HomeHeader() {
  return (
    <header>
      <nav>
        <Link to="/" className="brand" aria-label="Order Pool home">
          <img src="/Orderpool_logo.png" alt="Order Pool logo" />
          <span>Order Pool</span>
        </Link>

        <ul className="nav-links" aria-label="Primary navigation">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/how-it-works">How it works</Link></li>
          <li><Link to="/for-publishers">Publishers</Link></li>
          <li><Link to="/for-manufacturers">Manufacturers</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
        </ul>

        <div className="nav-actions" aria-label="Account actions">
          <Link to="/auth-signin" className="btn btn-secondary">Sign in</Link>
          <Link to="/get-started" className="btn btn-primary">Get started</Link>
        </div>
      </nav>
    </header>
  );
}

export default HomeHeader;

