const { Router} = require ('express');
const router = Router();
const tablaUsuarios = require('./../baseDatos/usuario-bd');

router.get("/", async (peti, resp)=>{
    try {
        const listaUsuarios = await tablaUsuarios.select();
        resp.json(listaUsuarios);
    }catch(e){
        console.log('Error al manejar GET de usuarios');
        console.log(e);
        resp.status(500).send(e.message);
    }
})

module.exports = router;
