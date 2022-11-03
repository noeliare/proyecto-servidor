const { Router} = require ('express');
const router = Router();
const tablaAdministrador = require('./../baseDatos/administrador-bd');

router.get("/", async (peti, resp)=>{
    try {
        const listaAdministrador = await tablaAdministrador.select();
        resp.json(listaAdministrador);
    }catch(e){
        console.log('Error al manejar GET de administrador');
        console.log(e);
        resp.status(500).send(e.message);
    }
})

module.exports = router;
