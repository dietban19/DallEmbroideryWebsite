import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
const footer = () => {
  return (
    <div className="footer">
      <div className="paddings innerWidth flexColCenter footerContainer">
        <div className="flexColCenter footerText">
          <span className="companyName">Dall Embroidery</span>
          <span className="copyRight">Copyright @ 2022 Dall Embroidery</span>
        </div>

        <div className="nav">
          <Link className="navElement" to="/products">
            Products
          </Link>
          <span>|</span>
          <Link className="navElement" to="/About Us">
            About Us
          </Link>
          <span>|</span>
          <Link className="navElement" to="/contact">
            Contact Us
          </Link>
          <span>|</span>
          <Link className="navElement" to="/return-policy">
            Return Policy
          </Link>
        </div>
        {/* <img className="footer__logo" src="./dall.png" /> */}
      </div>
    </div>
  );
};

export default footer;
