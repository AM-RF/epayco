const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
mongoose.connect('mongodb://localhost/epayco')
    .then(db => console.log('Conectado'))
    .catch(err => console.log(err));

//Settings
app.set('port', 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use( '/clientes' , require('./routes/epayco'));

//Static files
app.use(express.static(__dirname + '/public'));

app.listen (app.get('port'), () => {
    console.log("Ejecutandose en el puerto 3000");
});