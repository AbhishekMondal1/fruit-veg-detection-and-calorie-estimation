import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom"
import { gsap } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faBook, faImage, } from "@fortawesome/free-solid-svg-icons";
import "./landingPage.css";

const LandingPage = () => {

  useEffect(() => {
    gsap.to(".overlay h1", {
      opacity: 0,
      y: -60,
      ease: "Expo.easeInOut",
      duration: 2,
    });

    gsap.to(".overlay span", {
      duration: 2,
      delay: 0.3,
      opacity: 0,
      y: -60,
      ease: "Expo.easeInOut",
    });

    gsap.to(".overlay", {
      duration: 2,
      delay: 1,
      top: "-100%",
      ease: "Expo.easeInOut",
    });

    gsap.from(".ellipse-container", {
      duration: 1,
      delay: 2,
      opacity: 0,
      ease: "Expo.easeInOut",
    });

    gsap.from(".yellow", {
      duration: 1,
      delay: 3.5,
      opacity: 0,
      ease: "Expo.easeInOut",
    });

    gsap.from(".circle1", {
      duration: 1,
      delay: 2.4,
      opacity: 0,
      ease: "Expo.easeInOut",
    });

    gsap.from(".circle2", {
      duration: 1,
      delay: 2.6,
      opacity: 0,
      ease: "Expo.easeInOut",
    });

    gsap.from(".logo", {
      duration: 1,
      delay: 3,
      opacity: 0,
      y: -100,
      ease: "Expo.easeInOut",
    });

    gsap.from(".menu-links ul li", {
      duration: 1,
      delay: 3.2,
      opacity: 0,
      x: -100,
      ease: "Expo.easeInOut",
      stagger: 0.08,
    });

    gsap.from(".scrolldown", {
      duration: 1,
      delay: 3.4,
      opacity: 0,
      y: 100,
      ease: "Expo.easeInOut",
    });

    gsap.from(".text .title", {
      duration: 1,
      delay: 3,
      opacity: 0,
      x: 200,
      ease: "Expo.easeInOut",
    });

    gsap.from(".text p", {
      duration: 1,
      delay: 3.2,
      opacity: 0,
      x: 200,
      ease: "Expo.easeInOut",
    });

    gsap.from(".watchnow", {
      duration: 1,
      delay: 3.4,
      opacity: 0,
      x: 200,
      ease: "Expo.easeInOut",
    });

    gsap.from(".media ul li", {
      duration: 1,
      delay: 3,
      opacity: 0,
      y: 100,
      ease: "Expo.easeInOut",
      stagger: 0.08,
    });
  },[]);
  return (
    <div>
      <div className="overlay">
        <h1>Fruit Vegetable Detector</h1>
        <span>ML AI</span>
      </div>

      <div className="wrapper">
        <div className="nav">
          <div className="logo">
            <h1>
              <span>
                calorie <br /> estimator
              </span>
              <br />
              fruit detector
            </h1>
          </div>

            <div className="menu-links">
              <ul>
                <li>
                  <Link to="/"> home.</Link>
                </li>
                <li>
                  <Link to="/detect">fruit detect.</Link>
                </li>
                <li>
                  <Link to="/calorie-burn">calorie burn counter.</Link>
                </li>
              </ul>             
            </div>

          <div className="scrolldown">scroll</div>
        </div>

        <div className="text">
          <div className="title">Detect</div>
          <p>
            Detect the frits, vegetables and estimate their calories <br />{" "}
            using Custom Vision AI.
          </p>
        </div>

        <div className="watchnow">
          <FontAwesomeIcon icon={faPlay} />
          <ul>
                <li>
                  <Link to="/detect"> Start now!</Link>
                </li>
          </ul>
        </div>

        <div className="media">
          <ul>
            <li>
              <FontAwesomeIcon icon={faBook} />
            </li>
            <li>
              <FontAwesomeIcon icon={faBook} />
            </li>
            <li>
              <FontAwesomeIcon icon={faImage} />
            </li>
          </ul>
        </div>

        <div className="ellipse-container">
          <div className="ellipse thin"></div>
          <div className="ellipse thick"></div>
          <div className="ellipse yellow"></div>
          <div className="circle1">
            <span>Detect Fruits</span>
          </div>
          <div className="circle2">
            <span>Count Calorie Burn</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
