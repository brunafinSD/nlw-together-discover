const express = require('express');

// importando aquivo route
const route = require('./route');

const path = require('path');

// iniciando express
const server = express();

// configurando ejs
server.set('view engine', 'ejs');

server.use(express.static('public'))

// onde está a pasta views - dirname é a pasta atual
server.set('views', path.join(__dirname, 'views'))

// midleware: intermedio de tudo que entra, primeiro passa no middleware e depois vai pra rota
server.use(express.urlencoded({extended: true}))

server.use(route);

// inician servidor do node rodando na porta 3000 usando o método listen que já vem no express
server.listen(3000, () => console.log('Rodando'));


