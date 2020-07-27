const mongoose = require('mongoose');
const { Schema } = mongoose;

const Saldo = new  Schema({
    documento: String,
    telefono: String,
    saldo: String
});

module.exports = mongoose.model('Saldo', Saldo);