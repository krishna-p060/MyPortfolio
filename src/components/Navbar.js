import React from 'react';
import './Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="Navbar">
      <div className="Navbar-logo">
        <h1>KRP</h1>
      </div>
        <nav >
            <ul className="Navbar-nav">
            <li><a href="/"><i className="fas fa-home"></i>Home</a></li>
            <li><a href="/about"><i className="fas fa-user"></i>About</a></li>
            <li><a href="/projects"><i className="fas fa-project-diagram"></i> Projects</a></li>
            <li><a href="/resume"><i className="fas fa-file-alt"></i>Resume</a></li>
            </ul>
        </nav>
    </header>
  );
}

export default Navbar;