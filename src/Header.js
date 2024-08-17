/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import './Header.css';
import logo from './images/algotradepro-high-resolution-logo.png'; // Assuming you have the Zerodha logo image in your images folder

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Zerodha Logo" />
      </div>
      <nav className="nav-links">
        <a href="">Signup</a>
        <a href="">About</a>
        <a href="">Products</a>
        <a href="">Pricing</a>
        <a href="">Support</a>
      </nav>
      <div className="menu-icon">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}

export default Header;
