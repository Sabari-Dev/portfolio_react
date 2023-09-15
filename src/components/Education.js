import React from "react";
import TrackVisibility from "react-on-screen";

const Education = () => {
  return (
    <section className="banner education" id="education">
      <h2>Education</h2>

      <div className="education-details">
        <TrackVisibility>
          {({ isVisible }) => (
            <div
              className={
                isVisible ? "animate__animated animate__backInLeft" : ""
              }
            >
              <div className="school">
                <div className="duration">2015</div>
                <div className="name-div">
                  <div className="course">SSLC</div>
                  <div className="name">
                    Government Higher secondary school , Keathanur.
                  </div>
                  <div className="percentage">
                    Percentage: <span>87%</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </TrackVisibility>

        <TrackVisibility>
          {({ isVisible }) => (
            <div
              className={
                isVisible ? "animate__animated animate__backInLeft" : ""
              }
            >
              <div className="school">
                <div className="duration">2017</div>
                <div className="name-div">
                  <div className="course">HSC</div>
                  <div className="name">
                    Government Higher secondary school , Keathanur.
                  </div>

                  <div className="percentage">
                    Percentage: <span>73%</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </TrackVisibility>
        <TrackVisibility>
          {({ isVisible }) => (
            <div
              className={
                isVisible ? "animate__animated animate__backInLeft" : ""
              }
            >
              <div className="school">
                <div className="duration">2020</div>
                <div className="name-div">
                  <div className="course">{"BCA(Computer Application)"}</div>
                  <div className="name">
                    RVS college of arts & science ,sulur.
                  </div>
                  <div className="percentage">
                    Percentage: <span>70%</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </TrackVisibility>
        <TrackVisibility>
          {({ isVisible }) => (
            <div
              className={
                isVisible ? "animate__animated animate__backInLeft" : ""
              }
            >
              <div className="school">
                <div className="duration">2023</div>
                <div className="name-div">
                  <div className="course">MERN stack Development</div>
                  <div className="name">Skill safari</div>
                </div>
              </div>
            </div>
          )}
        </TrackVisibility>
      </div>
    </section>
  );
};

export default Education;
