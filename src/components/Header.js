import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <nav className="nav-menu">
        <ul>
          <li><Link to="/plants">Plants</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <button className="sign-in-btn">Sign In</button>
        <button className="sign-up-btn">Sign Up</button>
      </div>
    </header>
  );
};

export default Header; 