const conexion = require('./conexion');

async function insert(cohorte) {
    try {
        await conexion.execute('INSERT INTO cohorte(idcohorte, anhosdesde, anhoshasta) VALUES( ?, ?, ?)', [cohorte.idcohorte, cohorte.anhosdesde, cohorte.anhoshasta]);
    } catch (err) {
        console.log('Error al insertar el cohorte', err);
        throw err;
    }
}

async function select() {
    try {
        const [registro, campos] = await conexion.execute('SELECT * FROM cohorte');
        return registro;
    } catch (err) {
        console.log('Error al consultar el cohorte', err);
        throw err;
    }
}

async function update(cohorte) {
    try {
        const [res] = await conexion.execute(
            'UPDATE cohorte SET anhosdesde = ?, anhoshasta = ? WHERE idcohorte = ?',
            [cohorte.anhosdesde, cohorte.anhoshasta, cohorte.idcohorte]
        );
        console.log(res);
    } catch (err) {
        console.log('Error al editar el cohorte', err);
        throw err;
    }
}

async function eliminar(idcohorte) {
    try {
        await conexion.execute(
            'DELETE FROM cohorte WHERE idcohorte= ?',
            [idcohorte]
        );
    } catch (err) {
        console.log('Error al eliminar el cohorte', err);
        throw err;
    }
}

module.exports = { insert, select, update, eliminar}
