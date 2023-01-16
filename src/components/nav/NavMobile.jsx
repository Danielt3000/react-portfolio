import React from "react";
import NavOpen from "./NavOpen";
import logo from "../img/Logo.svg";
import { useState } from "react";

function NavMobile() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  function closeMenu() {
    setMenuOpen(!menuOpen);
  }

  const scrollbehave = () => {
    if (window.scrollY > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", scrollbehave);

  return (
    <div className="">
      <div className={`conteiner ${menuOpen ? "open" : ""}`}></div>
      <nav className="nav">
        <div className={scroll ? "nowrap active" : "nowrap"}>
          <div className="name-logo">
            <a href="/">
              <img className="nav--logo" src={logo} alt="" />
            </a>
            <div className="names">
              <h1 className="names--name">Oscar Daniel</h1>
              <h3 className="names--profression">Web-Developer</h3>
            </div>
          </div>

          <div className="burger">
            <div
              className={`menu-btn ${menuOpen ? "open" : ""}`}
              onClick={closeMenu}
            >
              <div className={`menu-btn__burger `}></div>
            </div>
          </div>
        </div>
        {menuOpen && <NavOpen />}
      </nav>
    </div>
  );
}

export default NavMobile;
