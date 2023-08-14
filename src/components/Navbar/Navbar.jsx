import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbarWrapper">
      <div className="flexColCenter innerWidth navbarContainer">
        <div className="flexCenter navbar">
          <a href="">Products</a>
          <a href="">About Us</a>
          <a href="">Contact Us</a>
          <a href="">Return Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
