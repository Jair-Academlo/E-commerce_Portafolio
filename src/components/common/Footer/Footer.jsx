import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="copyright">Hecho con ❤ en Academlo 2022</div>
      <div className="social-networks">
        <a
          href="https://www.instagram.com/jair_rincon_/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/jair-rincon-4a21b223a/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a
          href="https://www.youtube.com/channel/UCB59lF7_yGDkEKPCs387FXQ"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-youtube"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
