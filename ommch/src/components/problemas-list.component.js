import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Problema = props => (
    <tr>
        <td>{props.problema.problema_nombre}</td>
        <td className={props.problema.problema_usado ? 'usado' : ''}>{props.problema.problema_categoria}</td>
        <td className={props.problema.problema_usado ? 'usado' : ''}>{props.problema.problema_nivel}</td>
        <td className={props.problema.problema_usado ? 'usado' : ''}>{props.problema.problema_agregado_por}</td>
        <td>
            <Link to={"/edit/" + props.problema._id}>Editar</Link>
        </td>
    </tr>
)

export default class ProblemasList extends Component {

    constructor(props) {
        super(props);
        this.state = { problemas: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/problemas/')
        .then(response => {
            this.setState({problemas: response.data});
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    
    componentDidUpdate() {
        axios.get('http://localhost:4000/problemas/')
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