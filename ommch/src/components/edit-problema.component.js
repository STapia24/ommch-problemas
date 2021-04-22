import React, {Component} from 'react';
import axios from 'axios';


export default class EditProblema extends Component {
    constructor(props) {
        super(props);
        
        this.onChangeProblemaNombre = this.onChangeProblemaNombre.bind(this);
        this.onChangeProblemaDescripcion = this.onChangeProblemaDescripcion.bind(this);
        this.onChangeProblemaFoto = this.onChangeProblemaFoto.bind(this);
        this.onChangeProblemaCategoria = this.onChangeProblemaCategoria.bind(this);
        this.onChangeProblemaAgregadoPor = this.onChangeProblemaAgregadoPor.bind(this);
        this.onChangeProblemaLibro = this.onChangeProblemaLibro.bind(this);
        this.onChangeProblemaNivel = this.onChangeProblemaNivel.bind(this);
        this.onChangeProblemaRespuesta = this.onChangeProblemaRespuesta.bind(this);
        this.onChangeProblemaAnio = this.onChangeProblemaAnio.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

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
        axios.get('http://localhost:4000/problemas/'+this.props.match.params.id)
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

    onChangeProblemaNombre(e) {
        this.setState({
            problema_nombre: e.target.value
        });
    }

    onChangeProblemaDescripcion(e) {
        this.setState({
            problema_descripcion: e.target.value
        });
    }

    onChangeProblemaCategoria(e) {
        this.setState({
            problema_categoria: e.target.value
        });
    }

    onChangeProblemaAgregadoPor(e) {
        this.setState({
            problema_agregado_por: e.target.value
        });
    }

    onChangeProblemaLibro(e) {
        this.setState({
            problema_libro: e.target.value
        });
    }

    onChangeProblemaAnio(e) {
        this.setState({
            problema_anio: e.target.value
        });
    }

    onChangeProblemaNivel(e) {
        this.setState({
            problema_nivel: e.target.value
        });
    }

    onChangeProblemaRespuesta(e) {
        this.setState({
            problema_respuesta: e.target.value
        });
    }

    onChangeProblemaFoto(e) {
        this.setState({
            problema_foto: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            problema_nombre: this.state.problema_nombre,
            problema_descripcion: this.state.problema_descripcion,
            problema_foto: this.state.problema_foto,
            problema_categoria: this.state.problema_categoria,
            problema_agregado_por: this.state.problema_agregado_por,
            problema_libro: this.state.problema_libro,
            problema_anio: this.state.problema_anio,
            problema_nivel: this.state.problema_nivel,
            problema_respuesta: this.state.problema_respuesta
        }
        axios.post('http://localhost:4000/problemas/update/'+this.props.match.params.id, obj)
        .then( res => console.log(res.data));
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3>Edita el problema</h3>
                <form onSubmit={this.onSubmit}>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-default">Nombre del Problema</span>
                        </div>
                        <input type="text" class="form-control" aria-label="Nombre del problema: " aria-describedby="inputGroup-sizing-default" value={this.state.problema_nombre} onChange={this.onChangeProblemaNombre}/>
                    </div>

                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Descripción del problema:</span>
                        </div>
                        <textarea class="form-control" aria-label="Descripción del problema:" value={this.state.problema_descripcion} onChange={this.onChangeProblemaDescripcion}></textarea>
                    </div>

                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Imagen</span>
                        </div>
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" id="inputGroupFile01" />
                            <label class="custom-file-label" for="inputGroupFile01">Escoge el archivo</label>
                        </div>
                    </div>
                    
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="inputGroupSelect01">Nivel</label>
                        </div>
                        <select class="custom-select" id="inputGroupSelect01" onChange={this.onChangeProblemaNivel}>
                            <option selected={this.state.problema_nivel === 'Selecciona'}>Selecciona</option>
                            <option value="Introductorio">Introductorio</option>
                            <option value="Pre-Estatal">Pre-Estatal</option>
                            <option value="Estatal">Estatal</option>
                            <option value="Pre-Nacional">Pre-Nacional</option>
                            <option value="Nacional">Nacional</option>
                            <option value="Internacional">Internacional</option>
                        </select>
                    </div>

                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="inputGroupSelect02">Categoría</label>
                        </div>
                        <select class="custom-select" id="inputGroupSelect02" onChange={this.onChangeProblemaCategoria}>
                            <option selected={this.state.problema_categoria === 'Selecciona'}>Selecciona</option>
                            <option value="Teoría de Números">Teoría de Números</option>
                            <option value="Álgebra">Álgebra</option>
                            <option value="Combinatoria">Combinatoria</option>
                            <option value="Geometría">Geometría</option>
                        </select>
                    </div>

                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Respuesta</span>
                        </div>
                        <textarea class="form-control" aria-label="Respuesta" value={this.state.problema_respuesta} onChange={this.onChangeProblemaRespuesta}></textarea>
                    </div>

                    <div classname="form-group mb-3">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="">Fuente</span>
                            </div>
                            <input type="text" class="form-control" placeholder="Libro/Competencia/Autor" value={this.state.problema_libro} onChange={this.onChangeProblemaLibro}/>
                            <input type="text" class="form-control" placeholder="Año" value={this.state.problema_anio} onChange={this.onChangeProblemaAnio}/>
                        </div>
                    </div>

                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Agregado por" aria-label="Agregado por" aria-describedby="basic-addon2" value={this.state.problema_agregado_por} onChange={this.onChangeProblemaAgregadoPor}/>
                        <div class="input-group-append">
                            <span class="input-group-text" id="basic-addon2">@ommch.com</span>
                        </div>
                    </div>
                    <div classname="form-group">
                       <input type="submit" value="Actualizar Problema" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}