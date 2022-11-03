const conexion = require ('./conexion');

async function select(){
    try{
        const [registros] = await conexion.execute ('SELECT * FROM tecnicaturas');
        return registros;

    }catch (e){
        console.log('Error al consultar tecnicaturas');
        console.log(e);
        throw e;
    }
}
module.exports = {select}