import React, { useState } from "react";
import "./calorieResultShow.css";

const CalorieResultShow = ({
  walkdatacomb,
  rundatacomb,
  bicyclingdatacomb,
  swimdatacomb,
  gymdatacomb,
  dancedatacomb,
  sportdatacomb,
}) => {
  const [activeClass, setActiveClass] = useState(1);

  const addActiveClass = (index) => {
    setActiveClass(index);
  };

  return (
    <div>
      <div className="options">
        <div
          className={activeClass === 1 ? "option active bg1" : "option bg1"}
          onClick={() => addActiveClass(1)}
        >
          <div className="label">
            <div className="icon">
              <i className="bx bxs-cookie"></i>
            </div>
            <div className="info">
              <div className="main">WALKDATA</div>
              <div className="sub">
                {walkdatacomb.map((w) => {
                  return (
                    <>
                      <div>
                        {w.activity} --- {Math.floor(w.time)} hr{" "}
                        {Math.floor(
                          (Math.abs(w.time) - Math.floor(w.time)) * 60
                        )}{" "}
                        min{" "}
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div
          className={activeClass === 2 ? "option active bg2" : "option bg2"}
          onClick={() => addActiveClass(2)}
        >
          <div className="label">
            <div className="icon">
              <i className="bx bxs-badge-dollar"></i>
            </div>
            <div className="info">
              <div className="main">RUNDATA</div>
              <div className="sub">
                {rundatacomb.map((w) => {
                  return (
                    <>
                      <div>
                        {w.activity} --- {Math.floor(w.time)} hr{" "}
                        {Math.floor(
                          (Math.abs(w.time) - Math.floor(w.time)) * 60
                        )}{" "}
                        min
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div
          className={activeClass === 3 ? "option active bg3" : "option bg3"}
          onClick={() => addActiveClass(3)}
        >
          <div className="label">
            <div className="icon">
              <i className="bx bxs-heart-circle"></i>
            </div>
            <div className="info">
              <div className="main">BICYCLE DATA</div>
              <div className="sub">
                {bicyclingdatacomb.map((w) => {
                  return (
                    <>
                      <div>
                        {w.activity} --- {Math.floor(w.time)} hr{" "}
                        {Math.floor(
                          (Math.abs(w.time) - Math.floor(w.time)) * 60
                        )}{" "}
                        min
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div
          className={activeClass === 4 ? "option active bg4" : "option bg4"}
          onClick={() => addActiveClass(4)}
        >
          <div className="label">
            <div className="icon">
              <i className="bx bxs-coffee-alt"></i>
            </div>
            <div className="info">
              <div className="main">SWIMDATA</div>
              <div className="sub">
                {swimdatacomb.map((w) => {
                  return (
                    <>
                      <div>
                        {w.activity} --- {Math.floor(w.time)} hr{" "}
                        {Math.floor(
                          (Math.abs(w.time) - Math.floor(w.time)) * 60
                        )}{" "}
                        min
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div
          className={activeClass === 5 ? "option active bg5" : "option bg5"}
          onClick={() => addActiveClass(5)}
        >
          <div className="label">
            <div className="icon">
              <i className="bx bxs-flame"></i>
            </div>
            <div className="info">
              <div className="main">GYM DATA</div>
              <div className="sub">
                {" "}
                {gymdatacomb.map((w) => {
                  return (
                    <>
                      <div>
                        {w.activity} --- {Math.floor(w.time)} hr{" "}
                        {Math.floor(
                          (Math.abs(w.time) - Math.floor(w.time)) * 60
                        )}{" "}
                        min
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div
          className={activeClass === 6 ? "option active bg6" : "option bg6"}
          onClick={() => addActiveClass(6)}
        >
          <div className="label">
            <div className="icon">
              <i className="bx bxs-flame"></i>
            </div>
            <div className="info">
              <div className="main">GYM DATA</div>
              <div className="sub">
                {" "}
                {dancedatacomb.map((w) => {
                  return (
                    <>
                      <div>
                        {w.activity} --- {Math.floor(w.time)} hr{" "}
                        {Math.floor(
                          (Math.abs(w.time) - Math.floor(w.time)) * 60
                        )}{" "}
                        min
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div
          className={activeClass === 7 ? "option active bg7" : "option bg7"}
          onClick={() => addActiveClass(7)}
        >
          <div className="label">
            <div className="icon">
              <i className="bx bxs-flame"></i>
            </div>
            <div className="info">
              <div className="main">GYM DATA</div>
              <div className="sub">
                {" "}
                {sportdatacomb.map((w) => {
                  return (
                    <>
                      <div>
                        {w.activity} --- {Math.floor(w.time)} hr{" "}
                        {Math.floor(
                          (Math.abs(w.time) - Math.floor(w.time)) * 60
                        )}{" "}
                        min
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalorieResultShow;
