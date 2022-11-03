const conexion = require ('./conexion');

async function select(){
    try{
        const [registros] = await conexion.execute ('SELECT * FROM administrador');
        return registros;

    }catch (e){
        console.log('Error al consultar administrador');
        console.log(e);
        throw e;
    }
}
module.exports = {select}