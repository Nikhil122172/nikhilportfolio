import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer-text">Designed and Developed by Nikhil Kumar</p>
      <div className="footer-icons">
        <a href="https://www.instagram.com/nikhil_kumar_264/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://github.com/Nikhil122172/" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/nikhil-kumar-17b822256/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
      <p className="footer-copyright">© {year} NK. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
