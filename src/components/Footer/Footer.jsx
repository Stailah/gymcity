import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";

const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <a
          href="https://github.com/stailah"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Github} alt="" />
        </a>

        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Instagram} alt="" />
        </a>

        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Linkedin} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
