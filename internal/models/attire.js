const mongoose = require('mongoose');

var attireSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    trademark: String,
    img:String,
    name: String,
    price: String,
    size: String,
    description: String,
    sale: Number,
    total: Number,
});

var Attire = mongoose.model('Attire', attireSchema, 'attire');
module.exports = Attire;