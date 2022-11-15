const { Router } = require ('express');
const router = Router();
const tablaUsuario = require('./../baseDatos/usuario-bd');
const jwt = require ('jsonwebtoken');
const jwtUtilis = require('../utilidades/token-utils.js'); 

router.post("/iniciar", async (peticion, respueata)=>{
    try{
        const { ci, password } = peticion.body;
        const usuarios = await tablaUsuario.getUsuarioPorCi(ci, password);
        if(usuarios.length !== 0){
            const usuario = usuarios[0];
            const token = await jwtUtils.generarToken(usuario.id);
            respuesta.json({token});
        }else{
            respuesta.sendStatus(401);
        }  
    }catch(e){
        console.error('Error al iniciar sesion',e);
        respuesta.status(500).send(e.message);
    }   
});
router.post("/mantener", async (peticion, respuesta)=>{
    try{
        const { token } = peticion.body;
        const tokenNuevo = await jwtUtils.refrescarToken(token);
        if(tokenNuevo){
            respuesta.json({token: tokenNuevo});
        }else{
           respuesta.sendStatus(400);
        }

    }catch(e){
        console.error("Error al mantener sesion", e);
        respuesta.status(500).send(e.message);
    }
});

module.exports = router;