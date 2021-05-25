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

// Ignore favicon.
router.get('/favicon.ico', (req, res) => res.status(204));

router.get('/:id', (req, res) => {
    let id = req.params.id;
    Problema.findById(id, function(err, problema) {
        res.json(problema);
        return
    });
})

module.exports = router;