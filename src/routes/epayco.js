const express = require('express');
const { request } = require('express');
const Cliente = require('../models/clientes');
const router = express.Router();

router.get('/', async (request,  respon) => {
    const clientes = await Cliente.find();
    respon.json(clientes);
        
});

router.post('/', async (request, respon) => {
    const cliente = new Cliente(request.body);
    await cliente.save();
    console.log(request.body);
    respon.json({
        status: 200
    });

});
/*
router.get('/clientes', (request,  respon) => {
    respon.send("HOLA CLIENTE");
});*/


module.exports = router;
