const mongoose = require('mongoose');

var attireSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    customer:String,
    trademark: String,
    img:String,
    name: String,
    price: String,
    size: String,
    description: String,
    sale: Number,
    total: Number,
    createdAt:String,
    updatedAt:String
});

var Attire = mongoose.model('Attire', attireSchema, 'attire');
module.exports = Attire;