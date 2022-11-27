const { Router } = require('express');
const router = Router();
const tablaProyecto = require('./../baseDatos/proyecto-bd');

router.get("/", async (peticion, respuesta) => {
    try {
        const listaProyecto = await tablaProyecto.select();
       /* setTimeout(() =>{
        }, 3000);*/
        console.log(listaProyecto)
        respuesta.json(listaProyecto);
        
    } catch (err) {
        respuesta.status(500).send(err.message);
    }
});

router.post("/", async (peticion, respuesta) => {
    try {
        const proyectoRecibido = peticion.body;
        await tablaProyecto.insert(proyectoRecibido);
        respuesta.sendStatus(200);
    } catch (err) {
        respuesta.status(500).send(err.message);
    }
});

router.put("/", async (peticion, respuesta) => {
    try {
        const proyectoRecibido = peticion.body;
        console.log(proyectoRecibido);
        await tablaProyecto.update(proyectoRecibido)
        respuesta.sendStatus(200);
    } catch (err) {
        respuesta.status(500).send(err.message);
    }
});

router.delete("/:id", async (peticion, respuesta) => {
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
