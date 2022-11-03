const conexion = require ('./conexion');

async function select(){
    try{
        const [registros] = await conexion.execute ('SELECT * FROM cohorte');
        return registros;

    }catch (e){
        console.log('Error al consultar cohorte');
        console.log(e);
        throw e;
    }
}
module.exports = {select}