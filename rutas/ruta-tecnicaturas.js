const { Router} = require ('express');
const router = Router();
const tablaTecnicaturas= require('./../baseDatos/tecnicaturas-bd');

router.get("/", async (peticion, respuesta)=>{
    try {
        const listaTecnicaturas = await tablaTecnicaturas.select();
        /* setTimeout(() =>{
         }, 3000);*/
         respuesta.json(listaTecnicaturas);
         
     } catch (err) {
         respuesta.status(500).send(err.message);
     }
 });
 
 router.post("/", async (peticion, respuesta) => {
     try {
         const tecnicaturasRecibido = peticion.body;
         console.log(tecnicaturasRecibido);
         await tablaTecnicaturas.insert(tecnicaturasRecibido);
         respuesta.sendStatus(200);
     } catch (err) {
         respuesta.status(500).send(err.message);
     }
 });
 
 router.put("/", async (peticion, respuesta) => {
     try {
         const tecnicaturasRecibido = peticion.body;
         console.log(tecnicaturasRecibido);
         await tablaTecnicaturas.update(tecnicaturasRecibido)
         respuesta.sendStatus(200);
     } catch (err) {
         respuesta.status(500).send(err.message);
     }
 });
 
 router.delete("/:idtecnicaturas", async (peticion, respuesta) => {
     try{
     const idtecnicaturaRecibido = peticion.params.id
     console.log(idtecnicaturaRecibido);
     await tablaTecnicaturas.eliminar(idtecnicaturaRecibido);
     respuesta.sendStatus(200);
     }catch (err){
         respuesta.status(500).send(err.message);
     }
 });
 
 module.exports = router;