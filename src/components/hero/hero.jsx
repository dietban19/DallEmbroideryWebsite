import React, { useRef, useEffect, useState } from "react";
import "./hero.css";
import { Link } from "react-router-dom";
const hero = () => {
  const myRef = useRef();
  const [elementVisible, setElementVisible] = useState();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      console.log("entry", entry);
    });
    // console.log("myref", myRef.current);
    observer.observe(myRef.current);
  }, []);
  return (
    <section className="hero">
      <div className="paddings hero-content">
        <div className="flexColStart heroText">
          <h1 className="heroTitle">Your Custom Embroidery Creations</h1>
          <p className="heroDesc">Unique designs that speak your style</p>
          <div className="flexCenter orderContainer">
            <div className="flexColCenter orderContainer__content">
              <span>Click here to order a custom design!</span>
              <Link className="link" to="/order">
                Custom Order
              </Link>
            </div>
            <div className=" flexColCenter orderContainer__content">
              <span>Or Choose from our latest products</span>
              <Link className="link" to="/products">
                Products
              </Link>
            </div>
          </div>
        </div>

        <div ref={myRef} className="flexCenter images">
          <div className="imageContainer">
            <img src="./naruto.png" />
          </div>
          <div className="imageContainer">
            <img src="./onepiece.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default hero;
