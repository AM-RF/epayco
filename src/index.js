const express = require('express');
const morgan = require('morgan');
const app = express();

//Settings
app.set('port', 8080);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use(require('./routes/epayco'));

//Static files
app.use(express.static(__dirname + '/public'));

app.listen (app.get('port'), () => {
    console.log("Ejecutandose en el puerto 8080");
});