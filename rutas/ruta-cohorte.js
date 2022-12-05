const { Router} = require ('express');
const router = Router();
const tablaCohorte = require('./../baseDatos/cohorte-bd');

router.get("/", async (peticion, respuesta)=>{
    try {
        const listaCohorte = await tablaCohorte.select();
        /* setTimeout(() =>{
         }, 3000);*/
         respuesta.json(listaCohorte);
         
     } catch (err) {
         respuesta.status(500).send(err.message);
     }
 });

router.post("/", async (peticion, respuesta) => {
    try {
        const cohorteRecibido = peticion.body;
        await tablaCohorte.insert(cohorteRecibido);
        respuesta.sendStatus(200);
    } catch (err) {
        respuesta.status(500).send(err.message);
    }
});

router.put("/", async (peticion, respuesta) => {
    try {
        const cohorteRecibido = peticion.body;
        console.log(cohorteRecibido);
        await tablaProyecto.update(cohorteRecibido)
        respuesta.sendStatus(200);
    } catch (err) {
        respuesta.status(500).send(err.message);
    }
});

router.delete("/:idcohorte", async (peticion, respuesta) => {
    try{
    const idRecibido = peticion.params.id
    console.log(idRecibido);
    await tablaProyecto.eliminar(idRecibido);
    respuesta.sendStatus(200);
    }catch (err){
        respuesta.status(500).send(err.message);
    }
});


module.exports = router;
