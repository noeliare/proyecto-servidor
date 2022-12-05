require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors= require('cors');
const fileUpload= require('express-fileupload')
const servidor= express();

servidor.use(morgan('dev'));
servidor.use(express.json());
servidor.use(cors());
servidor.use(fileUpload({
    safeFileNames: true,
    preserveExtension: true
}));

servidor.get("/", (peti, resp)=>{
    resp.send("Hola desde servidor REST");
});

servidor.use ("/proyecto", require('./rutas/ruta-proyectos'));
servidor.use ("/autores", require('./rutas/ruta-autores'));
servidor.use ("/sesion", require ('./rutas/ruta-sesion'));
servidor.use ("/cohorte", require('./rutas/ruta-cohorte'));
servidor.use ("/tecnicaturas", require('./rutas/ruta-tecnicaturas'));

servidor.listen(3000, ()=>{
    console.log("Servidor escuchando en el puerto 3000");
});