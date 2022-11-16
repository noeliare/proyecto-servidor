const conexion = require ('./conexion');

async function insert(autores) {
    try {
        await conexion.execute('INSERT INTO autores(idAutores, nombreAutores, ApellidoAutores, ciAutores) VALUES(?, ?, ?, ?)', [autores.idAutores, autores.nombreAutores, autores.ApellidoAutores, autores.ciAutores]);
    } catch (err) {
        console.log('Error al insertar autores', err);
        throw err;
    }
}

async function select() {
    try {
        const [registro, campos] = await conexion.execute('SELECT * FROM autores order by idAutores ASC');
        return registro;
    } catch (err) {
        console.log('Error al consultar autores', err);
        throw err;
    }
}

async function update(autores) {
    try {
        const [res] = await conexion.execute(
            'UPDATE autores SET nombreAutores=?, ApellidoAutores=?, ciAutores= ? WHERE idAutores = ?',
            [autores.nombreAutores, autores.ApellidoAutores, autores.ciAutores, autores.idAutores ]
        );
        console.log(res);
    } catch (err) {
        console.log('Error al editar autores', err);
        throw err;
    }
}

async function eliminar(idAutores) {
    try {
        await conexion.execute(
            'DELETE FROM autores WHERE idAutores= ?',
            [idAutores]
        );
    } catch (err) {
        console.log('Error al eliminar autores', err);
        throw err;
    }
}

module.exports = { insert, select, update, eliminar }