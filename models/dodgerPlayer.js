const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
    _id: Number,
    name: String,
    position: String,
    hometown: String,
    image: String
});

var Player = mongoose.model('Player', PlayerSchema);

module.exports = Player;