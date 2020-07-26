const express = require('express');
const { request } = require('express');
const router = express.Router();

router.get('/clientes', (request,  respon) => {
    respon.send("HOLA CLIENTE");
})


module.exports = router;
