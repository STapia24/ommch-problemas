const express = require('express');
const router = express.Router();
const Problema = require('../problema.model');

router.post('/add', (req, res) => {
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

router.post('/:id', (req, res) => {
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

module.exports = router;