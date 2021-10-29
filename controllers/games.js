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

module.exports = router