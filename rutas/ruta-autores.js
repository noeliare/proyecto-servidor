const { Router} = require ('express');
const router = Router();
const tablaAutores = require('./../baseDatos/autores-bd');

router.get("/", async (peticion, respuesta)=>{
    try {
        const listaAutores = await tablaAutores.select();
        /* setTimeout(() =>{
         }, 3000);*/
         respuesta.json(listaAutores);
         
     } catch (err) {
         respuesta.status(500).send(err.message);
     }
 });
 
 router.post("/", async (peticion, respuesta) => {
     try {
         const autorRecibido = peticion.body;
         console.log(autorRecibido);
         await tablaAutores.insert(autorRecibido);
         respuesta.sendStatus(200);
     } catch (err) {
         respuesta.status(500).send(err.message);
     }
 });
 
 router.put("/", async (peticion, respuesta) => {
     try {
         const autorRecibido = peticion.body;
         console.log(autorRecibido);
         await tablaAutores.update(autorRecibido)
         respuesta.sendStatus(200);
     } catch (err) {
         respuesta.status(500).send(err.message);
     }
 });
 
 router.delete("/:id", async (peticion, respuesta) => {
     try{
     const idRecibido = peticion.params.id
     console.log(idRecibido);
     await tablaAutores.eliminar(idRecibido);
     respuesta.sendStatus(200);
     }catch (err){
         respuesta.status(500).send(err.message);
     }
 });
 
 module.exports = router;
 