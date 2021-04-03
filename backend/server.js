const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const problemaRoutes = express.Router();
const PORT = 4000;


let Problema = require('./problema.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/problemasOMMCH', { useNewUrlParser: true});
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successsfully");
})

problemaRoutes.route('/').get(function(req, res) {
    Problema.find(function(err, problemas) {
        if (err) {
            console.log(err);
        } else {
            res.json(problemas);
        }
    }); 
});

problemaRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Problema.findById(id, function(err, problema) {
        res.json(problema);
    });
});

problemaRoutes.route('/add').post(function(req, res) {
    let problema = new Problema(req.body);
    problema.save()
        .then(problema => {
            res.status(200).json({'problema': 'El problema se agregó con éxito.'});
        })
        .catch(err=> {
            res.status(400).send('No se pudo agregar un nuevo problema');
        });
});

problemaRoutes.route('/update/:id').post(function(req, res) {
    Problema.fndById(req.params.id, function(err, problema) {
        if(!problema)
            res.status(404).send('No se encontró la información');
        else
            problema.problema_descripcion = req.body.problema_descripcion;
            problema.problema_foto = req.body.problema_foto;
            problema.problema_categoria = req.body.problema_categoria;
            problema.problema_agregado_por = req.body.problema_agregado_por;
            problema.problema_libro =  req.body.problema_libro;
            problema.problema_anio = req.body.problema_anio;
            problema.problema_nivel = req.body.problema_nivel;
            problema.problema_respuesta = req.body.problema_respuesta;
            problema.save().then(problema => {
                res.json('Problema actualizado');
            })
            .catch( err => {
                res.status(400).send("No se ha podido actualizar el problema");
            });
    });
});

app.use('/problemas', problemaRoutes);

app.listen(PORT, function() {
    console.log("Server is running in Port: " + PORT);
});