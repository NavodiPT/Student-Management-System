import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../styles/teacher/header.css';

export default function Header() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={scrolling ? "navbar navbar-scrolled" : "navbar"}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
        📜MYLearn
        </Link>

        <div className="menu-icon">☰</div>

        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/student" className="nav-links">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/student-profile" className="nav-links">Profile</Link>
          </li>
          <li className="nav-item">
            <Link to="/student-viewCourse" className="nav-links">Courses</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
