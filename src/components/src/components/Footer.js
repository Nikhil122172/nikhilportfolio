import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer-text">Designed and Developed by Ravi Shankar Kumar</p>
      <div className="footer-icons">
        <a href="https://www.instagram.com/cool_dude9525/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://github.com/ravi3018" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/r-k-00491123a" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
      <p className="footer-copyright">© {year} RK. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
