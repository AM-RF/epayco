const mongoose = require('mongoose');
const { Schema } = mongoose;

const Cliente = new  Schema({
    documento: String,
    nombre: String,
    email: String,
    telefono: String
});

module.exports = mongoose.model('Cliente', Cliente);