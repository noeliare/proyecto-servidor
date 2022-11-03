const { Router} = require ('express');
const router = Router();
const tablaCohorte = require('./../baseDatos/cohorte-bd');

router.get("/", async (peti, resp)=>{
    try {
        const listaCohorte = await tablaCohorte.select();
        resp.json(listaCohorte);
    }catch(e){
        console.log('Error al manejar GET de cohorte');
        console.log(e);
        resp.status(500).send(e.message);
    }
})

module.exports = router;
