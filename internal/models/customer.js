const mongoose = require('mongoose');

var customerSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:String,
    email:String,
    phone:String,
    location:String,
    createdAt:String,
    updatedAt:String,
});

var Customer = mongoose.model('Customer', customerSchema, 'customer');
module.exports = Customer;