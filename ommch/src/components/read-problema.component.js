import React, {Component} from 'react';
import axios from 'axios';
//import Button from 'react-bootstrap/Button';

export default class ReadProblema extends Component {
    constructor(props) {
        super(props);

        this.state = {
            problema_nombre: '',
            problema_descripcion: '',
            problema_foto: '',
            problema_categoria: '',
            problema_agregado_por: '',
            problema_libro: '',
            problema_anio: '',
            problema_nivel: '',
            problema_respuesta: ''

        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/gets/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    problema_nombre: response.data.problema_nombre,
                    problema_descripcion: response.data.problema_descripcion,
                    problema_foto: response.data.problema_foto,
                    problema_categoria: response.data.problema_categoria,
                    problema_agregado_por: response.data.problema_agregado_por,
                    problema_libro: response.data.problema_libro,
                    problema_anio: response.data.problema_anio,
                    problema_nivel: response.data.problema_nivel,
                    problema_respuesta: response.data.problema_respuesta
                })
            })
            .catch(function(error){
                console.log(error)
            })
    }

    render() {
        return (
            <div>
                <h3>{this.problema_nombre}</h3>
                <p>{this.problema_descripcion}</p>
            </div>
        )
    }
}