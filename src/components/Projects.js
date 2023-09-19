import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { HiCode, HiExternalLink } from "react-icons/hi";
import ecom from "../assets/img/ecom.png";
import chat from "../assets/img/chat.png";
import spotify from "../assets/img/spotify.png";
import todo from "../assets/img/todo.png";
import count from "../assets/img/count.png";
import calc from "../assets/img/calc.png";
import clock from "../assets/img/clock.png";
import menu from "../assets/img/menu.png";
import rps from "../assets/img/rps.png";
import num from "../assets/img/num.png";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      category: "mern",
      title: "E-commerce",
      description: "Online Shopping website using MERN.",
      gitLink: "https://github.com/Sabari-Dev/ecommerce-react-client.git",
      hostLink: "https://ecommerce-fullstack-sabari.netlify.app/",
      imgUrl: ecom,
    },
    {
      id: 2,
      category: "react",
      title: "Real time chat-app",
      description:
        "Using React ,bootstrap for design. Firebase for cloud database",
      gitLink: "https://github.com/Sabari-Dev/realTime-chat-react.git",
      hostLink: "https://real-time-chat-react.vercel.app/signIn",
      imgUrl: chat,
    },
    {
      id: 3,
      category: "react",
      title: "Spotify-clone",
      description:
        "A simple design and work like Spotify own Player.using this website we can add,delete,like and unlike the song.",
      gitLink: "https://github.com/Sabari-Dev/spotify-clone-reactJs.git",
      hostLink: "https://spotify-clone-react-js-eta.vercel.app/",
      imgUrl: spotify,
    },
    {
      id: 4,
      category: "javascript",
      title: "To-do List",
      description:
        "Create a todo list page for daily task using javascript,html,css,bootstrap.",
      gitLink: "https://github.com/Sabari-Dev/ToDo-List-Javascript.git",
      hostLink: "https://todolist-groot.netlify.app",
      imgUrl: todo,
    },
    {
      id: 5,
      category: "javascript",
      title: "Number guessing Game",
      description:
        "create a game for guessing number.every time it take the random number .so, within 10 attempts you should find the number.",
      gitLink: "https://github.com/Sabari-Dev/number-guess-game-js.git",
      hostLink: "https://numberguesser-game-groot.netlify.app/",
      imgUrl: num,
    },
    {
      id: 6,
      category: "javascript",
      title: "Analog Clock",
      description: "Analog clock in desktop using Javascript,html,css.",
      gitLink: "https://github.com/Sabari-Dev/analog_clock_js.git",
      hostLink: "https://analogclock-sab.netlify.app",
      imgUrl: clock,
    },
    {
      id: 7,
      category: "javascript",
      title: "Rock-Paper-Scissor",
      description:
        "This is one of the popular game .it created using Javascript.",
      gitLink: "https://github.com/Sabari-Dev/rock_paper_scissor.git",
      hostLink: "https://rockpaperscissor-groot.netlify.app/",
      imgUrl: rps,
    },

    {
      id: 8,
      category: "javascript",
      title: "Birthday CountDown",
      description:
        "Create Countdown page for my birthday using Javascript,html,css.Add ing the video for background.",
      gitLink:
        "https://github.com/Sabari-Dev/countdown_with_video_background_js.git",
      hostLink: "https://countdown-sab.netlify.app/",
      imgUrl: count,
    },
    {
      id: 9,
      category: "javascript",
      title: "Calculator",
      description: "Numeric calculator using javascript,css,html.",
      gitLink: "https://github.com/Sabari-Dev/calculator_js.git",
      hostLink: "https://calculator-sab.netlify.app",
      imgUrl: calc,
    },
    {
      id: 10,
      category: "javascript",
      title: "Menu Page",
      description:
        " create a hotel menu page using javascript,css,html.With filter option.",
      gitLink: "https://github.com/Sabari-Dev/Restaurant_menu.git",
      hostLink: "https://menupage-groot.netlify.app",
      imgUrl: menu,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">All</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Javascript</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">React</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fourth">MERN</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return (
                              <Col size={12} sm={6} md={4} key={project.id}>
                                <div className="proj-imgbx" key={project.id}>
                                  <img
                                    src={project.imgUrl}
                                    style={{ height: "230px" }}
                                  />
                                  <div className="proj-txtx">
                                    <h4>{project.title}</h4>
                                    <div className="links">
                                      <a href={project.gitLink}>
                                        Code <HiCode />
                                      </a>
                                      <a
                                        href={project.hostLink}
                                        target="_blank"
                                      >
                                        Demo <HiExternalLink />
                                      </a>
                                    </div>
                                    <span>{project.description}</span>
                                  </div>
                                </div>
                              </Col>
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects
                            .filter((proj) => proj.category === "javascript")
                            .map((project) => {
                              return (
                                <Col size={12} sm={6} md={4} key={project.id}>
                                  <div className="proj-imgbx" key={project.id}>
                                    <img
                                      src={project.imgUrl}
                                      style={{ height: "230px" }}
                                    />
                                    <div className="proj-txtx">
                                      <h4>{project.title}</h4>
                                      <div className="links">
                                        <a href={project.gitLink}>
                                          Code <HiCode />
                                        </a>
                                        <a
                                          href={project.hostLink}
                                          target="_blank"
                                        >
                                          Demo <HiExternalLink />
                                        </a>
                                      </div>
                                      <span>{project.description}</span>
                                    </div>
                                  </div>
                                </Col>
                              );
                            })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects
                            .filter((proj) => proj.category === "react")
                            .map((project) => {
                              return (
                                <Col size={12} sm={6} md={4} key={project.id}>
                                  <div className="proj-imgbx" key={project.id}>
                                    <img
                                      src={project.imgUrl}
                                      style={{ height: "230px" }}
                                    />
                                    <div className="proj-txtx">
                                      <h4>{project.title}</h4>
                                      <div className="links">
                                        <a href={project.gitLink}>
                                          Code <HiCode />
                                        </a>
                                        <a
                                          href={project.hostLink}
                                          target="_blank"
                                        >
                                          Demo <HiExternalLink />
                                        </a>
                                      </div>
                                      <span>{project.description}</span>
                                    </div>
                                  </div>
                                </Col>
                              );
                            })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fourth">
                        <Row>
                          {projects
                            .filter((proj) => proj.category === "mern")
                            .map((project) => {
                              return (
                                <Col size={12} sm={6} md={4} key={project.id}>
                                  <div className="proj-imgbx" key={project.id}>
                                    <img
                                      src={project.imgUrl}
                                      style={{ height: "230px" }}
                                    />
                                    <div className="proj-txtx">
                                      <h4>{project.title}</h4>
                                      <div className="links">
                                        <a
                                          href={project.gitLink}
                                          target="_blank"
                                        >
                                          Code <HiCode />
                                        </a>
                                        <a
                                          href={project.hostLink}
                                          target="_blank"
                                        >
                                          Demo <HiExternalLink />
                                        </a>
                                      </div>
                                      <span>{project.description}</span>
                                    </div>
                                  </div>
                                </Col>
                              );
                            })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
