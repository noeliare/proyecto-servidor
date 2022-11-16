const conexion = require('./conexion');

async function insert(tecnicaturas) {
    try {
        await conexion.execute('INSERT INTO tecnicatura(idtecnicaturas, especialidades) VALUES(?, ?)', [tecnicaturas.idtecnicaturas, tecnicaturas.especialidades]);
    } catch (err) {
        console.log('Error al insertar tecnicaturas', err);
        throw err;
    }
}

async function select() {
    try {
        const [registro, campos] = await conexion.execute('SELECT * FROM tecnicaturas order by idtecnicaturas ASC');
        return registro;
    } catch (err) {
        console.log('Error al consultar tecnicaturas', err);
        throw err;
    }
}

async function update(tecnicaturas) {
    try {
        const [res] = await conexion.execute(
            'UPDATE tecnicaturas SET especialidades = ? WHERE idtecnicaturas = ?',
            [tecnicaturas.especialidades, tecnicaturas.idtecnicaturas]
        );
        console.log(res);
    } catch (err) {
        console.log('Error al editar las tecnicaturas', err);
        throw err;
    }
}

async function eliminar(idtecnicaturas) {
    try {
        await conexion.execute(
            'DELETE FROM tecnicaturas WHERE idtecnicaturas= ?',
            [idtecnicaturas]
        );
    } catch (err) {
        console.log('Error al eliminar tecnicaturas', err);
        throw err;
    }
}

module.exports = { insert, select, update, eliminar}
