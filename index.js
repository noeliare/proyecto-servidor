require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors= require('cors');

const servidor= express();

servidor.use(morgan('dev'));
servidor.use(express.json());
servidor.use(cors());

servidor.get("/", (peti, resp)=>{
    resp.send("Hola desde servidor REST");
});

servidor.use ("/proyecto", require('./rutas/ruta-proyectos'));
servidor.use ("/autores", require('./rutas/ruta-autores'));
servidor.use ("/sesion", require ('./rutas/ruta-sesion'));

servidor.listen(3000, ()=>{
    console.log("Servidor escuchando en el puerto 3000");
});