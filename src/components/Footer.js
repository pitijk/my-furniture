import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = props => {
  return (
    <footer>
      <div className="footer__left">
        <Link to="/terms-of-service" className="link">
          terms of service
        </Link>
        <Link to="/privacy-policy" className="link">
          privacy policy
        </Link>
        <Link to="/return-policy" className="link">
          return policy
        </Link>
      </div>
      <div className="footer__right">
        <p>
          <strong>Contact Us:</strong>
        </p>
        <p>hello@myfurniture.com</p>
        <p>08-483-057-991</p>
      </div>
    </footer>
  );
};

export default Footer;
