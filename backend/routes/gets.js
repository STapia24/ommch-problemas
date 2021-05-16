const express = require('express');
const router = express.Router();
const Problema = require('../problema.model');

router.get('/', (req, res) => {
    Problema.find(function(err, problemas) {
        if (err) {
            console.log(err);
        } else {
            res.json(problemas);
        }
    }); 
});

router.get('/:id', (req, res) => {
    let id = req.params.id;
    Problema.findById(id, function(err, problema) {
        if(problema)
        res.json(problema);
        res.json({objectFound: false})
    });
})

module.exports = router;