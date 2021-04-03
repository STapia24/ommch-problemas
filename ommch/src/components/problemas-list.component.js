import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

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
                        </tr>
                    </thead>
                </table>
            </div>
        )
    }
}