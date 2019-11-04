import React from "react";

const Footer = props => {
  return (
    <footer>
      <div className="footer__left">
        <a href="/">terms of service</a>
        <a href="/">privacy policy</a>
        <a href="/">return policy</a>
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
