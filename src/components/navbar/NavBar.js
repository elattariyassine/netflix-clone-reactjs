import React, { useEffect, useState } from "react";

import "./NavBar.css";

const NavBar = () => {
  const [show, handleShow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else handleShow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/langfr-220px-Netflix_2015_logo.svg.png"
        alt="NETFLIX Logo"
        className="nav__logo"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/768px-Circle-icons-profile.svg.png"
        alt="User Avatar"
        className="nav__avatar"
      />
    </div>
  );
};

export default NavBar;
