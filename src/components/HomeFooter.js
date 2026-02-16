import React from 'react';
import { Link } from 'react-router-dom';

function HomeFooter() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-column">
            <h4>Product</h4>
            <ul>
              <li><Link to="/how-it-works">How it works</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/public-orders">Public orders</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><Link to="/mission">Mission</Link></li>
              <li><Link to="/team">Team</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Legal</h4>
            <ul>
              <li><Link to="/privacy">Privacy</Link></li>
              <li><Link to="/terms">Terms</Link></li>
              <li><Link to="/safety">Safety</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© Order Pool</span>
          <span>Aggregated Wholesaling Manufacturing Marketplace</span>
        </div>
      </div>
    </footer>
  );
}

export default HomeFooter;

