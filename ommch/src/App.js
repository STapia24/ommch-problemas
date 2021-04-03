import './App.css';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import CreateProblema from "./components/create-problema.component";
import EditProblema from "./components/edit-problema.component";
import ProblemasList from "./components/problemas-list.component";

import logo from "./logo.png";

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="https://www.facebook.com/ommch" target="_blank" rel="noreferrer">
            <img src={logo} width="30" height="30" alt="Olimpiada Mexicana de Matematicas en Chihuahua" />
          </a>
          <Link to="/" className="navbar-brand">OMMCH Problemario</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Problemas</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">Crear Problema</Link>
              </li>
              
            </ul>
          </div>
        </nav>
        <Route path="/" exact component={ProblemasList} />
        <Route path="/edit/:id" component={EditProblema} />
        <Route path="/create" component={CreateProblema} />
      </div>
    </Router>
  );
}

export default App;
