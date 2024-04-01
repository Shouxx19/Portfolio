import { Container, Row, Col } from "react-bootstrap";
import { ArrowDownCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/laptop.svg";
import Cv from "../assets/cv/cv2024.pdf";


export const Banner = () => {

    return (
        <section className="Banner" id="home">
            <Container>
                <Row className="align-item-center">
                    <Col >
                        <h1>{`Hello! I'm Daniel , `}<span className="wrap"> Junior Frontend Developer</span></h1>
                        <p>I live in Budapest, and I started my developer career in 2024.
                            I freshly finished at Ruander, Junior Frontend developer course, and would like to work in software engineer field. This is my first project, I hope it will be to your liking, and we can work together at the future.
                        </p>
                        <button onClick={() => window.open(Cv, '_blank')}>Download CV <ArrowDownCircle size={25} /></button>

                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
