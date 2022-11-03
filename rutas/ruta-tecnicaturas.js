const { Router} = require ('express');
const router = Router();
const tablaTecnicaturas= require('./../baseDatos/tecnicaturas-bd');

router.get("/", async (peti, resp)=>{
    try {
        const listaTecnicaturas = await tablaTecnicaturas.select();
        resp.json(listaTecnicaturas);
    }catch(e){
        console.log('Error al manejar GET de tecnicaturas');
        console.log(e);
        resp.status(500).send(e.message);
    }
})

module.exports = router;
