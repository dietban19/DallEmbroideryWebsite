import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Logo from "./components/Navbar/Logo";
import Hero from "./components/hero/hero";
import Home from "./components/home/home";
import Footer from "./components/Footer/Footer";
import Order from "./components/Order/order";

function App() {
  return (
    <>
      <Logo />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
      </Routes>
      <Footer />
      {/* <p>
        asdfasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdf
      </p>
      <p>
        asdfasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdf
      </p>
      <p>
        asdfasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdf
      </p>
      <p>
        asdfasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdf
      </p>
      <p>
        asdfasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdf
      </p>
      <p>
        asdfasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdf
      </p>
      <p>
        asdfasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdf
      </p>
      <p>
        asdfasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdf
      </p>
      <p>
        asdfasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdf
      </p>
      <p>
        asdfasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdf
      </p>
      <p>
        asdfasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdf
      </p>
      <p>
        asdfasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdf
      </p>
      <p>
        asdfasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdf
      </p>
      <p>
        asdfasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdf
      </p>
      <p>
        asdfasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdf
      </p>
      <p>
        asdfasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdf
      </p>
      <p>
        asdfasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdf
      </p>
      <p>
        asdfasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdf
      </p>
      <p>
        asdfasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdf
      </p>
      <p>
        asdfasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdf
      </p>
      <p>
        asdfasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdf
      </p>
      <p>
        asdfasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdf
      </p>
      <p>
        asdfasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdf
      </p>
      <p>
        asdfasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdf
      </p>
      <p>
        asdfasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdf
      </p>
      <p>
        asdfasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdf
      </p>
      <p>
        asdfasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdf
      </p>
      <p>
        asdfasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdf
      </p>
      <p>
        asdfasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdf
      </p>
      <p>
        asdfasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdf
      </p>
      <p>
        asdfasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdf
      </p>
      <p>
        asdfasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdf
      </p>
      <p>
        asdfasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdf
      </p>
      <p>
        asdfasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdf
      </p>
      <p>
        asdfasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdf
      </p>
      <p>
        asdfasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdffasdf
      </p> */}
    </>
  );
}

export default App;
