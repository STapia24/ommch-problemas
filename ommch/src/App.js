import './App.css';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

import CreateProblema from "./components/create-problema.component";
import EditProblema from "./components/edit-problema.component";
import ProblemasList from "./components/problemas-list.component";

import logo from "./logo.png";

function App() {
  return (
    <Router>
        <Navbar bg="primary" variant="dark" sticky="top">
          <a className="navbar-brand" href="https://www.facebook.com/ommch" target="_blank" rel="noreferrer">
            <img src={logo} width="30" height="30" alt="Olimpiada Mexicana de Matematicas en Chihuahua" />
          </a>
          <Navbar.Brand href="/">OMMCH Problemario</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Problemas</Nav.Link>
            <Nav.Link href="/problemas-semana">Problemas de la Semana</Nav.Link>
            <Nav.Link href="/create">Agregar Problema</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar>
        <div className="container">
          <Route path="/" exact component={ProblemasList} />
          <Route path="/edit/:id" component={EditProblema} />
          <Route path="/create" component={CreateProblema} />
        </div>
    </Router>
  );
}


export default App;
