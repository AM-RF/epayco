const express = require('express');
const { request } = require('express');
const Cliente = require('../models/clientes');
const Saldo = require('../models/saldo');
const router = express.Router();

/*Obtener clientes*/
router.get('/', async (request,  respon) => {
    const clientes = await Cliente.find();
    respon.json(clientes);
        
});
/*Agregar cliente*/
router.post('/', async (request, respon) => {
    console.log(request.body);
    const cliente = new Cliente(request.body);
    await cliente.save();
    console.log(request.body);
    respon.json({
        status: 200
    });
});

/*Obtener id*/
router.get('/:id', async (request, respon) =>{
    const cliente = await Cliente.findById(request.params.id);
    respon.json(cliente);
});

/*Recargar saldo*/
router.post('/saldo', async (request, respon) => {
    const saldo = new Saldo(request.body);
    await saldo.save();
    console.log(request.body);
    respon.json({
        status: 200
    });
});

/*Consultar saldo*/
router.get('/saldo/:documento', async (request, respon) => {
    const saldo = await Saldo.find(request.params.documento);
    respon.json(saldo);
});


module.exports = router;
