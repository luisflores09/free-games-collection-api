const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gameSchema = new Schema({
    id: String,
    title: String,
    thumbnail: String,
    shortDescription: String,
    genre: String,
    platform: String,
    publisher: String,
    developer: String,
    releaseDate: String,
}, {timestamps:true});

module.exports = mongoose.model('Game', gameSchema);
