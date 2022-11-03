const conexion = require ('./conexion');

async function select(){
    try{
        const [registros] = await conexion.execute ('SELECT * FROM usuario');
        return registros;

    }catch (e){
        console.log('Error al consultar usuario');
        console.log(e);
        throw e;
    }
}
module.exports = {select}