import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Brand column */}
        <div className="footer-col">
          <img src="/Orderpool_logo.png" alt="OrderPool logo" className="logo-footer" />
          <p className="footer-brand-text">
            Where publishers and manufacturers collaborate to create products.
          </p>
        </div>

        {/* For Publishers */}
        <div className="footer-col">
          <h4>For Publishers</h4>
          <Link to="/briefs-new">Post a concept</Link>
          <Link to="/for-manufacturers">Find a manufacturer</Link>
          <Link to="/case-studies">Case studies</Link>
        </div>

        {/* For Manufacturers */}
        <div className="footer-col">
          <h4>For Manufacturers</h4>
          <Link to="/briefs">Discover briefs</Link>
          <Link to="/manufacturer-capabilities">Capabilities</Link>
          <Link to="/safety">Safety &amp; compliance</Link>
        </div>

        {/* Stay in the loop */}
        <div className="footer-col">
          <h4>Stay in the loop</h4>
          <form className="newsletter-form" action="/newsletter-subscribe" method="GET">
            <input
              type="email"
              name="email"
              className="newsletter-input"
              placeholder="you@example.com"
              required
            />
            <button type="submit" className="newsletter-button">Subscribe</button>
          </form>
          <p>We respect your privacy. Unsubscribe anytime.</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <span>© 2025 OrderPool. All rights reserved.</span>
          <div className="footer-links">
            <Link to="/privacy">Privacy</Link> ·
            <Link to="/terms">Terms</Link> ·
            <Link to="/contact">Contact</Link> ·
            <a href="#top">Back to top</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

