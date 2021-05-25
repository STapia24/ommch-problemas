const express = require('express');
const router = express.Router();
const Problema = require('../problema.model');

router.delete('/:id', async (req, res) => {
    try{
        const removedPost = await Problema.deleteOne({_id: req.params.id})
        res.json({removedPost: removedPost})
    } catch(err) {
        res.json({message: err})
    }
})

module.exports = router;