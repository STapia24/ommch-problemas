import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Jumbotron from 'react-bootstrap/Jumbotron';
//import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { BsFillTrashFill } from 'react-icons/bs';
import { BsFillEyeSlashFill } from 'react-icons/bs';
import { BsPencilSquare } from 'react-icons/bs';

const Problema = props => (
    <tr>
        <td>{props.problema.problema_nombre}</td>
        <td className={props.problema.problema_usado ? 'usado' : ''}>{props.problema.problema_categoria}</td>
        <td className={props.problema.problema_usado ? 'usado' : ''}>{props.problema.problema_nivel}</td>
        <td className={props.problema.problema_usado ? 'usado' : ''}>{props.problema.problema_agregado_por}</td>
        <td>
            <Link to={"/edit/" + props.problema._id}><BsPencilSquare />  </Link>
            <Link to={"/gets/" + props.problema._id}>   <BsFillEyeSlashFill /></Link>
            <Link to={"/deletes/" + props.problema._id}>   <BsFillTrashFill /></Link>
        </td>
    </tr>
)

export default class ProblemasList extends Component {

    constructor(props) {
        super(props);
        this.state = { problemas: []};
    }

    componentDidMount() {
        axios.get('https://ommch-problems.herokuapp.com/gets')
        .then(response => {
            this.setState({problemas: response.data});
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    componentDidUpdate() {
        axios.get('https://ommch-problems.herokuapp.com/gets')
        .then(response => {
            this.setState({problemas: response.data});
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    problemasList() {
        return this.state.problemas.map(function(currentProblema, i) {
            return <Problema problema={currentProblema} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <Jumbotron fluid>
                    <Container>
                        <h1>Problemario OMMCHEB 2021</h1>
                        <p>
                            Esta es una aplicación CRUD para el registro de problemas de la Olimpiada de Matemáticas para Educación Básica en Chihuahua.
                        </p>
                    </Container>
                </Jumbotron>
                <h3>Lista de Problemas</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Nombre del Problema</th>
                            <th>Categoría</th>
                            <th>Nivel</th>
                            <th>Agregado por</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.problemasList() }
                    </tbody>
                </table>
            </div>
        )
    }
}