import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import { gsap } from "gsap";
import "./navbarMenu.css";
import LandingPage from "../LandingPage/LandingPage";
import CalorieBurnCalculate from "../CalorieBurnCalculate/CalorieBurnCalculate";
import MainView from "../MainView/MainView";

const NavbarMenu = () => {
  const link = useRef(null);
  const [t1, setT1] = useState(new gsap.timeline({ paused: false }));
  const [toggle, setToggle] = useState(false);

  console.log(t1);

  useEffect(() => {
    t1.to(".one", {
      duration: 0.8,
      y: 6,
      rotation: 45,
      ease: "Expo.easeInOut",
    });
    t1.to(".two", {
      duration: 0.8,
      y: -6,
      rotation: -45,
      ease: "Expo.easeInOut",
      delay: -0.8,
    });

    t1.to(".menu", {
      duration: 1,
      top: "0%",
      ease: "Expo.easeInOut",
      delay: -1,
    });

    t1.staggerFrom(
      ".menu ul li",
      2,
      { x: -200, opacity: 0, ease: "Expo.easeOut" },
      0.3
    );

    t1.reverse();
    t1.reversed(!t1.reversed());
  }, []);

  useEffect(() => {
    t1.reversed(!toggle);
  }, [toggle]);

  return (
    <div>
      <div
        class="toggle-btn"
        onClick={(e) => {
          setToggle(!toggle);
        }}
      >
        <span class="one"></span>
        <span class="two"></span>
      </div>
      <div class="menu">
        <div class="data">
          <ul>
            <li>Navigation</li>
            <li>
              <Link
                to="/"
                onClick={(e) => {
                  setToggle(!toggle);
                }}
              >
                {" "}
                home.
              </Link>
            </li>
            <li>
              <Link
                to="/detect"
                onClick={(e) => {
                  setToggle(!toggle);
                }}
              >
                fruit detect.
              </Link>
            </li>
            <li>
              <Link
                to="/calorie-burn"
                onClick={(e) => {
                  setToggle(!toggle);
                }}
              >
                calorie burn counter.
              </Link>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  setToggle(!toggle);
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      <Routes>
        <Route path="/detect" element={<MainView/>}/>
        <Route path="/" element={
          <LandingPage />
          } />
        <Route path="/calorie-burn" element={<CalorieBurnCalculate />}/>
      </Routes>
    </div>
  );
};

export default NavbarMenu;
