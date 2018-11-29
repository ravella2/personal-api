const  mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/personal-api", { useNewUrlParser: true} );

exports.Player = require('./dodgerPlayer');