import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import "./Navbar.scss";

const Navbar = props => {
  const [visible, setVisible] = useState(false);
  const [prevPosition, setPrevPosition] = useState(window.pageYOffset);

  const handleScroll = () => {
    const curPosition = window.pageYOffset;
    let visible = prevPosition > curPosition;
    if (curPosition === 0) {
      visible = false;
    }
    setPrevPosition(curPosition);
    setVisible(visible);
  };
  useEffect(() => window.addEventListener("scroll", handleScroll));
  return (
    <nav
      className={classNames("navbar", {
        "navbar--hidden": !visible
      })}
    >
      <Link to="/">
        <h2 onClick={() => window.scrollTo(0, 0)} className="logo">
          my furnitures.
        </h2>
      </Link>
      <Link to="/cart">
        <i className="fas fa-shopping-cart"></i>
      </Link>
    </nav>
  );
};

export default Navbar;
