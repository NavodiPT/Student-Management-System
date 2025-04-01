import React from 'react';
import { Link } from "react-router-dom";
import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Student Portal. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/student" className="footer-link">Privacy Policy</Link>
          <Link to="/student" className="footer-link">Terms of Service</Link>
          <Link to="/contact" className="footer-link">Contact Us</Link>
        </div>
      </div>
    </footer>
  );
}
