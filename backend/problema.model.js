const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Problema = new Schema({
    problema_descripcion: {
        type: String
    },
    problema_foto: {
        type: String
    },
    problema_categoria: {
        type: String
    }, 
    problema_agregado_por: {
        type: String
    },
    problema_libro: {
        type: String 
    },
    problema_nivel: {
        type: String
    },
    problema_respuesta: {
        type: String
    }
});

module.exports = mongoose.model('Problema', Problema);