import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/img/logo2.png';
import Facebook from '../assets/img/facebook.svg';
import LinkedIn from '../assets/img/linkedin.svg';
import Instagram from '../assets/img/instagram.svg';
import GitHub from '../assets/img/github2.svg';


export const CustomNavbar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            }
            else {
                setScrolled(false);
            }
        }


        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt='Logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')} >Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')} >Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')} >Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
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
                        <button className="vvd" onClick={() => window.location.href = "mailto:agostondaniel18@gmail.com"} rel="noopener noreferrer"><span>Let's connect</span></button>
                    </span>
                </Navbar.Collapse>
            </Container >
        </Navbar >
    );
}
