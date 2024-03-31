import { Container, Row, Col } from "react-bootstrap";
import {ArrowDownCircle} from "react-bootstrap-icons";
import headerImg from "../assets/img/coding2.svg";
import Cv from "../assets/cv/cv.pdf";


export const Banner = () => {
    
    return (
        <section className="Banner" id="home">
            <Container>
                <Row className="align-item-center">
                    <Col xs={12} md={6} xl={7}>
                        <h1>{`Hello! I'm Daniel , `}<span className="wrap"> Junior Frontend Developer</span></h1>
                        <p>Frissen végeztem a Ruander Junior Frontend fejlesztő tanfolyamán. Ez az első projektem, remélem tetszeni fog, és a jövőben együtt dolgozhatunk. //
                            I freshly finished at Ruander, Junior Frontend developer course. This is my first project, I hope it will be to your likeing, and we can work together at the future. 
                        </p>
                        <button onClick={() => window.open(Cv, '_blank')}>Download CV <ArrowDownCircle size={25}/></button>

                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
