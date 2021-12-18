import React, { useEffect, useRef } from "react";
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
  });
  return (
      <div>
          <div className="hero-image">
              
          </div>
      <div class="overlay">
        <h1>Fruit Vegetable Detector</h1>
        <span>ML AI</span>
      </div>

      <div class="wrapper">
        <div class="nav">
          <div class="logo">
            <h1>
              <span>
                calorie <br /> estimator
              </span>
              <br />
              fruit detector 
            </h1>
          </div>

          <div class="menu-links">
            <ul>
              <li>home.</li>
              <li>fruit detect.</li>
              <li>calorie burn counter.</li>
            </ul>
          </div>

          <div class="scrolldown">scroll</div>
        </div>

        <div class="text">
          <div class="title">Detect</div>
          <p>
            Detect the frits, vegetables and estimate their calories <br /> using Custom Vision AI.
          </p>
        </div>

        <div class="watchnow">
          <FontAwesomeIcon icon={faPlay} />
          <a href="#">start now!</a>
        </div>

        <div class="media">
          <ul>
            <li>
              <FontAwesomeIcon icon={faBook}  />
            </li>
            <li>
              <FontAwesomeIcon icon={faBook} />
            </li>
            <li>
              <FontAwesomeIcon icon={faImage} />
            </li>
          </ul>
        </div>

        <div class="ellipse-container">
          <div class="ellipse thin"></div>
          <div class="ellipse thick"></div>
          <div class="ellipse yellow"></div>
          <div class="circle1">
            <span>Detect Fruits</span>
          </div>
          <div class="circle2">
            <span>Count Calorie Burn</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
