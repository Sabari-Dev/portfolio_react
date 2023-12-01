import React from "react";
import image from "../assets/img/me.png";
import TrackVisibility from "react-on-screen";
import { Container, Row, Col } from "react-bootstrap";
import cv from "../assets/cv/Sabarinathan-resume.pdf";
import { RiFolderDownloadFill } from "react-icons/ri";

const About = () => {
  return (
    <section className="banner about" id="About">
      <h2>About</h2>
      <div className="about-div">
        <Row>
          <Col xs={12} md={6} xl={5}>
            <div className="about-image ">
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__backInLeft" : ""
                    }
                  >
                    <img
                      src={image}
                      alt="img"
                      style={{ height: "350px", width: "350px" }}
                    />
                  </div>
                )}
              </TrackVisibility>
            </div>
          </Col>

          <Col xs={12} md={6} xl={7}>
            <div className="about-content ms-5 ">
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__backInRight" : ""
                    }
                  >
                    <p className="text-light mt-4">
                      I'm a recent graduate passionate about MERN stack
                      development. Eager to apply my skills in MongoDB, Express,
                      React, and Node.js to real-world projects. I've completed
                      practical projects in web development during my studies,
                      showcasing my problem-solving abilities. With a commitment
                      to continuous learning, I stay updated with industry
                      trends. I'm seeking a dynamic team to learn from and
                      contribute to, with enthusiasm and adaptability. Check out
                      my portfolio for project highlights, and let's connect to
                      explore opportunities together. Ready to make a meaningful
                      impact as a MERN stack developer.
                    </p>
                    <a href={cv} target="_blank">
                      Download CV <RiFolderDownloadFill />
                    </a>
                  </div>
                )}
              </TrackVisibility>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default About;
