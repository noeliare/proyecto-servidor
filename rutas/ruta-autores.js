const { Router} = require ('express');
const router = Router();
const tablaAutores = require('./../baseDatos/autores-bd');

router.get("/", async (peti, resp)=>{
    try {
        const listaAutores = await tablaAutores.select();
        resp.json(listaAutores);
    }catch(e){
        console.log('Error al manejar GET de autores');
        console.log(e);
        resp.status(500).send(e.message);
    }
})

module.exports = router;
