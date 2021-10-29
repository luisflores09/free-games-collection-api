const express = require('express');
const mongoose = require('mongoose');
const gamesController = require('./controllers/games');
const morgan = require('morgan');

const app = express();

require('dotenv').config();
const { PORT = 3001, DATABASE_URL } = process.env;

mongoose.connect(DATABASE_URL);

const db = mongoose.connection;

db.on('connected', () => console.log('Connected to MongoDB'));
db.on('disconnected', () => console.log('Disconnected to MongoDB'));
db.on('error', () => console.log('MongoDB has an error ' + error.message));


app.use(morgan('dev'));
app.use(express.json());

app.get('/api', (req, res) => {
    res.json({
        message: 'Welcome to free-games-collection.io'
    });
});

app.use('/api/games', gamesController);

app.get('/api/*', (req, res) => {
    res.status(404).json({
        message: 'That Route was not found'
    });
});


app.listen(PORT, () => console.log(`Express is listening on Port: ${PORT}`));
