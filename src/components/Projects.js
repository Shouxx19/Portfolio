import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import Card from './Card';


export const Projects = () => {

    return (
        <section className="project" id="projects">
            <Container>
                <Row >
                    <Col >
                        <div>
                            <h2>Projects</h2>
                            <p>The website is my first project, and this section will feature my future activities.</p>
                            <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Project 1</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Project 2</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">Project 3</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content id="slideInUp">
                                    <Tab.Pane eventKey="first">
                                        <Row >
                                            <Col>
                                                <Card />
                                            </Col>
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">

                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">

                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
