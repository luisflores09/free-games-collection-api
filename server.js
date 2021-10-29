const express = require('express');
const mongoose = require('mongoose');

const app = express();

require('dotenv').config();
const { PORT = 3001, DATABASE_URL } = process.env;

mongoose.connect(DATABASE_URL);

const db = mongoose.connection;

db.on('connected', () => console.log('Connected to MongoDB'));
db.on('disconnected', () => console.log('Disconnected to MongoDB'));
db.on('error', () => console.log('MongoDB has an error ' + error.message));




app.listen(PORT, () => console.log(`Express is listening on Port: ${PORT}`));
