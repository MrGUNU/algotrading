/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Footer.css'; 
import logo from './images/algotradepro-high-resolution-logo.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="footer-logo">
          <img src={logo} alt="Tradetron Logo" />
          <p>ALGO STRATEGY MARKETPLACE</p>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="">Features</a></li>
            <li><a href="">Wall of Love</a></li>
            <li><a href="">Pricing</a></li>
            <li><a href="">API</a></li>
            <li><a href="">Affiliates</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="">Integrations</a></li>
            <li><a href="">Resources</a></li>
            <li><a href="">Top Creators</a></li>
            <li><a href="">QnA Forum</a></li>
            <li><a href="">TT Uni</a></li>
            <li><a href="">TT Status</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="">Privacy policy</a></li>
            <li><a href="">Terms of use</a></li>
            <li><a href="">Trademark</a></li>
            <li><a href="">Careers</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <div className="social-icons">
            <a href=""><i className="fab fa-facebook"></i></a>
            <a href=""><i className="fab fa-twitter"></i></a>
            <a href=""><i className="fab fa-linkedin"></i></a>
            <a href=""><i className="fab fa-telegram"></i></a>
            <a href=""><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>AlgoTradePro ® . Copyright 2024</p>
      </div>
    </footer>
  );
}

export default Footer;
