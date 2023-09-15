import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const mySkills = [
    { course: "HTML", percent: "95" },
    { course: "CSS", percent: "80" },
    { course: "Javascript", percent: "81" },
    { course: "Bootstrap", percent: "90" },
    { course: "React JS", percent: "85" },
    { course: "Node JS", percent: "70" },
    { course: "Express JS", percent: "78" },
    { course: "Mongo DB", percent: "85" },
    { course: "FireBase", percent: "89" },
    { course: "PostMan", percent: "85" },
    { course: "Git", percent: "95" },
  ];
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider mt-3"
              >
                {mySkills.map((skill, index) => {
                  return (
                    <div className="item" key={index}>
                      <div
                        className="circular-progress mx-auto"
                        style={{
                          background: `conic-gradient(#aa367c ${
                            3.6 * skill.percent
                          }deg, #ccc 0deg)`,
                        }}
                      >
                        <span className="course-percent">{skill.percent}%</span>
                      </div>
                      <h5 className="mt-2">{skill.course}</h5>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
