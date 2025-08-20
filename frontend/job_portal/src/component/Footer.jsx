// src/component/Footer/Footer.jsx
import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} JobFinder. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
