import logo from './logo.svg';
import './App.css';
import { CustomNavbar } from './components/Navbar';
import {Banner} from './components/Banner';
import {Skills} from './components/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <CustomNavbar />
    <Banner />
    <Skills />
    </div>
  );
}

export default App;
