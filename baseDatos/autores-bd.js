const conexion = require ('./conexion');

async function select(){
    try{
        const [registros] = await conexion.execute ('SELECT * FROM autores');
        return registros;

    }catch (e){
        console.log('Error al consultar autores');
        console.log(e);
        throw e;
    }
}
module.exports = {select}