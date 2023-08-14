import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <>
      <div className="paddings innerWidth flexColCenter logoContainer">
        <Link to="/">
          <img src="./dall.png" alt="logo" />
        </Link>

        <span className="companyName">Dall Embroidery</span>
        <span className="slogan">Slogan here</span>
      </div>
    </>
  );
};

export default Logo;
