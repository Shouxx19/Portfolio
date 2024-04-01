import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/img/logo2.png';
import Facebook from '../assets/img/facebook.svg';
import LinkedIn from '../assets/img/linkedin.svg';
import Instagram from '../assets/img/instagram.svg';
import GitHub from '../assets/img/github2.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6}>
                        <img src={logo} alt="Logo" id="logo" />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon" >
                            <a href='https://www.facebook.com/daniel19.agoston/' target="_blank" rel="noreferrer">
                                <img src={Facebook} alt='Facebook' />
                            </a>
                            <a href='https://www.linkedin.com/in/daniel-agoston-5500b02a9' target="_blank" rel="noreferrer">
                                <img src={LinkedIn} alt='LinkedIn' />
                            </a>
                            <a href='https://www.instagram.com/leinad.a' target="_blank" rel="noreferrer">
                                <img src={Instagram} alt='Instagram' />
                            </a>
                            <a href='https://github.com/Shouxx19' target="_blank" rel="noreferrer">
                                <img src={GitHub} alt='GitHub' />
                            </a>
                        </div>
                        <p>&copy; 2024 Ágoston Dániel. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}