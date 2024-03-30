import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {ArrowDownCircle} from "react-bootstrap-icons";
import headerImg from "../assets/img/coding2.svg";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Junior Frontend developer"] ;
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() =>{
        let ticker = setInterval(() => {
            tick();
        }, delta );

        return() => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText ===fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="Banner" id="home">
            <Container>
                <Row className="align-item-center">
                    <Col xs={12} md={6} xl={7}>
                        <h1>{`Hello! I'm Daniel , `}<span className="wrap"> {text}</span></h1>
                        <p>Frissen végeztem a Ruander Junior Frontend fejlesztő tanfolyamán. Ez az első projektem, remélem tetszeni fog, és a jövőben együtt dolgozhatunk. //
                            I freshly finished at Ruander, Junior Frontend developer course. This is my first project, I hope it will be to your likeing, and we can work together at the future. 
                        </p>
                        <button onClick={() => console.log('connect')}>Download CV <ArrowDownCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
