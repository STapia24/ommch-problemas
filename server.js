const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const PORT = process.env.PORT || 4000 ;
const Problema = require('./problema.model');
require('dotenv/config')

//Import Routes
//const getsRoute = require('./routes/gets');
//const postsRoute = require('./routes/posts');
//const deletesRoute = require('./routes/deletes');

//Use Routes
app.use(bodyParser.json());
app.use(cors());
//app.use('/gets', getsRoute);
//app.use('/posts', postsRoute);
//app.use('/deletes', deletesRoute);

app.get('/', (req, res) => {
    Problema.find(function(err, problemas) {
        if (err) {
            console.log(err);
        } else {
            res.json(problemas);
        }
    }); 
});

// Ignore favicon.
app.get('/favicon.ico', (req, res) => res.status(204));

app.get('/:id', (req, res) => {
    let id = req.params.id;
    Problema.findById(id, function(err, problema) {
        res.json(problema);
        return
    });
})

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
       res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')); 
    });
}

app.post('/add', (req, res) => {
    const problema = new Problema({
    problema_nombre: req.body.problema_nombre,
    problema_descripcion: req.body.problema_descripcion,
    problema_foto: req.body.problema_foto,
    problema_categoria: req.body.problema_categoria,
    problema_agregado_por: req.body.problema_agregado_por,
    problema_libro: req.body.problema_libro,
    problema_fecha_libro: req.body.problema_fecha_libro,
    problema_nivel: req.body.problema_nivel,
    problema_respuesta: req.body.problema_respuesta
    });
    problema.save()
        .then(problema => {
            res.status(200).json({'problema': 'El problema se agregó con éxito.'});
        })
        .catch(err=> {
            res.status(400).send('No se pudo agregar un nuevo problema');
        });
});

app.post('/:id', (req, res) => {
    Problema.findById(req.params.id, function(err, problema) {
        if(!problema)
            res.status(404).send('No se encontró la información');
        else
            problema.problema_nombre = req.body.problema_nombre;
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
})

app.delete('/:id', async (req, res) => {
    try{
        const removedPost = await Problema.deleteOne({_id: req.params.id})
        res.json({removedPost: removedPost})
    } catch(err) {
        res.json({message: err})
    }
})

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
console.log('MongoDB database connection established successsfully')
);


app.listen(PORT, function() {
    console.log('Server is running in Port: ' + PORT);
});