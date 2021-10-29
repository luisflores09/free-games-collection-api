const express = require('express');
const Game = require('../models/game');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        res.json(await Game.find({}));
    } catch (error) {
        res.status(401).json();
    }
});

router.post('/', async (req, res) => {
    try {
        res.json(await Game.create(req.body));
    } catch (error) {
        res.status(401).json();
    }
});

router.delete('/:id', async (req, res) => {
    try {
        res.json(await Game.findByIdAndDelete(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
});

router.put('/:id', async (req, res) => {
    try {
        res.json(
            await Game.findByIdAndUpdate(req.params.id, req.body, { new: true})
        );
    } catch (error) {
        res.status(400).json(error);
    }
})

module.exports = router