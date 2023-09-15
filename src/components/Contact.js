import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export const Contact = () => {
  const form = useRef();
  const [data, setData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    return setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const sendEmail = (e) => {
    e.preventDefault();
    if (!data.user_name || !data.user_email || !data.message) {
      toast.error("Check the details you given");
    } else {
      emailjs
        .sendForm(
          "service_p5tmr2u",
          "template_k30y23o",
          form.current,
          "l-YGGnlLukvzTBuu1"
        )
        .then(
          (result) => {
            toast.success("Thank you for the Message.");
             setData({ user_name: "", user_email: "", message: "" });
          },
          (error) => {
            console.log(error.text);
            toast.error(error.text);
          }
        );
    }
    setData({ user_name: "", user_email: "", message: "" });
  };
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <form ref={form} onSubmit={sendEmail}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          name="user_name"
                          placeholder="First Name"
                          onChange={handleChange}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          name="user_email"
                          placeholder="Email Address"
                          onChange={handleChange}
                        />
                      </Col>

                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          name="message"
                          placeholder="Message"
                          onChange={handleChange}
                        ></textarea>
                        <button type="submit" value="Send">
                          Send
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
