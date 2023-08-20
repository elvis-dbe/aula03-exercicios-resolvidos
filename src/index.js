const express = require('express');
const { filtrarCarros, obterCarro } = require('./controladores/carros');
const { validarSenha } = require('./intermediarios');

const app = express();
const PORTA = 3000;

app.use(validarSenha);

app.get('/carros', filtrarCarros);
app.get('/carros/:id', obterCarro);

app.listen(PORTA, () => {
    console.log(`Servidor iniciado na porta ${PORTA}`);
});