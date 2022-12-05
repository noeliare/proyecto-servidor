const { Router, application } = require('express');
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

router.get("/:id/archivo", (peticion, respuesta)=>{
    const { id } = peticion.params;
    console.log(__dirname);
    respuesta.sendFile( `/archivos/${id}.pdf`, {root: '.'});
})

router.post("/:id/archivo",(peticion, respuesta)=>{
    const { id } = peticion.params;
    console.log("cargando archivo")
    console.log(peticion.files)
    let EDFile = peticion.files.documento;
    const extension = EDFile.name.split(".")[1];
    console.log("extension", extension)
    EDFile.mv(`./archivos/${id}.${extension}`,err => {

        if(err) return respuesta.status(500).send({ message : err })


        return respuesta.sendStatus(200);

    })
   // respuesta.sendStatus(200)
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
