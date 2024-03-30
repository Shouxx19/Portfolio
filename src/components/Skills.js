import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import ReactLogo from "../assets/img/react1.svg";
import HtmlLogo from "../assets/img/html2.svg";
import CssLogo from "../assets/img/css.svg";
import JsLogo from "../assets/img/javascript.svg";
import BootstrapLogo from "../assets/img/bootstrap.svg";
import Mintbg from "../assets/img/downbg.png";

import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skills" id="skills">
      <div className="bg-image">
        <img src={Mintbg} alt="Background" />
      </div>
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>Junior Frontendesként szeretem a kihívásokat, és szeretnék fejlődni, új nyelveket megtanulni, természetesen a jelenlegi tudásomat csiszolni.</p>
              <p className="motto">"Nincs olyan probléma, amire ne lenne megoldás".</p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                  <img src={HtmlLogo} alt="HTML" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={CssLogo} alt="CSS" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={BootstrapLogo} alt="Bootstrap" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={JsLogo} alt="JavaScript" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={ReactLogo} alt="React" />
                  <h5>React</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
