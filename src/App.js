import './App.css';
import { CustomNavbar } from './components/Navbar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Footer } from "./components/Footer";
import { Projects } from "./components/Projects";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <Container>
        <Row>
          <Col xs={7} md={7} xl={7}>
            <Banner />
          </Col>
        </Row>
        <Row>
          <Col xs={7} md={7} xl={7}>
            <Skills />
          </Col>
        </Row>
        <Row>
          <Col xs={7} md={7} xl={7}>
            <Projects />
          </Col>
        </Row>
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

