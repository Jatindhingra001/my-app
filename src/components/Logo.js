import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';

const Logo = () => {
  return (
    <Link to="/" className="logo-container">
      <div className="logo-icon">🌿</div>
      <div className="logo-text">
        <span className="logo-name">Herbarium</span>
        <span className="logo-tagline">Digital Plant Library</span>
      </div>
    </Link>
  );
};

export default Logo; 