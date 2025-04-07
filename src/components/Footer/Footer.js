
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <span>© 2024 Web Portal. All rights reserved.</span>
        </div>
        <div className="footer-links">
          <Link to="/contacts">Contacts</Link>
          <Link to="/support">Support</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
