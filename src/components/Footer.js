import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import { BiLogoNetlify } from "react-icons/bi";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className="footer pt-2">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/sabarinathan-developer"
                target="_blank"
              >
                <i>
                  <BsLinkedin />
                </i>
              </a>
              <a
                href="https://app.netlify.com/teams/sabari-skillsafari/overview"
                target="_blank"
              >
                <i>
                  <BiLogoNetlify />
                </i>
              </a>
              <a href="https://www.instagram.com/im_g_r_o_o_t_2110/">
                <i>
                  <BsInstagram />
                </i>
              </a>
              <a href="https://github.com/Sabari-Dev">
                <i>
                  <BsGithub />
                </i>
              </a>
            </div>
            <p>Copyright {new Date().getFullYear()}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
