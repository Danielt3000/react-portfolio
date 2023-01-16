import React from "react";
import { useState, useEffect } from "react";
import logo from "../img/Logo.svg";
import NavMobile from "./NavMobile";
import MiniOpen from "./MiniOpen";
import "./navs.css";

function Nav() {
  const [wider, setWider] = useState({ width: window.innerWidth });

  const lookSize = () => {
    setWider({
      width: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", lookSize);

    return () => {
      window.removeEventListener("resize", lookSize);
    };
  }, [wider]);

  const [clicked, setClicker] = useState(true);

  const clik = () => {
    setClicker(!clicked);
  };

  const [scroll, setscroll] = useState(false);

  const scrollbehave = () => {
    if (window.scrollY > 50) {
      setscroll(true);
    } else {
      setscroll(false);
    }
  };

  window.addEventListener("scroll", scrollbehave);

  const applied = scroll ? "middle-nav" : "normal";

  const appliedUl = scroll ? "middle-nav-links" : " wrapMain--links";
  const linksnav = scroll ? "linksnav-two" : " navetaion-classes";
  return (
    <div>
      {wider.width > 768 ? (
        <div className="meain">
          <div className="wrapMain">
            <a href="/">
              <img className="wrapMain--logo" src={logo} alt="" />
            </a>
          </div>
          <div className="new-Names">
            <h1 className="names--name">Oscar Daniel</h1>
            <h3 className="names--profression">Web-Developer</h3>
          </div>
          <div className={applied}>
            <ul className={appliedUl}>
              <li className="linksnav">
                <a className={linksnav} href="http://">
                  About
                </a>
              </li>
              <li className="linksnav">
                <a
                  className={linksnav}
                  href="https://www.pinterest.ca/Danielt3k/"
                >
                  Pinterest
                </a>
              </li>
              <li className="linksnav">
                <a className={linksnav} href="/">
                  Home
                </a>
              </li>
              <li className="linksnav">
                <a className={linksnav} href="http://">
                  LinkedIn
                </a>
              </li>
              <li className="linksnav">
                <a className={linksnav} href="http://">
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <NavMobile />
      )}
    </div>
  );
}

export default Nav;
